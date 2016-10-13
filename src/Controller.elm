module Controller exposing
    ( Msg( .. ), update, urlUpdate, subscriptions )

import Json.Decode as Json
import Task

import Http

import Model exposing ( .. )
import Model.PageModel exposing ( .. )


type Msg
    = LoadPosts
    | FetchPostsSuccess String
    | FetchPostsFail Http.Error
      
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model = ( model, Cmd.none )

urlUpdate : PageType -> Model -> ( Model, Cmd Msg )
urlUpdate pt model =
    case pt of
        PostsT -> ( modelMaker pt, getPosts )
        _ -> ( modelMaker pt, Cmd.none )

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none


getPosts : Cmd Msg
getPosts = Cmd.none
