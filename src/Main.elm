module Main exposing ( main )

import Navigation exposing ( program, makeParser )

import Model exposing ( .. )
import View exposing ( .. )
import Controller exposing ( .. )


init : String -> ( Model, Cmd Msg )
init hash =
    ( model hash, Cmd.none )

main : Program Never
main =
    let
        locParser loc = loc.hash
        blog =
            { init = init
            , update = update
            , urlUpdate = \p m -> ( model p, Cmd.none )
            , subscriptions = subscriptions
            , view = view
            }
    in
        program ( makeParser locParser ) blog
