module Data.BlogPage
  ( BlogPage(..)
  , blogPageToPath
  , pathToBlogPage
  , pathToHash
  ) where

import Data.Default (class Default)
import Data.Maybe (Maybe(..))
import Data.Semigroup ((<>))

data BlogPage
  = AboutPage
  | MainPage
  | ProjectsPage

instance blogPageDefault :: Default BlogPage where
  def = MainPage

blogPageToPath :: BlogPage -> String
blogPageToPath AboutPage = "about"
blogPageToPath MainPage = ""
blogPageToPath ProjectsPage = "projects"

pathToBlogPage :: String -> Maybe BlogPage
pathToBlogPage "about" = Just AboutPage
pathToBlogPage "" = Just MainPage
pathToBlogPage "projects" = Just ProjectsPage
pathToBlogPage _ = Nothing

pathToHash :: String -> String
pathToHash p = "#" <> p
