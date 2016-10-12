module View.FooterView exposing ( footerView )

import Html exposing ( .. )

import Model exposing ( .. )
import Controller exposing ( .. )

footerView : Model -> Html Msg
footerView model =
    footer []
        []
