module Main exposing ( main )

import Html.App exposing ( program )

import Model exposing ( .. )
import View exposing ( .. )
import Controller exposing ( .. )


init : ( Model, Cmd Msg )
init = ( Model.default, Cmd.none )

main : Program Never
main =
    let
        blog =
            { init = init
            , update = update
            , subscriptions = subscriptions
            , view = view
            }
    in
        program blog
