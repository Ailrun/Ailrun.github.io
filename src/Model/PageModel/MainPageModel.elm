module Model.PageModel.MainPageModel exposing
    ( MainPage
    , MainPageBanner
    , mainPageDefault
    , mainPageBannersDefault )


type alias MainPage
    = { banners : List MainPageBanner }

type alias MainPageBanner
    = { title : String
      , description : String
      , link : String
      , linkTitle : String
      , background : String }


mainPageDefault : MainPage
mainPageDefault =
    { banners = mainPageBannersDefault }

mainPageBannersDefault : List MainPageBanner
mainPageBannersDefault =
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
      , background = "image/elm.png" } ]
