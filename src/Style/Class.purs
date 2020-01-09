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


aboutPageClassName :: String
aboutPageClassName = classPrefix <> "about-page"

aboutPageSelector :: C.Selector
aboutPageSelector = C.Selector (C.Refinement [C.Class aboutPageClassName]) C.Star


projectsPageClassName :: String
projectsPageClassName = classPrefix <> "projects-page"

projectsPageSelector :: C.Selector
projectsPageSelector = C.Selector (C.Refinement [C.Class projectsPageClassName]) C.Star


alignRightClassName :: String
alignRightClassName = classPrefix <> "align-right"

alignRightSelector :: C.Selector
alignRightSelector = C.Selector (C.Refinement [C.Class alignRightClassName]) C.Star

alignLeftClassName :: String
alignLeftClassName = classPrefix <> "align-left"

alignLeftSelector :: C.Selector
alignLeftSelector = C.Selector (C.Refinement [C.Class alignLeftClassName]) C.Star
