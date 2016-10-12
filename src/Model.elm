module Model exposing ( Model, model, default )

import Model.HeaderMenu exposing ( .. )
import Model.PageType exposing ( .. )
import Model.PageType.MainPageBanner exposing ( .. )


type alias Model
    = { headerMenus : List HeaderMenu
      , pageType : PageType }

model : Model
model = { headerMenus =
              headerMenus
        , pageType =
              Main { banners = mainPageBanners } }

headerMenus : List HeaderMenu
headerMenus =
    [ fromName "Main"
    , fromName "Posts"
    , fromName "Projects"
    , fromName "About" ]
    
mainPageBanners : List MainPageBanner
mainPageBanners =
    [ { title = "Haskell"
      , description = "Modern, Pure, Beautiful\nFunctional Language"
      , link = ""
      , linkTitle = "Haskell Projects"
      , background = "image/haskell.png" }
    , { title = "Beer"
      , description = "The World's Greatest Drink"
      , link = ""
      , linkTitle = "Beer Lists"
      , background = "image/beer.png" }
    , { title = "Elm"
      , description = "Functional Web Language\nwith MVC"
      , link = ""
      , linkTitle = "Elm Projects"
      , background = "image/elm.png"}]

default : Model
default = model
