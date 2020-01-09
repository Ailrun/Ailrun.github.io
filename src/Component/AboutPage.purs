module Component.AboutPage
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

component :: forall q i o m. H.Component HH.HTML q i o m
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
  = HH.section
    [ HHP.class_ $ HH.ClassName aboutPageClassName
    ]
    [ renderTop
    , renderBottom
    ]
  where
    renderTop
      = HH.section_
        [ HH.img
          [ HHP.src ""
          ]
        , HH.header_
          [ HH.h1_
            [ HH.text "About"
            ]
          ]
        ]

    renderBottom
      = HH.section_
        [ HH.h2_
          [ HH.text ""
          ]
        , HH.div_
          $ map renderSubject []
        , HH.div_
          [ HH.img
            [ HHP.src ""
            ]
          , HH.h3_
            [ HH.text ""
            ]
          ]
        ]

    renderSubject s
      = HH.article_
        [ HH.h3_
          [ HH.text s.title
          ]
        , HH.p_
          [ HH.ul_
            $ map renderEntry s.entries
          ]
        ]
    renderEntry e
      = HH.li_
        [ HH.text $ "- " <> e
        ]
