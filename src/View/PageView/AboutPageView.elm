module View.PageView.AboutPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes exposing ( src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )


aboutPageView : Model -> Html Msg
aboutPageView model =
    section [ class [ AboutPageClass ] ]
        ( aboutPageTopView model
          ++ aboutPagePostsView model )

aboutPageTopView : Model -> List ( Html Msg )
aboutPageTopView model =
    case model.page of
        About { banner } ->
            [ div [ class [ PageTitleClass ] ]
                  [ img [ src banner ] []
                  , header []
                      [ span [] [ text "About" ] ] ] ]
        _ ->
            []

aboutPagePostsView : Model -> List ( Html Msg )
aboutPagePostsView model =
    [ img [ src model.onDev ] [] ]
