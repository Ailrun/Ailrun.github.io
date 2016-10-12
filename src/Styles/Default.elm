module Styles.Default exposing ( css, DefaultClasses( .. ) )

import Css exposing ( .. )
import Css.Elements exposing ( .. )
import Css.Namespace exposing ( .. )

import Styles.Font exposing ( .. )

type DefaultClasses
    = HeaderClass
    | MainPageClass
    | RightClass
    | LeftClass

headerView : Snippet
headerView =
    (.) HeaderClass
          [ width ( pct 100 )
          , height ( vw 2.5 )

          , margin2 zero auto
          , position fixed
          , top zero
          , left zero
          , right zero

          , backgroundColor ( rgba 0 0 0 0.72 )

          , descendants
              [ h1
                    [ display inline

                    , descendants
                          [ a
                                [ display inlineBlock
                                , margin2 auto zero
                                , marginLeft ( em 0.5 )

                                , verticalAlign middle
                                , fontDancing
                                , fontSize fontLargeSize
                                , color ( rgba 255 255 255 0.84 ) ] ] ]
              , ul
                    [ height inherit

                    , display inline
                    , margin2 auto zero
                    , float right ]
              , li
                    [ display inlineBlock

                    , verticalAlign middle

                    , descendants
                          [ a   
                                [ marginLeft ( vw 1 )
                                , marginRight ( vw 1 )

                                , verticalAlign middle

                                , fontDancing
                                , fontSize fontLargeSize
                                , color ( rgba 255 255 255 0.84 ) ] ] ] ] ]


bannerHeight : Float
bannerHeight = 26


mainPageView : Snippet
mainPageView =
    (.) MainPageClass
        [ color ( rgba 255 255 255 0.84 )
        , property "line-height" "1.3"
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

css : Stylesheet
css =
    ( stylesheet << namespace "ailrunBlog" )
    [ everything
          [ margin zero
          , padding zero ]

    , body
          [ width ( pct 100 )

          , margin2 zero auto

          , overflowY scroll

          , fontSize fontDefaultSize ]

    , a
          [ textDecoration none
          , color ( rgba 0 0 0 0.84 ) ]

    , headerView
    , mainPageView ]
