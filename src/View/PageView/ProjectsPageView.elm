module View.PageView.ProjectsPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes exposing ( src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )


projectsPageView : Model -> Html Msg
projectsPageView model =
    section [ class [ ProjectsPageClass ] ]
        ( projectsPageTopView model
          ++ projectsPageProjectsView model )

projectsPageTopView : Model -> List ( Html Msg )
projectsPageTopView model =
    case model.page of
        Projects { banner } ->
            [ div [ class [ PageTitleClass ] ]
                  [ img [ src banner ] []
                  , header []
                      [ span [] [ text "Projects" ] ] ] ]
        _ ->
            []

projectsPageProjectsView : Model -> List ( Html Msg )
projectsPageProjectsView model =
    [ img [ src model.onDev ] [] ]
