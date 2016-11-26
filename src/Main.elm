module Main exposing
    ( main )

import Navigation exposing ( Location, program )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import View exposing ( .. )
import Controller exposing ( .. )


init : Location -> ( Model, Cmd Msg )
init loc =
    case readLoc loc of
        ChangePage pt -> ( modelMaker pt, Cmd.none )
        _ -> ( modelMaker MainT, Cmd.none )

main : Program Never Model Msg
main =
    let
        blog =
            { init = init
            , update = update
            , subscriptions = subscriptions
            , view = view
            }
    in
        program readLoc blog
