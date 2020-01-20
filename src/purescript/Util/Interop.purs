module Util.Interop
  ( interop
  ) where

import Prelude

import Effect.Aff (Aff)
import Effect.Uncurried (EffectFn3, mkEffectFn3)
import Halogen as H
import Halogen.Aff as HA
import Halogen.HTML as HH
import Halogen.VDom.Driver (runUI)
import Web.HTML (HTMLElement)

interop :: forall q i o. EffectFn3 (H.Component HH.HTML q i o Aff) i HTMLElement Unit
interop = mkEffectFn3 (\component i -> HA.runHalogenAff <<< runUI component i)
