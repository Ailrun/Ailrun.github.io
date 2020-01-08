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

navigationBarHeight :: Number
navigationBarHeight = 2.5

render :: forall a m. State -> H.ComponentHTML a () m
render _
  = HHC.stylesheet do
    C.importUrl "https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
    C.select C.star do
      C.sym C.margin C.nil
      C.sym C.padding C.nil

      C.prefixed (CC.browsers <> C.fromString "margin-after") C.nil
      C.prefixed (CC.browsers <> C.fromString "margin-before") C.nil

    C.select C.body do
      C.width (C.pct 100.0)

      semisym C.margin C.nil CC.auto

      C.prefixed (CC.browsers <> C.fromString "overflow-y") "scroll"

      C.fontSize fontDefaultSize

    C.select C.a do
      C.textDecoration C.noneTextDecoration
      C.color (C.rgba 0 0 0 0.84)

    C.select navigationBarSelector do
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
          C.color (C.rgba 255 255 255 0.84)
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
          C.color (C.rgba 255 255 255 0.84)
  where
    semisym f tb lr = f tb lr tb lr

    sizeInherit = C.Size $ C.fromString "inherit"
