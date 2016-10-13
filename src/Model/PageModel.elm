module Model.PageModel exposing
    ( Page( .. ), PageType( .. )
    , pageToPageType, pageTypeToPage
    , pageTypeToString, stringToPageType )

import Model.PageModel.MainPageModel exposing ( .. )
import Model.PageModel.PostsPageModel exposing ( .. )


type Page
    = Main { banners : List MainPageBanner }
    | Posts { sections : Maybe ( List PostsPageSection ) }
    | Projects
    | About
    | NotFound

type PageType
    = MainT
    | PostsT
    | ProjectsT
    | AboutT
    | NotFoundT

pageToPageType : Page -> PageType
pageToPageType p =
    case p of
        Main _ -> MainT
        Posts _ -> PostsT
        Projects -> ProjectsT
        About -> AboutT
        NotFound -> NotFoundT

pageTypeToPage : PageType -> Page
pageTypeToPage pt =
    case pt of
        MainT -> Main { banners = [] }
        PostsT -> Posts { sections = Nothing }
        ProjectsT -> Projects
        AboutT -> About
        NotFoundT -> NotFound

pageTypeToString : PageType -> String
pageTypeToString pt =
    case pt of
        MainT -> "Main"
        PostsT -> "Posts"
        ProjectsT -> "Projects"
        AboutT -> "About"
        NotFoundT -> ""

stringToPageType : String -> PageType
stringToPageType s =
    case s of
        "Main" -> MainT
        "Posts" -> PostsT
        "ProjectsT" -> ProjectsT
        "AboutT" -> AboutT
        _ -> NotFoundT
