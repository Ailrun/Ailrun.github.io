module Util.Navigate
  ( navigate
  ) where

import Data.Unit (Unit)
import Effect (Effect)
import Effect.Uncurried (EffectFn1, runEffectFn1)

foreign import navigate_ :: EffectFn1 String Unit

navigate :: String -> Effect Unit
navigate s = runEffectFn1 navigate_ s
