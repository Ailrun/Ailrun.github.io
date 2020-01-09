module Style
  ( component
  ) where

import Prelude
import Style.Class
import Style.Font

import CSS as C
import CSS.Common as CC
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.CSS as HHC

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
  = HHC.stylesheet do
    cssCommon
    C.select navigationBarSelector cssNavigationBar

cssCommon :: C.CSS
cssCommon = do
  C.importUrl "https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
  C.select C.star do
    C.sym C.margin C.nil
    C.sym C.padding C.nil

    C.prefixed (CC.browsers <> C.fromString "margin-after") C.nil
    C.prefixed (CC.browsers <> C.fromString "margin-before") C.nil

  C.select C.body do
    C.width (C.pct 100.0)

    semisym C.margin C.nil CC.auto

    C.key (C.fromString "overflow-y") "scroll"

    C.fontSize fontDefaultSize

  C.select C.a do
    C.textDecoration C.noneTextDecoration
    C.color textBlack

cssNavigationBar :: C.CSS
cssNavigationBar = do
  C.width (C.pct 100.0)
  C.height (C.vw navigationBarHeight)

  semisym C.margin C.nil CC.auto
  C.position C.fixed
  C.top C.nil
  C.left C.nil
  C.right C.nil

  C.backgroundColor (C.rgba 0 0 0 0.72)

  C.lineHeight (C.vw navigationBarHeight)

  C.select C.h1 do
    C.height sizeInherit

    C.display C.inlineBlock

    C.fontSize fontLargeSize

    C.select C.a do
      C.height sizeInherit

      C.display C.inlineBlock
      C.marginLeft (C.em 0.5)

      fontDancing
      C.fontSize fontLargeSize
      C.color textWhite
  C.select C.ul do
    C.height sizeInherit

    C.display C.inline
    semisym C.margin CC.auto C.nil
    C.float C.floatRight
  C.select C.li do
    C.height sizeInherit

    C.display C.inlineBlock
    C.fontSize fontLargeSize

    C.select C.a do
      C.marginLeft (C.vw 1.0)
      C.marginRight (C.vw 1.0)

      fontDancing
      C.fontSize fontLargeSize
      C.color textWhite

cssMainPage :: C.CSS
cssMainPage = do
  C.color textWhite
  C.lineHeight (sizeNumber 1.3)

  C.select C.article do
    C.width (C.pct 100.0)
    C.height (C.vw bannerHeight)

    C.position C.relative

    C.backgroundColor (C.rgb 0 0 0)

  C.select (alignLeftSelector C.|> C.header) do
    C.left (C.pct 7.0)

  C.select (alignRightSelector C.|> C.header) do
    C.left (C.pct 73.0)

  C.select C.img do
    C.width sizeInherit
    C.height sizeInherit
    C.position C.absolute

  C.select C.header do
    C.height (C.vw bannerHeight)

    C.display C.inlineBlock
    C.marginTop (C.vw (- bannerHeight / 2.0))
    C.position C.absolute
    C.top (C.pct 50.0)
    C.bottom (C.pct 50.0)

    C.lineHeight (C.vw bannerHeight)

    C.select C.div do
      C.display C.inlineBlock

      C.key (C.fromString "vertical-align") "middle"

      C.lineHeight (sizeNumber 1.3)

    C.select C.a do
      C.position C.absolute
      C.right (C.pct 2.0)
      C.bottom (C.vw 1.0)

      C.key (C.fromString "color") "inherit"

    C.select C.h3 do
      C.fontSize fontHugeSize

    C.select C.p do
      C.textWhitespace C.whitespacePreWrap
      C.fontSize fontLargeSize


textBlack :: C.Color
textBlack = C.rgba 0 0 0 0.84

textWhite :: C.Color
textWhite = C.rgba 255 255 255 0.84

navigationBarHeight :: Number
navigationBarHeight = 2.5

bannerHeight :: Number
bannerHeight = 26.0


semisym :: forall a b. (a -> b -> a -> b -> C.CSS) -> a -> b -> C.CSS
semisym f tb lr = f tb lr tb lr

sizeNumber :: forall a. Number -> C.Size a
sizeNumber n = C.Size $ C.fromString (show n)

sizeInherit :: forall a. C.Size a
sizeInherit = C.Size $ C.fromString "inherit"
