module Model exposing
    ( Model, modelMaker )

import Model.HeaderModel exposing ( .. )
import Model.PageModel exposing ( .. )
import Model.PageModel.MainPageModel exposing ( .. )


type alias Model
    = { headerMenus : List HeaderMenu
      , page : Page }

modelMaker : PageType -> Model
modelMaker pt =
    { headerMenus =
          headerMenus
    , page =
        pageTypeToPage pt }

headerMenus : List HeaderMenu
headerMenus =
    [ fromPageType MainT
    , fromPageType PostsT
    , fromPageType ProjectsT
    , fromPageType AboutT ]
    
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
