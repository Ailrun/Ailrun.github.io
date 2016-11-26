module Model.PageModel.MainPageModel exposing
    ( MainPageBanner, mainPageBannersDefault )


type alias MainPageBanner
    = { title : String
      , description : String
      , link : String
      , linkTitle : String
      , background : String }


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
      , background = "image/elm.png"}]
