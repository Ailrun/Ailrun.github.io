module Model.PageModel.ProjectsPageModel exposing
    ( ProjectsPage
    , projectsPageDefault
    , projectsPageBannerDefault )


type alias ProjectsPage
    = { banner : String }


projectsPageDefault : ProjectsPage
projectsPageDefault =
    { banner = projectsPageBannerDefault }

projectsPageBannerDefault : String
projectsPageBannerDefault = "image/project.png"
