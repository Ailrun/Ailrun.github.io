module Controller exposing ( Msg( .. ), update, default, subscriptions )

import Model exposing ( .. )


type Msg
    = Login
    | Logout

default : Msg
default = Login
      
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model = ( model, Cmd.none )

subscriptions : Model -> Sub Msg
subscriptions model = Sub.none
