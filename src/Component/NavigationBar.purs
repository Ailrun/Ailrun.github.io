module Component.NavigationBar
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Void

data Query a

type State = Unit

component :: forall i o m. H.Component HH.HTML Query i o m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval
    }

initialState :: forall i. i -> State
initialState _ = unit

render :: forall a m. State -> H.ComponentHTML a () m
render _
  = HH.header
    [ HHP.class_ (HH.ClassName navigationBarClassName)
    ]
    [ HH.h1_
      [ HH.a
        [ HHP.href "#Main"
        ]
        [ HH.text "Valhala of Valkyrie"
        ]
      ]
    , HH.ul_
      renderMenus
    ]
  where
    renderMenus = map renderMenu []
    renderMenu nm
      = HH.li_
        [ HH.a
          [ HHP.href nm.href
          ]
          [ HH.text nm.name
          ]
        ]
