module Main exposing
    ( main )

import Navigation exposing ( program )

import Parser exposing ( .. )
import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import View exposing ( .. )
import Controller exposing ( .. )


init : PageType -> ( Model, Cmd Msg )
init pt =
    ( modelMaker pt, Cmd.none )

main : Program Never
main =
    let
        blog =
            { init = init
            , update = update
            , urlUpdate = urlUpdate
            , subscriptions = subscriptions
            , view = view
            }
    in
        program parser blog
