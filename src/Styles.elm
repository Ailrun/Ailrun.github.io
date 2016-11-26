port module Styles exposing ( .. )

import Css.File exposing ( .. )

import Html exposing ( div, program )
import Html.CssHelpers exposing ( withNamespace )

import Styles.Default exposing ( css )


{ id, class, classList } =
    withNamespace "ailrunBlog"


port files : CssFileStructure -> Cmd msg


cssFiles : CssFileStructure
cssFiles =
    toFileStructure [ ( "default.css", compile [ Styles.Default.css ] ) ]

main : Program Never () msg
main =
    program
        { init = ( (), files cssFiles )
        , view = \_ -> div [] []
        , update = \_ _ -> ( (), Cmd.none )
        , subscriptions = \_ -> Sub.none
        }
