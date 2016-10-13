module Model.PageModel exposing ( Page( .. ) )

import Model.PageModel.MainPageModel exposing ( .. )
import Model.PageModel.PostsPageModel exposing ( .. )


type Page
    = Main { banners : List MainPageBanner }
    | Posts
    | Projects
    | About
