module Model.PageModel.PostsPageModel exposing
    ( PostsPagePost, PostsPageSubsection, PostsPageSection
    , postsPageBannerDefault )


type alias PostsPagePost =
    { title : String }

type alias PostsPageSubsection =
    { name : String
    , posts : List PostsPagePost }

type alias PostsPageSection =
    { name : String
    , subsections : List PostsPageSubsection }

postsPageBannerDefault : String
postsPageBannerDefault = "image/post.png"
