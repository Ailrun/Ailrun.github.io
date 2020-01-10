module Component.ProjectsPage
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Data.Array (intercalate)
import Data.Default (def)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Void

data Query a

type State = Unit

type ProjectSection
  = { title :: String
    , projects :: Array Project
    }

type Project
  = { title :: String
    , link :: String
    , images :: Array String
    }

component :: forall q i o m. H.Component HH.HTML q i o m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval H.defaultEval
    }

initialState :: forall i. i -> State
initialState _ = def

render :: forall a m. State -> H.ComponentHTML a () m
render _
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
          [ HHP.src "img/project.png"
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
        $ map renderSection projectSections

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

projectSections :: Array ProjectSection
projectSections
  = [ { title: "Haskell"
      , projects:
        [ { title: "CUTE Lang"
          , link: "https://github.com/CUTE-Lang"
          , images:
            [ "https://avatars0.githubusercontent.com/u/17797042?v=3&s=200"
            ]
          }
        , { title: "Htaut"
          , link: "https://github.com/Ailrun/Htaut"
          , images:
            [ "https://travis-ci.org/Ailrun/Htaut.svg"
            , "https://img.shields.io/hackage/v/htaut.svg?maxAge=2592000"
            ]
          }
        , { title: "LambdaDB"
          , link: "https://github.com/Ailrun/LambdaDB"
          , images:
            [ "https://img.shields.io/badge/stack->=1.1-blue.svg?style=flat"
            , "https://img.shields.io/badge/status-alpha-orange.svg?style=flat"
            , "https://img.shields.io/hackage/v/LambdaDB.svg"
            , "https://travis-ci.org/Ailrun/LambdaDB.svg?branch=v0.0.0.6"
            ]
          }
        ]
      }
    , { title: "Emacs"
      , projects:
        [ { title: "yet-another-emacs-settings"
          , link: "https://github.com/Ailrun/yet-another-emacs-settings"
          , images:
            [ "https://img.shields.io/badge/Version-0.02.00-lightgrey.svg?style=flat"
            , "https://img.shields.io/badge/Status-Alpha-yellow.svg?style=flat"
            ]
          }
        , { title: "coq-commenter"
          , link: "https://github.com/Ailrun/coq-commenter"
          , images:
            [ "https://melpa.org/packages/coq-commenter-badge.svg"
            ]
          }
        ]
      }
    , { title: "Study"
      , projects:
        [ (def :: Project)
          { title = "core-lang-haskell"
          , link = "https://github.com/Ailrun/core-lang-haskell"
          }
        , (def :: Project)
          { title = "TRPL-study"
          , link = "https://github.com/Ailrun/TRPL-study"
          }
        , (def :: Project)
          { title = "Programming_in_Haskell"
          , link = "https://github.com/Ailrun/Programming_in_Haskell"
          }
        , (def :: Project)
          { title = "StackCalc"
          , link = "https://github.com/Ailrun/StackCalc"
          }
        , (def :: Project)
          { title = "BigInteger"
          , link = "https://github.com/Ailrun/BigInteger"
          }
        , (def :: Project)
          { title = "Elevator2way7floor"
          , link = "https://github.com/Ailrun/Elevator2way7floor"
          }
        , (def :: Project)
          { title = "LD_8bit_Microprocessor"
          , link = "https://github.com/Ailrun/LD_8bit_Microprocessor"
          }
        ]
      }
    ]
