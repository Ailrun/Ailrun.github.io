module Main where

import Prelude

import Component.App as App
import Data.Maybe ( fromMaybe )
import Effect ( Effect )
import Halogen.Aff as HA
import Halogen.VDom.Driver ( runUI )
import Style as Style
import Web.DOM.ParentNode ( QuerySelector(..) )

main :: Effect Unit
main = HA.runHalogenAff do
  body <- HA.awaitBody
  head <- fromMaybe body <$> HA.selectElement (QuerySelector "head")
  _ <- runUI Style.component unit head
  runUI App.component unit body
