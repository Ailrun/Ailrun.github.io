module View.HeaderView exposing ( headerView )

import Html exposing ( .. )
import Html.Attributes exposing ( href )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.HeaderModel exposing ( .. )
import Controller exposing ( .. )


headerView : Model -> Html Msg
headerView model =
    header [ class [ HeaderClass ] ]
        [ h1 []
              [ a [ href "#Main" ]
                    [ text "Valhala of Valkyrie" ] ]
        , ul []
              (headerMenuListMaker model) ]

headerMenuListMaker : Model -> List ( Html Msg )
headerMenuListMaker model =
    let
        headerMenuMaker : HeaderMenu -> Html Msg
        headerMenuMaker hm =
            li []
                [ a [ href hm.link ]
                      [ text hm.name ] ]
    in
        List.map headerMenuMaker model.headerMenus
