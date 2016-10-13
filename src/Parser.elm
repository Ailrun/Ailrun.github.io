module Parser exposing
    ( parser )

import String exposing ( .. )

import Navigation exposing ( Location, makeParser )

import Model.PageModel exposing ( .. )


locParser : Location -> PageType
locParser loc = stringToPageType (dropLeft 1 loc.hash)

parser = makeParser locParser
