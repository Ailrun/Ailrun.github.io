module Component.MainPage
  ( Slot
  , Query(..)
  , component
  ) where

import Prelude
import Style.Class

import Data.Array (mapWithIndex)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Void

data Query a

type Input = Array Banner

type State = Input

type Banner
  = { title :: String
    , description :: String
    , linkTitle :: String
    , background :: String
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
    [ HHP.class_ $ HH.ClassName mainPageClassName
    ]
    renderBanners
  where
    renderBanners = mapWithIndex renderBanner state
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
