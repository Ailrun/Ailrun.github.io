module Model.PageModel exposing
    ( Page( .. ), PageType( .. )
    , pageToPageType, pageTypeToPage
    , pageTypeToString, stringToPageType )

import Model.PageModel.MainPageModel exposing ( .. )
import Model.PageModel.PostsPageModel exposing ( .. )
import Model.PageModel.ProjectsPageModel exposing ( .. )
import Model.PageModel.AboutPageModel exposing ( .. )


type Page
    = Main MainPage
    | Posts PostsPage
    | Projects ProjectsPage
    | About AboutPage
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
        Projects _ -> ProjectsT
        About _ -> AboutT
        NotFound -> NotFoundT

pageTypeToPage : PageType -> Page
pageTypeToPage pt =
    case pt of
        MainT -> Main mainPageDefault
        PostsT -> Posts postsPageDefault
        ProjectsT -> Projects projectsPageDefault
        AboutT -> About aboutPageDefault
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
        "Projects" -> ProjectsT
        "About" -> AboutT
        _ -> NotFoundT
