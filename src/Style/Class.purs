module Style.Class
  ( module Style.Class
  ) where

import CSS as C
import Data.Monoid ( (<>) )

classPrefix :: String
classPrefix = "ailrun-blog"

navigationBarClassName :: String
navigationBarClassName = classPrefix <> "navigation-bar"

navigationBarSelector :: C.Selector
navigationBarSelector = C.Selector (C.Refinement [C.Class navigationBarClassName]) C.Star

mainPageClassName :: String
mainPageClassName = classPrefix <> "main-page"

mainPageSelector :: C.Selector
mainPageSelector = C.Selector (C.Refinement [C.Class mainPageClassName]) C.Star
