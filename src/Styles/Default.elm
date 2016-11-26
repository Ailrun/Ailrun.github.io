module Styles.Default exposing ( css, DefaultClasses( .. ) )

import Css exposing ( .. )
import Css.Elements exposing ( .. )
import Css.Namespace exposing ( .. )

import Styles.Font exposing ( .. )

type DefaultClasses
    = HeaderClass
    | MainPageClass
    | PostsPageClass
    | ProjectsPageClass
    | AboutPageClass
    | PageTitleClass
    | RightClass
    | LeftClass
    | UnderDevClass


headerHeight : Float
headerHeight = 2.5

headerView : Snippet
headerView =
    (.) HeaderClass
          [ width ( pct 100 )
          , height ( vw headerHeight )

          , margin2 zero auto
          , position fixed
          , top zero
          , left zero
          , right zero

          , backgroundColor ( rgba 0 0 0 0.72 )

          , lineHeight ( vw headerHeight )

          , descendants
              [ h1
                    [ height inherit

                    , display inlineBlock

                    , fontSize fontLargeSize

                    , descendants
                          [ a
                                [ height inherit

                                , display inlineBlock
                                , marginLeft ( em 0.5 )

                                , fontSize fontLargeSize
                                , fontDancing
                                , color ( rgba 255 255 255 0.84 ) ] ] ]
              , ul
                    [ height inherit

                    , display inline
                    , margin2 auto zero
                    , float right ]
              , li
                    [ height inherit

                    , display inlineBlock

                    , fontSize fontLargeSize

                    , descendants
                          [ a   
                                [ marginLeft ( vw 1 )
                                , marginRight ( vw 1 )

                                , fontSize fontLargeSize
                                , fontDancing
                                , color ( rgba 255 255 255 0.84 ) ] ] ] ] ]


bannerHeight : Float
bannerHeight = 26

mainPageView : Snippet
mainPageView =
    (.) MainPageClass
        [ color ( rgba 255 255 255 0.84 )
        , lineHeight ( num 1.3 )
        , descendants
            [ article
                  [ width ( pct 100 )
                  , height ( vw bannerHeight )

                  , position relative

                  , backgroundColor ( rgb 0 0 0 ) ]
            , (.) RightClass
                  [ descendants
                        [ header
                              [ left ( pct 73 ) ] ] ]
            , (.) LeftClass
                  [ descendants
                        [ header
                              [ left ( pct 7 ) ] ] ]
            , img
                  [ width inherit
                  , height inherit
                  , position absolute ]
            , header
                  [ height ( vw bannerHeight )

                  , display inlineBlock
                  , marginTop ( vw ( -bannerHeight / 2 ) )
                  , position absolute
                  , top ( pct 50 )
                  , bottom ( pct 50 )

                  , lineHeight ( vw bannerHeight )

                  , descendants
                        [ div
                              [ display inlineBlock
                                    
                              , verticalAlign middle

                              , property "line-height" "1.3" ] ] ]
            , a
                  [ position absolute
                  , right ( pct 2 )
                  , bottom ( vw 1 )

                  , color inherit ]
            , h3
                  [ fontSize fontHugeSize ]
            , p
                  [ property "white-space" "pre-wrap"
                  , fontSize fontLargeSize ] ] ]

pageTitleView : Snippet
pageTitleView =
    (.) PageTitleClass
                    [ width ( pct 100 )
                    , height ( vw 26 )

                    , position relative

                    , backgroundColor ( rgb 0 0 0 )

                    , descendants
                          [ img
                                [ position absolute
                                , width inherit
                                , height inherit ]
                          , header
                                [ height ( vw 26 )

                                , position absolute
                                , top ( pct 50 )
                                , bottom ( pct 50 )
                                , left ( pct 7 )
                                , marginTop ( vw (-13) )
                                , display inlineBlock

                                , lineHeight ( vw 26 )

                                , descendants
                                    [ span
                                          [ color (rgba 255 255 255 0.84)
                                          , fontWeight bold
                                          , fontSize ( vw 2.7 ) ] ] ] ] ]

underDevView : Snippet
underDevView =
    (.) UnderDevClass
        [ width ( vw 100 )

        , padding2 (vw 5) zero

        , descendants
              [ img
                    [ width (vw 30)

                    , display block
                    , margin2 zero auto ] ] ]

postsPageView : Snippet
postsPageView =
    (.) PostsPageClass
        [ descendants
              [ pageTitleView
              , underDevView ] ]

projectsPageView : Snippet
projectsPageView =
    (.) ProjectsPageClass
        [ descendants
              [ pageTitleView
              , underDevView ] ]

aboutPageView : Snippet
aboutPageView =
    (.) AboutPageClass
        [ descendants
              [ pageTitleView
              , underDevView ] ]

css : Stylesheet
css =
    ( stylesheet << namespace "ailrunBlog" )
    [ everything
          [ margin zero
          , padding zero

          , property "-webkit-margin-before" "0"
          , property "-webkit-margin-after" "0"]

    , body
          [ width ( pct 100 )

          , margin2 zero auto

          , overflowY scroll

          , fontSize fontDefaultSize ]

    , a
          [ textDecoration none
          , color ( rgba 0 0 0 0.84 ) ]

    , headerView
    , mainPageView
    , postsPageView
    , projectsPageView
    , aboutPageView ]
