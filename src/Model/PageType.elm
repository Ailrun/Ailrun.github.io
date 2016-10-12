module Model.PageType exposing ( PageType( .. ) )

import Model.PageType.MainPageBanner exposing ( .. )


type PageType
    = Main { banners : List MainPageBanner }
    | Posts
    | Projects
    | About
