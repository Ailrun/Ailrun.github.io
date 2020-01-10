module Component.App
  ( Input
  , component
  ) where

import Prelude

import Component.AboutPage as AboutPage
import Component.MainPage as MainPage
import Component.NavigationBar as NavigationBar
import Component.ProjectsPage as ProjectsPage
import Data.BlogPage (BlogPage(..))
import Data.Default (def)
import Data.Maybe (Maybe(..))
import Data.Symbol (SProxy)
import Halogen as H
import Halogen.HTML as HH

type Input = BlogPage

type State
  = { currentPage :: BlogPage
    }

data Action
  = MoveToPage BlogPage

type ChildSlots
  = ( navigationBar :: NavigationBar.Slot Unit
    , aboutPage :: AboutPage.Slot Unit
    , mainPage :: MainPage.Slot Unit
    , projectsPage :: ProjectsPage.Slot Unit
    )

component :: forall q o m. H.Component HH.HTML q Input o m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval $ H.defaultEval { handleAction = handleAction }
    }
  where
    handleAction (MoveToPage p) = do
      _ <- H.modify $ _{ currentPage = p }
      pure unit

initialState :: Input -> State
initialState currentPage
  = (def :: State)
    { currentPage = currentPage
    }

render :: forall m. State -> H.ComponentHTML Action ChildSlots m
render state
  = HH.div_
    [ HH.slot _navigationBar unit NavigationBar.component state.currentPage (Just <<< MoveToPage)
    , HH.main_ <<< pure
      $ renderCurrentPage
    ]
  where
    renderCurrentPage = case state.currentPage of
      AboutPage -> HH.slot _aboutPage unit AboutPage.component unit absurd
      MainPage -> HH.slot _mainPage unit MainPage.component unit absurd
      ProjectsPage -> HH.slot _projectsPage unit ProjectsPage.component unit absurd

    _navigationBar = def :: SProxy "navigationBar"
    _aboutPage = def :: SProxy "aboutPage"
    _mainPage = def :: SProxy "mainPage"
    _projectsPage = def :: SProxy "projectsPage"
