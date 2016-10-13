module View.FooterView exposing ( footerView )

import Html exposing ( .. )

import Model exposing ( .. )
import Model.PageType exposing ( .. )
import Controller exposing ( .. )

footerView : Model -> Html Msg
footerView model =
    footer []
        [ text (pageToText model.pageType) ]

pageToText : PageType -> String
pageToText p =
    case p of
        Main _ -> "Main"
        Posts -> "Posts"
        _ -> "other"
