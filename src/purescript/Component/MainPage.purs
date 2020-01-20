module Component.MainPage
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Constants (imageRoot)
import Data.Array (mapWithIndex)
import Data.Default (def)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Void

data Query a

type State = Unit

type Banner
  = { title :: String
    , description :: String
    , linkTitle :: String
    , background :: String
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
    [ HHP.class_ $ HH.ClassName mainPageClassName
    ]
    renderBanners
  where
    renderBanners = mapWithIndex renderBanner banners
    renderBanner n b
      = HH.article
        [ HHP.class_ $ HH.ClassName <<< bannerPositionClassName $ n
        ]
        [ HH.img
          [ HHP.src b.background
          ]
        , HH.header_
          [ HH.div_
            [ HH.h3_
              [ HH.text b.title
              ]
            , HH.p_
              [ HH.text b.description
              ]
            ]
          ]
        , HH.a_
          [ HH.text $ b.linkTitle <> " >"
          ]
        ]

    bannerPositionClassName n
      | n `mod` 2 == 0 = alignRightClassName
      | otherwise = alignLeftClassName

banners :: Array Banner
banners
  = [ { title: "Haskell"
      , description: "Modern, Pure, Beautiful\nFunctional Language"
      , linkTitle: "Haskell Projects"
      , background:  imageRoot <> "haskell.png"
      }
    , { title: "Beer"
      , description: "The World's Greatest Drink"
      , linkTitle: "Beer Lists"
      , background: imageRoot <> "beer.png"
      }
    , { title: "Elm"
      , description: "Functional Web Language\nwith MVC"
      , linkTitle: "Elm Projects"
      , background: imageRoot <> "elm.png"
      }
    , { title: "Purescript"
      , description: "Functional Web Language\n that is done right"
      , linkTitle: "Purescript Projects"
      , background: imageRoot <> "purescript.png"
      }
    ]
