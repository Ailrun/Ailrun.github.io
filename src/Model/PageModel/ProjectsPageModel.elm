module Model.PageModel.ProjectsPageModel exposing
    ( ProjectsPage
    , ProjectsSection
    , ProjectsProject
    , projectsPageDefault
    , projectsPageBannerDefault
    , projectsPageSectionsDefault
    , projectsPageHaskellDefault
    , projectsPageEmacsDefault
    , projectsPageStudyDefault
    , projectsPageOldStartUpDefault )


type alias ProjectsPage
    = { banner : String
      , sections : List ProjectsSection}

type alias ProjectsSection
    = { title : String
      , projects : List ProjectsProject }

type alias ProjectsProject
    = { title : String
      , link : String
      , images : List String }


projectsPageDefault : ProjectsPage
projectsPageDefault =
    { banner = projectsPageBannerDefault
    , sections = projectsPageSectionsDefault }

projectsPageBannerDefault : String
projectsPageBannerDefault = "image/project.png"

projectsPageSectionsDefault : List ProjectsSection
projectsPageSectionsDefault =
    [ projectsPageHaskellDefault
    , projectsPageEmacsDefault
    , projectsPageStudyDefault
    , projectsPageOldStartUpDefault ]

projectsPageHaskellDefault : ProjectsSection
projectsPageHaskellDefault =
    { title = "Haskell"
    , projects =
          [ { title = "CUTE Lang"
            , link = "https://github.com/CUTE-Lang"
            , images =
                  [ "https://avatars0.githubusercontent.com/u/17797042?v=3&s=200" ] }
          , { title = "Htaut"
            , link = "https://github.com/Ailrun/Htaut"
            , images =
                  [ "https://travis-ci.org/Ailrun/Htaut.svg"
                  , "https://img.shields.io/hackage/v/htaut.svg?maxAge=2592000" ] }
          , { title = "LambdaDB"
            , link = "https://github.com/Ailrun/LambdaDB"
            , images =
                  [ "https://img.shields.io/badge/Haskell-lts--5.18-lightgrey.svg?style=plastic"
                  , "https://img.shields.io/badge/stack->=1.1-blue.svg?style=plastic"
                  , "https://img.shields.io/badge/version-0.0.0.6-green.svg?style=plastic"
                  , "https://img.shields.io/badge/status-alpha-orange.svg?style=plastic"
                  , "https://img.shields.io/badge/build-passing-brightgreen.svg?style=plastic" ] } ] }

projectsPageEmacsDefault : ProjectsSection
projectsPageEmacsDefault =
    { title = "Emacs"
    , projects =
          [ { title = "yet-another-emacs-settings"
            , link = "https://github.com/Ailrun/yet-another-emacs-settings"
            , images =
                  [ "https://img.shields.io/badge/Version-0.00.10a-lightgrey.svg?style=plastic"
                  , "https://img.shields.io/badge/Status-Pre--Alpha-yellow.svg?style=plastic" ] }
          , { title = "coq-commenter"
            , link = "https://github.com/Ailrun/coq-commenter"
            , images =
                  [ "https://melpa.org/packages/coq-commenter-badge.svg" ] }] }

projectsPageStudyDefault : ProjectsSection
projectsPageStudyDefault =
    { title = "Study"
    , projects =
          [ { title = "Programming_in_Haskell"
            , link = "https://github.com/Ailrun/Programming_in_Haskell"
            , images =
                  [] }
          , { title = "StackCalc"
            , link = "https://github.com/Ailrun/StackCalc"
            , images =
                  [] }
          , { title = "BigInteger"
            , link = "https://github.com/Ailrun/BigInteger"
            , images =
                  [] }
          , { title = "Elevator2way7floor"
            , link = "https://github.com/Ailrun/Elevator2way7floor"
            , images =
                  [] }
          , { title = "LD_8bit_Microprocessor"
            , link = "https://github.com/Ailrun/LD_8bit_Microprocessor"
            , images =
                  [] } ] }

projectsPageOldStartUpDefault : ProjectsSection
projectsPageOldStartUpDefault =
    { title = "StartUps"
    , projects =
          [ { title = "LINKBOX"
            , link = "https://github.com/Ailrun/LINKBOX"
            , images =
                  [] }
          , { title = "LINKSERVER"
            , link = "https://github.com/Ailrun/LINKSERVER"
            , images =
                  [] } ] }
