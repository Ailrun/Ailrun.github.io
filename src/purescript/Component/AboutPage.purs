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

type Input = Array Subject

type State = Input

type Subject
  = { title :: String
    , entries :: Array Entry
    }

type Entry = String

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
          [ HHP.src "https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about.png"
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
          $ map renderSubject state
        , HH.div
          [ HHP.class_ $ HH.ClassName alignRightClassName
          ]
          [ HH.img
            [ HHP.src "https://raw.githubusercontent.com/Ailrun/media/master/blog-img/about-profile.png"
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
