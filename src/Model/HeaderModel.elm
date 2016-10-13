module Model.HeaderModel exposing ( HeaderMenu, fromName )

type alias HeaderMenu
    = { name : String
      , link : String }

fromName : String -> HeaderMenu
fromName name =
    { name = name
    , link = "#" ++ name }
