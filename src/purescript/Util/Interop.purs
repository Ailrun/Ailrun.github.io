module Util.Interop
  ( interop
  ) where

import Control.Applicative (pure)
import Data.Either (either)
import Data.Function ((<<<))
import Data.Unit (Unit)
import Effect (Effect)
import Effect.Aff (Aff, runAff_)
import Effect.Exception (throwException)
import Effect.Uncurried (EffectFn1, runEffectFn1, EffectFn4, mkEffectFn4)
import Halogen as H
import Halogen.HTML as HH
import Halogen.VDom.Driver (runUI)
import Web.HTML (HTMLElement)

type InteropHalogenIO
  = { dispose :: Effect Unit
    }

interop :: forall q i o. EffectFn4 (H.Component HH.HTML q i o Aff) i HTMLElement (EffectFn1 InteropHalogenIO Unit) Unit
interop = mkEffectFn4 go
  where
    go component i el cb
      = runAff_ (either throwException (runEffectFn1 cb <<< convert)) (runUI component i el)

    convert :: H.HalogenIO q o Aff -> InteropHalogenIO
    convert { query, subscribe, dispose }
      = { dispose: runAff_ (either throwException pure) dispose
        }
