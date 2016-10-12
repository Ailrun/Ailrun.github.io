module View.PageView exposing ( pageView )

import Html exposing ( .. )

import View.PageView.MainPageView exposing ( .. )
import View.PageView.PostsPageView exposing ( .. )
import View.PageView.ProjectsPageView exposing ( .. )
import View.PageView.AboutPageView exposing ( .. )
import Model exposing ( .. )
import Model.PageType exposing ( .. )
import Controller exposing ( .. )


pageView : Model -> Html Msg
pageView model =
    case model.pageType of
        Main _ -> mainPageView model
        Posts -> postsPageView model
        Projects -> projectsPageView model
        About -> aboutPageView model
