module Component.NavigationBar
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Component.Link as Link
import Data.BlogPage (BlogPage(..), blogPageToPath)
import Data.Default (def)
import Data.Maybe (Maybe)
import Data.Symbol (class IsSymbol, SProxy(..))
import Effect.Aff (Aff)
import Effect.Class (class MonadEffect)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP
import Prim.Row (class Cons)

type Slot = H.Slot Query Void

data Query a

type State = Unit

type ChildSlots
  = ( titleLink :: Link.Slot Void Unit
    , navLink0 :: Link.Slot Void Unit
    , navLink1 :: Link.Slot Void Unit
    , navLink2 :: Link.Slot Void Unit
    )

_titleLink :: SProxy "titleLink"
_titleLink = SProxy

component :: forall i o. H.Component HH.HTML Query i o Aff
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval
    }

initialState :: forall i. i -> State
initialState _ = def

render :: forall a m. (MonadEffect m) => State -> H.ComponentHTML a ChildSlots m
render _
  = HH.header
    [ HHP.class_ $ HH.ClassName navigationBarClassName
    ]
    [ HH.h1_
      [ HH.slot _titleLink unit (Link.component [HH.text "Valhala of Valkyrie"]) (blogPageToPath MainPage) absurd
      ]
    , HH.ul_
      renderMenus
    ]
  where
    renderMenus = map renderPageMenu [MainPage, ProjectsPage, AboutPage]
    renderPageMenu page
      = HH.li_
        [ renderWithPageLabel (\s -> HH.slot s unit (Link.component [HH.text $ blogPageToText page]) (blogPageToPath page) absurd) page
        ]

    renderWithPageLabel :: forall t. (forall query label _t. Cons label (H.Slot query Void Unit) _t ChildSlots => IsSymbol label => SProxy label -> t) -> BlogPage -> t
    renderWithPageLabel f MainPage = f (SProxy :: SProxy "navLink0")
    renderWithPageLabel f ProjectsPage = f (SProxy :: SProxy "navLink1")
    renderWithPageLabel f AboutPage = f (SProxy :: SProxy "navLink2")

    blogPageToText AboutPage = "About"
    blogPageToText MainPage = "Main"
    blogPageToText ProjectsPage = "Projects"
