module Styles.Font exposing
    ( fontDancing
    , fontDefaultSize
    , fontLargeSize
    , fontHugeSize
    , fontGiantSize )

import Css exposing ( .. )
import Css.Elements exposing ( .. )
import Css.Namespace exposing ( .. )


fontDancing : Mixin
fontDancing = fontFamilies [ "Dancing Script", .value cursive ]

fontDefaultSize : Vw
fontDefaultSize = vw 1.0

fontLargeSize : Vw
fontLargeSize = vw 1.5

fontHugeSize : Vw
fontHugeSize = vw 2.0

fontGiantSize : Vw
fontGiantSize = vw 2.5
