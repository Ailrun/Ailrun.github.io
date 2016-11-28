module View.PageView.AboutPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes as HA exposing ( src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Model.PageModel.AboutPageModel exposing ( .. )
import Controller exposing ( .. )

import Animate.Css exposing ( .. )


aboutPageView : Model -> Html Msg
aboutPageView model =
    section [ class [ AboutPageClass ] ]
        [ aboutPageTopView model
        , aboutPageAboutView model ]

aboutPageTopView : Model -> Html Msg
aboutPageTopView model =
    case model.page of
        About { banner } ->
            section [ class [ PageTitleClass ] ]
                [ img [ src banner
                      , HA.classList
                          [ ( animated, True )
                          , ( fadeIn, True ) ] ] []
                , header []
                    [ h1 []
                          [ text "About" ] ] ]
        _ ->
            div [] []

aboutPageAboutView : Model -> Html Msg
aboutPageAboutView model =
    let
        aboutPageEntryMaker : String -> Html Msg
        aboutPageEntryMaker entry =
            li []
                [ text <| "- " ++ entry ]
        aboutPageSubjectMaker : AboutSubject -> Html Msg
        aboutPageSubjectMaker { title, entries } =
            article []
                [ h3 []
                      [ text title ]
                , p []
                      [ ul []
                            ( List.map aboutPageEntryMaker entries ) ] ]
    in
        case model.page of
            About { profile, subjects } ->
                section [ class [ PageMainClass ] ]
                    [ h2 []
                          [ text profile.name ]
                    , div [ class [ LeftClass ] ]
                          ( List.map aboutPageSubjectMaker subjects )
                    , div [ class [ RightClass ] ]
                          [ img [ src profile.picture ] []
                          , h3 []
                                [ text profile.description ] ] ]
            _ ->
                div [] []
