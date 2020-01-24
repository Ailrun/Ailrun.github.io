module Component.Link
  ( Slot
  , Query(..)
  , Input(..)
  , Output(..)
  , component
  ) where

import Prelude

import Data.Bifunctor (bimap)
import Data.Maybe (Maybe(..))
import Effect.Class (class MonadEffect, liftEffect)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HHE
import Halogen.HTML.Properties as HHP
import Util.Navigate (navigate)

type Slot a = H.Slot Query (Output a)

data Query a

type Input = String

type Output o = o

type State = Input

data Action a
  = InnerAction a
  | NavigateTo String

component :: forall a cs q m. (MonadEffect m) => Array (H.ComponentHTML a cs m) -> H.Component HH.HTML q Input (Output a) m
component innerHTMLs
  = H.mkComponent
    { initialState
    , render: render innerHTMLs
    , eval: H.mkEval $ H.defaultEval
        { handleAction = handleAction
        }
    }

initialState :: Input -> State
initialState = identity

render :: forall a cs m. Array (H.ComponentHTML a cs m) -> State -> H.ComponentHTML (Action a) cs m
render innerHTMLs state
  = HH.a
    [ HHP.href "javascript:void(0);"
    , HHE.onClick $ \_ -> Just $ NavigateTo state
    ]
    (map (bimap (map InnerAction) InnerAction) innerHTMLs)

handleAction :: forall a cs m. (MonadEffect m) => Action a -> H.HalogenM State (Action a) cs (Output a) m Unit
handleAction = case _ of
  InnerAction a -> H.raise a
  NavigateTo link -> liftEffect (navigate link)
