module Data.Default
  ( class Default
  , def

  , class DefaultRecord
  , defRecord
  ) where

import Data.List (List)
import Data.Maybe (Maybe)
import Data.Monoid (mempty)
import Data.Semigroup (class Semigroup)
import Data.Symbol (class IsSymbol, SProxy(..), reflectSymbol)
import Data.Unit (Unit)
import Prim.Row as R
import Prim.RowList as RL
import Record.Unsafe as RUnsafe
import Type.Data.RowList (RLProxy(..))

class Default a where
  def :: a

instance intDefault :: Default Int where
  def = 0
instance numberDefault :: Default Number where
  def = 0.0
instance stringDefault :: Default String where
  def = mempty
instance arrayDefault :: Default (Array a) where
  def = mempty
instance unitDefault :: Default Unit where
  def = mempty
instance maybeDefault :: (Semigroup a) => Default (Maybe a) where
  def = mempty
instance listDefault :: Default (List a) where
  def = mempty
instance sproxyDefault :: Default (SProxy a) where
  def = SProxy
instance rlproxyDefault :: Default (RLProxy a) where
  def = RLProxy
instance recordDefault :: (RL.RowToList row list, DefaultRecord list row) => Default (Record row) where
  def = defRecord (def :: RLProxy list)


class DefaultRecord (list :: RL.RowList) (row :: #Type) | list -> row where
  defRecord :: RLProxy list -> Record row

instance nilDefaultRecord :: DefaultRecord RL.Nil () where
  defRecord _ = {}

instance consDefaultRecord
         :: ( IsSymbol key
            , Default focus
            , R.Cons key focus rowTail row
            , DefaultRecord listTail rowTail
            )
         => DefaultRecord (RL.Cons key focus listTail) row where
  defRecord _ = RUnsafe.unsafeSet key (def :: focus) tail
    where
      key = reflectSymbol (def :: SProxy key)
      tail = defRecord (def :: RLProxy listTail)
