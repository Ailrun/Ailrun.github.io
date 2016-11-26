module View.PageView.PostsPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes exposing ( src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )


postsPageView : Model -> Html Msg
postsPageView model =
    section [ class [ PostsPageClass ] ]
        ( postsPageTopView model
          ++ postsPagePostsView model )

postsPageTopView : Model -> List ( Html Msg )
postsPageTopView model =
    case model.page of
        Posts { banner } ->
            [ div [ class [ PageTitleClass ] ]
                  [ img [ src banner ] []
                  , header []
                      [ span [] [ text "Posts" ] ] ] ]
        _ ->
            []

postsPagePostsView : Model -> List ( Html Msg )
postsPagePostsView model =
    [ img [ src model.onDev ] [] ]
