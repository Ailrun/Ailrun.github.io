module Model.PageModel.AboutPageModel exposing
    ( AboutPage
    , AboutProfile
    , AboutSubject
    , aboutPageDefault
    , aboutPageBannerDefault
    , aboutPageProfileDefault
    , aboutPageNameDefault
    , aboutPagePictureDefault
    , aboutPageDescriptionDefault
    , aboutPageSubjectsDefault )


type alias AboutPage
    = { banner : String
      , profile : AboutProfile
      , subjects : List AboutSubject }

type alias AboutProfile
    = { name : String
      , picture : String
      , description : String}

type alias AboutSubject
    = { title : String
      , entries : List String }


aboutPageDefault : AboutPage
aboutPageDefault =
    { banner = aboutPageBannerDefault
    , profile = aboutPageProfileDefault
    , subjects = aboutPageSubjectsDefault }

aboutPageBannerDefault : String
aboutPageBannerDefault = "image/about.png"

aboutPageProfileDefault : AboutProfile
aboutPageProfileDefault =
    { name = aboutPageNameDefault
    , picture = aboutPagePictureDefault
    , description = aboutPageDescriptionDefault }

aboutPageNameDefault : String
aboutPageNameDefault = "Junyoung Clare Jang"

aboutPagePictureDefault : String
aboutPagePictureDefault = "image/about-profile.png"

aboutPageDescriptionDefault : String
aboutPageDescriptionDefault = "Junyoung Clare Jang with beer"

aboutPageSubjectsDefault : List AboutSubject
aboutPageSubjectsDefault =
    [ { title = "Hobby"
      , entries =
            [ "Enjoy life with beer"
            , "Fall in love with foods"
            , "Writing poem" ] }
    , { title = "Contact"
      , entries =
            [ "Github/Ailrun" ] }
    , { title = "Educational Background"
      , entries =
            [ "Seoul Nat'l Univ, Bachelor's degree of Chemistry"
            , "Seoul Nat'l Univ, Bachelor's degree of Philosophy"
            , "Seoul Nat'l Univ, Bachelor's degree of Computer Science and Engineering"] } ]
