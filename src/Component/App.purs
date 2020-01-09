module Component.App
  ( component
  ) where

import Prelude

import Component.AboutPage as AboutPage
import Component.MainPage as MainPage
import Component.ProjectsPage as ProjectsPage
import Component.NavigationBar as NavigationBar
import Data.BlogPage ( BlogPage(..) )
import Data.Maybe ( Maybe(..) )
import Data.Symbol ( SProxy(..) )
import Halogen as H
import Halogen.HTML as HH

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

component :: forall q i o m. H.Component HH.HTML q i o m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval (H.defaultEval { handleAction = handleAction })
    }
  where
    handleAction (MoveToPage p) = do
      _ <- H.modify (\s -> s{ currentPage = p })
      pure unit

initialState :: forall i. i -> State
initialState _
  = { currentPage: MainPage
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

    _navigationBar = SProxy :: SProxy "navigationBar"
    _aboutPage = SProxy :: SProxy "aboutPage"
    _mainPage = SProxy :: SProxy "mainPage"
    _projectsPage = SProxy :: SProxy "projectsPage"
