module View.PageView.PostsPageView exposing ( .. )

import Html exposing ( .. )
import Html.Attributes as HA exposing ( src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageModel exposing ( .. )
import Controller exposing ( .. )

import Animate.Css exposing ( .. )


postsPageView : Model -> Html Msg
postsPageView model =
    section [ class [ PostsPageClass ] ]
        [ postsPageTopView model
        , postsPagePostsView model ]

postsPageTopView : Model -> Html Msg
postsPageTopView model =
    case model.page of
        Posts { banner } ->
            div [ class [ PageTitleClass ] ]
                [ img [ src banner
                      , HA.classList
                          [ ( animated, True )
                          , ( fadeIn, True ) ] ] []
                , header []
                    [ h1 []
                          [ text "Posts" ] ] ]
        _ ->
            div [] []

postsPagePostsView : Model -> Html Msg
postsPagePostsView model =
    div [ class [ UnderDevClass ] ]
        [ img [ src model.underDev
              , HA.classList
                  [ ( animated, True )
                  , ( fadeIn, True ) ] ] [] ]
