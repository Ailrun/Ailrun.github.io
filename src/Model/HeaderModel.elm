module Model.HeaderModel exposing
    ( HeaderMenu, fromPageType )

import Model.PageModel exposing ( .. )


type alias HeaderMenu
    = { pageType : PageType
      , name : String
      , link : String }

fromPageType : PageType -> HeaderMenu
fromPageType pt =
    let
        name = pageTypeToString pt
    in
        { pageType = pt
        , name = name
        , link = "#" ++ name }
