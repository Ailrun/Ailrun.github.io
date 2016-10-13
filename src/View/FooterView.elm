module View.FooterView exposing ( footerView )

import Html exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )

footerView : Model -> Html Msg
footerView model =
    footer []
        [ text (pageToText model.page) ]

pageToText : Page -> String
pageToText p =
    case p of
        Main _ -> "Main"
        Posts -> "Posts"
        _ -> "other"
