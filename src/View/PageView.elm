module View.PageView exposing ( pageView )

import Html exposing ( .. )

import View.PageView.MainPageView exposing ( .. )
import View.PageView.PostsPageView exposing ( .. )
import View.PageView.ProjectsPageView exposing ( .. )
import View.PageView.AboutPageView exposing ( .. )
import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )


pageView : Model -> Html Msg
pageView model =
    case model.page of
        Main _ -> mainPageView model
        Posts _ -> postsPageView model
        Projects -> projectsPageView model
        About -> aboutPageView model
        NotFound -> mainPageView model
