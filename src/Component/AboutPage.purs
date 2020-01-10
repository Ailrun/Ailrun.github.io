module Component.AboutPage
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Data.Default (def)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Void

data Query a

type State = Unit

type Subject
  = { title :: String
    , entries :: Array Entry
    }

type Entry = String

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
    [ HHP.class_ $ HH.ClassName aboutPageClassName
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
          [ HHP.src "img/about.png"
          ]
        , HH.header_
          [ HH.h1_
            [ HH.text "About"
            ]
          ]
        ]

    renderBottom
      = HH.section
        [ HHP.class_ $ HH.ClassName pageMainClassName
        ]
        [ HH.h2_
          [ HH.text "Junyoung Clare Jang"
          ]
        , HH.div
          [ HHP.class_ $ HH.ClassName alignLeftClassName
          ]
          $ map renderSubject subjects
        , HH.div
          [ HHP.class_ $ HH.ClassName alignRightClassName
          ]
          [ HH.img
            [ HHP.src "img/about-profile.png"
            ]
          , HH.h3_
            [ HH.text "Clare with cups of beer"
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

subjects :: Array Subject
subjects
  = [ { title: "Hobby"
      , entries:
        [ "Enjoy life with beers"
        , "Fall in love with foods"
        , "Writing poems"
        ]
      }
    , { title: "Contact"
      , entries:
        [ "Github/Ailrun"
        ]
      }
    , { title: "Education"
      , entries:
        [ "Seoul Nat'l Univ, Bachelor's degree of Chemistry"
        , "Seoul Nat'l Univ, Bachelor's degree of Philosophy"
        , "Seoul Nat'l Univ, Bachelor's degree of Computer Science and Engineering"
        ]
      }
    ]
