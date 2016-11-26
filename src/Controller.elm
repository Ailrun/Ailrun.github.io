module Controller exposing
    ( Msg( .. ), readLoc, update, subscriptions )

import String exposing ( dropLeft )
import Navigation exposing ( Location )

import Json.Decode as Json
import Task

import Http

import Model exposing ( .. )
import Model.PageModel exposing ( .. )


type Msg
    = ChangePage PageType
    | LoadPosts
    | FetchPostsSuccess String
    | FetchPostsFail Http.Error

readLoc : Location -> Msg
readLoc loc =
    let ptString =
            case ( dropLeft 1 loc.hash ) of
                "" -> "Main"
                s -> s
    in ChangePage ( stringToPageType ptString )
      
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ChangePage pt -> ( modelMaker pt, Cmd.none )
        _ -> ( model, Cmd.none )

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none
