module View.PageView.MainPageView exposing ( mainPageView )

import Html exposing ( .. )
import Html.Attributes exposing ( href, src )

import Styles exposing ( id, class, classList )
import Styles.Default exposing ( .. )

import Model exposing ( .. )
import Model.PageType exposing ( .. )
import Model.PageType.MainPageBanner exposing ( .. )
import Controller exposing ( .. )

mainPageView : Model -> Html Msg
mainPageView model =
    section [ class [ MainPageClass ] ]
        ( mainPageBannerListMaker model )

mainPageBannerListMaker : Model -> List ( Html Msg )
mainPageBannerListMaker model =
    let
        orientation : Int -> DefaultClasses
        orientation n =
            if ( n%2 == 0 )
            then RightClass
            else LeftClass
        mainPageBannerMaker : ( Int, MainPageBanner ) -> Html Msg
        mainPageBannerMaker ( n, banner ) =
            article [ class [ orientation n ] ]
                [ img [ src banner.background ]
                      []
                , header []
                    [ div []
                          [ h3 []
                                [ text banner.title ]
                          , p []
                              [ text banner.description ] ] ]
                , a [ href banner.link ]
                    [ text <| banner.linkTitle ++ " >" ] ]
    in
        case model.pageType of
            Main { banners } ->
                List.indexedMap
                    ( \n b ->
                          mainPageBannerMaker ( n, b ) )
                    banners
            _ ->
                []
