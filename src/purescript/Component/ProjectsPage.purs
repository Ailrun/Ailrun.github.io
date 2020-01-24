module Component.ProjectsPage
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Data.Array (intercalate)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Void

data Query a

type Input = Array ProjectSection

type State = Input

type ProjectSection
  = { title :: String
    , projects :: Array Project
    }

type Project
  = { title :: String
    , link :: String
    , images :: Array String
    }

component :: forall o m. H.Component HH.HTML Query Input o m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval
    }

initialState :: Input -> State
initialState = identity

render :: forall a m. State -> H.ComponentHTML a () m
render state
  = HH.section
    [ HHP.class_ $ HH.ClassName projectsPageClassName
    ]
    [ renderTop
    , renderBottom
    ]
  where
    renderTop
      = HH.section
        [ HHP.class_ $ HH.ClassName pageTitleClassName
        ]
        [ HH.img
          [ HHP.src "https://raw.githubusercontent.com/Ailrun/media/master/blog-img/project.png"
          ]
        , HH.header_
          [ HH.h1_
            [ HH.text "Projects"
            ]
          ]
        ]

    renderBottom
      = HH.section
        [ HHP.class_ $ HH.ClassName pageMainClassName
        ]
        $ map renderSection state

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
              s.projects
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
