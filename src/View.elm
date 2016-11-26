module View exposing ( view )

import Html exposing ( .. )

import View.HeaderView exposing ( .. )
import View.PageView exposing ( .. )
import View.FooterView exposing ( .. )
import Model exposing ( .. )
import Controller exposing ( .. )


view : Model -> Html Msg
view model =
    div []
        [ main_ []
              [ pageView model ]
        , headerView model
        , footerView model ]
