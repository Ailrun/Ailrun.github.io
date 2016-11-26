module View.PageView.AboutPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes as HA exposing ( src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )

import Animate.Css exposing ( .. )


aboutPageView : Model -> Html Msg
aboutPageView model =
    section [ class [ AboutPageClass ] ]
        ( aboutPageTopView model
          ++ aboutPageAboutView model )

aboutPageTopView : Model -> List ( Html Msg )
aboutPageTopView model =
    case model.page of
        About { banner } ->
            [ div [ class [ PageTitleClass ] ]
                  [ img [ src banner
                        , HA.classList
                            [ ( animated, True )
                            , ( fadeIn, True ) ] ] []
                  , header []
                      [ span [] [ text "About" ] ] ] ]
        _ ->
            []

aboutPageAboutView : Model -> List ( Html Msg )
aboutPageAboutView model =
    [ div [ class [ UnderDevClass ] ]
          [ img [ src model.underDev
                , HA.classList
                    [ ( animated, True )
                    , ( fadeIn, True ) ] ] [] ] ]
