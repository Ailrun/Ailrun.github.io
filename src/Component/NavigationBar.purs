module Component.NavigationBar
  ( Slot
  , Query(..)
  , Output
  , component
  ) where

import Prelude
import Style.Class

import Data.BlogPage ( BlogPage(..) )
import Data.Maybe ( Maybe(..) )
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HHE
import Halogen.HTML.Properties as HHP

type Slot = H.Slot Query Output

data Query a

type Output = BlogPage

type State = Unit

type Action = BlogPage

component :: forall i m. H.Component HH.HTML Query i Output m
component
  = H.mkComponent
    { initialState
    , render
    , eval: H.mkEval (H.defaultEval { handleAction = handleAction })
    }
  where
    handleAction a = H.raise a

initialState :: forall i. i -> State
initialState _ = unit

render :: forall m. State -> H.ComponentHTML Action () m
render _
  = HH.header
    [ HHP.class_ $ HH.ClassName navigationBarClassName
    ]
    [ HH.h1_
      [ HH.a
        [ HHP.href "#"
        ]
        [ HH.text "Valhala of Valkyrie"
        ]
      ]
    , HH.ul_
      renderMenus
    ]
  where
    renderMenus = map (renderMenu <<< blogPageToMenu) [MainPage, ProjectsPage, AboutPage]
    renderMenu nm
      = HH.li_
        [ HH.a
          [ HHP.href nm.href
          , HHE.onClick (\a -> Just nm.page)
          ]
          [ HH.text nm.name
          ]
        ]

    blogPageToMenu AboutPage = { page: AboutPage, href: "#about", name: "About" }
    blogPageToMenu MainPage = { page: MainPage, href: "#", name: "Main" }
    blogPageToMenu ProjectsPage = { page: ProjectsPage, href: "#projects", name: "Projects" }
