module Style.Font
  ( module Style.Font
  ) where

import Prelude

import CSS as C
import Data.NonEmpty as NE

fontDancing :: C.CSS
fontDancing = C.fontFamily ["Dancing Script"] (NE.singleton (C.GenericFontFamily $ C.fromString "cursive"))

fontDefaultSize :: C.Size C.Rel
fontDefaultSize = C.vw 1.0

fontLargeSize :: C.Size C.Rel
fontLargeSize = C.vw 1.5

fontHugeSize :: C.Size C.Rel
fontHugeSize = C.vw 2.0

fontGiantSize :: C.Size C.Rel
fontGiantSize = C.vw 2.5
