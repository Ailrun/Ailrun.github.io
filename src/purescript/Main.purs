module Main where

import Prelude

import Component.App as App
import Data.BlogPage (blogPageToPath, pathToBlogPage)
import Data.Default (def)
import Data.Maybe (Maybe(..), fromMaybe)
import Effect (Effect)
import Halogen.Aff as HA
import Halogen.VDom.Driver (runUI)
import Routing.Hash (getHash, setHash)
import Style as Style
import Web.DOM.ParentNode (QuerySelector(..))

main :: Effect Unit
main = do
  mayPage <- pathToBlogPage <$> getHash

  page <- case mayPage of
    Just page ->
      pure page
    Nothing -> do
      setHash $ blogPageToPath def
      pure def

  HA.runHalogenAff do
    body <- HA.awaitBody
    head <- fromMaybe body <$> HA.selectElement (QuerySelector "head")
    _ <- runUI Style.component unit head
    runUI App.component page body
