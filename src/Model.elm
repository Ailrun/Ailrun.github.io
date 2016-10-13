module Model exposing ( Model, model )

import Model.HeaderModel exposing ( .. )
import Model.PageModel exposing ( .. )
import Model.PageModel.MainPageModel exposing ( .. )


type alias Model
    = { headerMenus : List HeaderMenu
      , page : Page }

hashParse : String -> Page
hashParse hash =
    case hash of
        "#Posts" -> Posts
        "#Projects" -> Projects
        "#About" -> About
        _ -> Main { banners = mainPageBanners }

model : String -> Model
model hash =
    { headerMenus =
          headerMenus
    , page =
          hashParse hash }

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
