module Component.App
  ( component
  ) where

import Prelude

import Component.NavigationBar as NavigationBar
import Data.Symbol ( SProxy(..) )
import Halogen as H
import Halogen.HTML as HH

type State = Unit

type ChildSlots
  = ( navigationBar :: NavigationBar.Slot Unit
    )

_navigationBar :: SProxy "navigationBar"
_navigationBar = SProxy

component :: forall q i o m. H.Component HH.HTML q i o m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval
    }

initialState :: forall i. i -> State
initialState _ = unit

render :: forall a m. State -> H.ComponentHTML a ChildSlots m
render _
  = HH.div_
    [ HH.slot _navigationBar unit NavigationBar.component unit absurd
    ]
