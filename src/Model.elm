module Model exposing
    ( Model, modelMaker )

import Model.HeaderModel exposing ( .. )
import Model.PageModel exposing ( .. )
import Model.PageModel.MainPageModel exposing ( .. )


type alias Model
    = { headerMenus : List HeaderMenu
      , page : Page
      , onDev : String }

modelMaker : PageType -> Model
modelMaker pt =
    { headerMenus =
          headerMenus
    , page =
        pageTypeToPage pt
    , onDev =
          "image/onDev.png" }

headerMenus : List HeaderMenu
headerMenus =
    [ fromPageType MainT
    , fromPageType PostsT
    , fromPageType ProjectsT
    , fromPageType AboutT ]
