module Component.ProjectsPage
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Data.Array ( intercalate )
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
    [ HHP.class_ $ HH.ClassName projectsPageClassName
    ]
    [ renderTop
    ]
  where
    renderTop
      = HH.section_
        [ HH.img
          [ HHP.src ""
          ]
        , HH.header_
          [ HH.h1_
            [ HH.text "Projects"
            ]
          ]
        ]

    renderBottom
      = HH.section_
        $ map renderSection []

    renderSection s
      = HH.div_
        [ HH.h2_
          [ HH.text s.title
          ]
        , HH.hr_
        , HH.ul_
          $ ( intercalate
              [ HH.hr_ ]
            )
          $ ( map
              (pure <<< renderProject)
              (s.projects :: Array { link :: String, title :: String, images :: Array String })
            )
        ]

    renderProject p
      = HH.li_
        [ HH.article_
          [ HH.p_
            [ HH.span_
              [ HH.text "-"
              ]
            , HH.a
              [ HHP.href p.link
              ]
              [ HH.text p.title
              ]
            ]
          , HH.div_
            $ map (HH.img <<< pure <<< HHP.src) p.images
          ]
        ]
