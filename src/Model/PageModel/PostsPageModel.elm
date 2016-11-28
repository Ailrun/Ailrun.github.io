module Model.PageModel.PostsPageModel exposing
    ( PostsPage
    , PostsPagePost
    , PostsPageSubsection
    , PostsPageSection
    , postsPageDefault
    , postsPageBannerDefault
    , postsPageSectionsDefault )


type alias PostsPage
    = { banner : String
      , sections : List PostsPageSection }

type alias PostsPageSection =
    { name : String
    , subsections : List PostsPageSubsection }

type alias PostsPageSubsection =
    { name : String
    , posts : List PostsPagePost }

type alias PostsPagePost =
    { title : String }


postsPageDefault : PostsPage
postsPageDefault =
    { banner = postsPageBannerDefault
    , sections = postsPageSectionsDefault }

postsPageBannerDefault : String
postsPageBannerDefault = "image/post.png"

postsPageSectionsDefault : List PostsPageSection
postsPageSectionsDefault = []
