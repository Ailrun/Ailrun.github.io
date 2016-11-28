module View.PageView.ProjectsPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes as HA exposing ( href, src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Model.PageModel.ProjectsPageModel exposing ( .. )
import Controller exposing ( .. )

import Animate.Css exposing ( .. )


projectsPageView : Model -> Html Msg
projectsPageView model =
    section [ class [ ProjectsPageClass ] ]
        [ projectsPageTopView model
        , projectsPageProjectsView model ]

projectsPageTopView : Model -> Html Msg
projectsPageTopView model =
    case model.page of
        Projects { banner } ->
            section [ class [ PageTitleClass ] ]
                [ img [ src banner
                      , HA.classList
                          [ ( animated, True )
                          , ( fadeIn, True ) ] ] []
                , header []
                    [ h1 []
                          [ text "Projects" ] ] ]
        _ ->
            div [] []

projectsPageProjectsView : Model -> Html Msg
projectsPageProjectsView model =
    let
        projectsPageProjectMaker : ProjectsProject -> Html Msg
        projectsPageProjectMaker project =
            tr []
                [ td []
                      [ a [ href project.link ]
                            [ text project.title ] ]
                , td []
                    (List.map ( \s -> img [ src s ] [] ) project.images ) ]
        projectsPageSectionMaker : ProjectsSection -> Html Msg
        projectsPageSectionMaker section =
            div []
                [ h2 []
                      [ text section.title ]
                , table []
                    ( List.map projectsPageProjectMaker section.projects ) ]
    in
        case model.page of
            Projects { sections } ->
                section [ class [ PageMainClass ] ]
                    ( List.map projectsPageSectionMaker sections )
            _ ->
                div [] []
