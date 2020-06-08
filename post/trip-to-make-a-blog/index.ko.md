---
title: 블로그 제작기
date: 2020-02-18T02:30:16-05:00
---

이 블로그를 [React][React], [TypeScript][TypeScript]와 [Gatsby][Gatsby], 그리고 [GitHub Pages][GitHub Pages] 로 제작하기까지의 여정을 이야기해보려고 한다.
어떤 프로그래밍 언어들과 어떤 서비스들을 거쳐왔는지, 각각을 어떤 장점이 있어서 선택했고, 어떤 단점으로 인해 포기하게 되었는지에 대해서 시간순으로 살펴볼 것이다.

## 최초의 블로그 - Tistory {#tistory}

필자가 가장 처음으로 블로그를 하려고 마음먹은 것은 2014 년 말이다.
필자가 대학에서 컴퓨터 공학도 전공하기로 마음먹었을 때 즈음인데, 이때의 필자는 '컴퓨터 공학을 한다면 블로그 하나쯤은 운영해봐야하지 않나...'하는 생각이 있었다.
아무래도 그 시절에는 필자가 개발과 관련된 많은 정보를 블로그로부터 얻었기 때문이었던 것 같다.

그러나 필자는 개발을 [C][C], [C++][C++], [Haskell][Haskell], [Python][Python] 등의 언어로 시작했고, [HTML][HTML], [CSS][CSS], [JS][JS]같이 웹 개발에 필수적인 언어들과는 친숙하지 않았을 뿐만 아니라 웹 개발에 필요한 기초지식([HTTP 상태 코드][HTTP Status Code], [Cache][Cache], [Cookie][Cookie], ...)도 충분하지 못한 상태였다.
그런 필자에게 블로그를 직접 만든다는 것은 꿈만 같은 이야기였고, 블로그를 만들기 좋은 서비스를 찾아내고 꾸미는 것만 해도 벅찼다.

좋은 서비스를 찾아 헤매던 필자는 네이버 블로그, 이글루스 등 여러 서비스에 한 번씩 발을 담궈보았으나 결국 맘에 들 정도로 꾸밀 수 있었던 건 (마침 어플리케이션이 생겨서 초대장을 무료로 받을 수 있었던) [티스토리][tistory]뿐이었고, 2015 년에 이르러서야 티스토리에 개발 겸 스타크래프트 맵 제작 겸 시쓰기 블로그를 열게 된다.

## 한동안의 공백기, 그리고 &#x2026; {#long-break}

티스토리 블로그의 주제를 보고 의아해한 독자들이 있을 것이다.

> 주제가 너무 산발적이지 않은가?

<span></span>

적절한 비판이다. 실제로도 모든 주제에 대해 글을 꾸준히 쓰지도 못했고, 어느 주제에도 제대로 집중하지 못했다. 더욱이 새로 시작한 전공과 일, 그 외의 여러 일들로 인해 한숨 돌릴 새 없이 바쁘게 시간을 보내면서, 필자의 주의를 강하게 끌지 못했던 블로그를 서서히 접게 된다.

## 새로운 시도 - AngularJS {#angular-js}

다시 여유가 생기기 시작한 것은 2016 년 초에 이르러서였다. 이 즈음의 필자는 웹 개발 일이나 외주 등을 하면서 대충이나마 웹 개발의 윤곽을 잡아가고 있었다. 다시금 '블로그를 해볼까'라는 생각이 들었을 때, '이번에는 내가 직접 만들어서 해 볼 수도 있겠다'라는 자신도 함께 들 정도였다. 다시 티스토리로 돌아가고 싶은 생각은 들지 않았다. 웹 개발을 잘 모르던 예전의 경험으로는 HTML/CSS를 수정하는 것이 간단한 일이 아니었고, 또 웹 개발을 대충이나마 알고있던 그 때는 글에 마음껏 기능을 추가하거나 변경하는 게 직접 만드는 것보다 어렵다고 생각했기 때문이다.

블로그를 만드는데 있어 가장 큰 문제는 다음의 세 가지였다.

- 어떤 JS 프레임워크(Framework)를 쓸까?
- 어떤 서버(Server)를 사용할까?
- 어떤 CSS 프레임워크를 쓸까?

처음의 두 가지는 블로그를 만들기로 결심했을 때 이미 정해놓은 후보가 있었다. 이때는 전공 공부와 개발 일을 하면서 [AngularJS][AngularJS]와 [Git][Git]/[GitHub][GitHub]에 대해서 어찌저찌 알고 있었기 때문에, 자연스럽게 AngularJS와 [GitHub Pages][GitHub Pages]를 사용해서 블로그를 만들어보자는 생각을 했던 것이다. GitHub Pages를 선택한 건 무엇보다도 비용적인 측면이 컸다. 물론 대부분의 유료 서버는 단순히 정적 호스팅(Hosting)만 해주는 것이 아니지만, 당시의 필자로서는 로그인 기능이나 CMS(Content Management System, 콘텐츠 관리 도구)를 위해 데이터베이스(Database)를 구축하거나 서버 연산을 할 생각이 없었기 때문에 그런 것들은 선택에 그다지 영향을 미치는 사항이 아니었다.

CSS 프레임워크로는 가장 처음에는 [Bootstrap][Bootstrap]을 선택했다. Bootstrap이 가장 유명한 것도 있었으나, 그 이전에 필자가 다른 CSS 프레임워크를 사용해본 적이 없었기 때문이었고, 또 어디서 CSS 프레임워크들에 대한 정보를 찾을 수 있는지 잘 몰랐기 때문이었다. 그마저도 그때의 필자가 아직 웹 개발보다 디자인이 더 익숙했었던 연유인지 좀처럼 마음에 드는 결과물을 얻어내지 못했다. 결국에는 필자가 직접 디자인 프로그램 내에서 디자인을 한 뒤 CSS로 옮기기로 마음먹게 되었다. 결과적으로 만들어진 디자인은 현재 블로그에도 사용되고 있는 디자인의 초안이 된다.

## 더 안전한 개발을 찾아서 - Elm {#elm}

AngularJS로 개발하면서 필자가 티스토리를 포기한 이유인 자유도는 어느정도 확보할 수 있었지만, 다른 문제가 발생하기 시작했다. 앞서 말했듯 필자는 개발을 C, C++, **Haskell** 등으로 시작했기 때문에 정적이고 강한 자료형을 가진 언어에 익숙했다. 그래서 필자는 JS의 동적 자료형 및 HTML/CSS의 컴파일(Compile)없는 실행에 익숙하지 않았고, 이 때문에 작은 실수가 자꾸만 큰 실수로 변해갔다. 결과적으로는 생산성이 떨어져만 갔고, 앞서 말한 언어들이 제공하는 컴파일 오류를 그리워하게 되었다.

그렇게 향수병에 걸려있을 때에 Haskell 커뮤니티를 통해서 [Elm][Elm]과 [PureScript][PureScript]라는 두 언어의 소식을 듣게 되었다. 그 시절의 두 언어를 비교해보면 다음과 같다.

- PureScript
    - 좀 더 Haskell에 가까운 언어
    - 순수한 언어에 가까움(프레임워크 등을 기본적으로 제공하지 않음)
    - 곧 사용하지 않는 것이 권장될 예정이었던 패키지 매니저(Package manager)인 Bower 사용
- Elm
    - 좀 더 ML에 가까운 언어
    - 기본적으로 MVC 기반 프레임워크를 제공함
    - 자체 패키지 매니저 사용

JavaScript에 그다지 익숙하지 못했던 필자의 눈에는 DOM 조작 프레임워크를 내장하지 않은 PureScript는 무언가가 부족해보였고, MVC 기반 프레임워크를 내장하고 있는 Elm이 정말 매력적으로 보였다. 뿐만이 아니라 PureScript가 곧 버려질 예정이었던 Bower를 사용하고 있는 것이 부담스러웠고, 그보다는 차라리 Elm의 (지금은 [Elm compiler][Elm compiler]와 합쳐져서 사라진) [elm-package][elm-package]와 같이 그 언어에 알맞은 새로운 패키지 매니저를 설치하는 것이 나아보였다.

결국 Elm을 사용하기로 했고, AngularJS로 짜여있는 이전의 블로그를 옮기기 시작했다. 코드 이전을 하면서 딱히 문제가 발생하지는 않았고, 오히려 Elm이 제공하는 여러 안전장치의 도움을 받기만 했다. 이런 안전장치들은 필자를 완전히 사로잡아버렸다. 적어도 한동안은 말이다.

## 막간 - The Rise of TypeScript {#typescript}

필자는 2015년에 [TypeScript][TypeScript]를 처음 접했다. 그 때의 첫 인상은

> JavaScript를 어떻게든 좋게 만드려고 아주 애를 쓰는구나&#x2026; 근데 더 안 좋은 것 같은데?

였다. 단순한 양방향 자료형 검사를 시행했을 때 벌어지는 단점을 대부분 가지고 있었고, 사용하면서 '안전하다'라는 느낌은 전혀 들지 않았다. 편집기 지원도 미비했으며, AngularJS 등과 사용하는게 편했냐하면 그것도 아니었다. 그래서 그때의 필자는 TypeScript가 한때의 실험으로 끝날 줄 알았다. 그러나 필자는 중요한 걸 간과했으니, 바로 TypeScript가 Microsoft라는 초대형 회사의 언어였다는 거다.

2016년 말에 들어 업무 중에 [Angular][Angular](AngularJS와는 다르다! AngularJS와는!)를 쓸 일이 생겨 다시 TypeScript를 잡게 되었다. 이때는 이미 TypeScript 2.x가 나왔을 때였고, 2.x 이후 버전(Version)의 TypeScript는 이전과는 완전히 다른 언어였다. 옛날보다 훨씬 다양한 자료형을 지원했으며, 더 자세한 자료형분석을 통해 더 세세한 컴파일 오류를 내놓았다. Angular에서의 지원과 [DefinitelyTyped][DefinitelyTyped]와 [npm][npm]을 사용하기 시작하면서 언어 자체의 생태계도 훨씬 넓어져가고 있었다. 이전의 인상은

> JavaScript보다는 낫네!

로 바뀌게 되었고, 이후로도 [React][React] 등의 JS 프레임워크를 TypeScript와 함께 사용하면서, '쓸만은 하네'라는 인식은 더 강화되었다. 결국 TypeScript는 필자의 웹 개발 인생의 중요한 한 축을 맡기 시작했다.

## 컴포넌트(Component) 단위 개발 - PureScript {#purescript}

React, Angular 등이 유명해지면서 웹 개발 세상은 완전히 컴포넌트 기반이 되었다. 이미 업무에서 컴포넌트 기반 프레임워크들을 사용하던 필자는 블로그의 글 작성 기능을 만드는 도중 컴포넌트 기반으로 블로그를 짜고싶은 욕망이 일기 시작했다.

Elm의 한가지 문제가 필자를 욕망이 이끄는 대로 가는데에 기름을 부었다. 바로 중심 개발 인력들과 커뮤니티의 태도였다. 필자는 이때 이미 Haskell 커뮤니티와 TypeScript 커뮤니티 등등을 통해 오픈소스(Open source) 커뮤니티를 몇 년 정도 접했었는데, 이런 커뮤니티에 기여하는 동안은 친근하고 배려넘치는 사람들을 심심치 않게 만날 수 있었다. 그러나 Elm의 커뮤니티는 앞서 말한 커뮤니티와 성격이 완전히 달랐다. 공격적이고 독선적이며 새로운 사용자들을 위한 배려가 부족했다. 커뮤니티보다 더 심각했던 것은 중심 개발 인력, 그리고 그 중 누구보다도 Elm의 최고 개발자인 Evan Czaplicki의 태도였다. 적어도 필자에게는 그와 중심 인력들의 자세가 불편했다. (2018년에 Elm에서 사용자 정의 연산자가 없어질 때에 벌어졌던 일들만 봐도 중심 개발 인력들의 성격을 이해할 수 있으리라 믿는다.)

Elm을 버리고 나면 어떤 언어를 선택할지 생각하다가 다시 떠오른 것이 PureScript였다. 2019년의 PureScript는 [Halogen][Halogen] 이나 [purescript-react][purescript-react] 등 그럭저럭 많은 수의 Purescript용 라이브러리(Library)를 가지고 있었고, 언어 자체용 패키지 매니저([psc-package][psc-package])도 만들어져 있었다. ([약간의 고생^^](https://en.wikipedia.org/wiki/Wikipedia:Articles_for_deletion/PureScript_(programming_language)) 끝에 [위키피디아에 다시 등재](https://en.wikipedia.org/wiki/PureScript)되는데 성공하기도 했다.) 또한 필자 본인도 여러 웹 개발 프레임워크와 라이브러리를 사용하고 거기에 기여하면서 웹 개발에 좀 더 친숙해졌고, 언어 차원에서 어떤 프레임워크를 지원하지 않아도 그 언어를 사용할 수 있는 수준이 되었다.

결국 PureScript와 Halogen을 사용해 Elm 블로그를 다시 쓰기로 했다. 이 둘을 사용하니 컴포넌트 단위 개발이 쉬웠을 뿐만 아니라 타입클래스(Typeclass) 등의 언어 기능도 풍부해 코드 작성이 훨씬 편리해졌다.

## 정적 호스팅을 위해서&#x2026; - Gatsby {#gatsby}

PureScript 와 Halogen 의 조합은 코드 작성 중에는 만족스러웠지만, 블로그의 상태 자체가 만족스럽지는 않았다. 무엇보다 문제였던 것은 글 작성 기능과 성능, 그 중에서도 특히 글 작성 기능이 문제였다. PureScript로 Markdown이나 여타 다른 형식을 실행시간에 읽어와서 화면을 그리는 것은 애초에 선택지가 아니었다. 그렇다고 전체 블로그가 단일 페이지 웹앱(Single page webapp)으로 되어있는데, 글 부분만 따로 Markdown을 HTML로 컴파일해서 페이지를 분리하는 것도 어색한 UX를 줄 것 같았다. 만에 하나 그렇게 한다고 하더라도 컴파일 타임에 파일시스템(File system)에 접근하는 것이 힘드니 글을 쓸 때마다 글 목록을 일일히 갱신해주어야 할 것이고, 이런 수작업을 피하기 위해서 컴파일 과정을 고치자니 배보다 배꼽이 커지는 느낌이 들었다.

이렇게 고민하고 있는 와중에

> 그냥 아예 다 정적으로 호스팅해버리는게 나으려나?

하는 생각이 들었고, 안 그래도 GitHub Pages가 단일 페이지 웹앱을 지원하지않는 것 때문에 블로그 주소를 해쉬(Hash)로 사용하고 있던 문제도 있어 이 생각에 혹하기 시작했다.

안타깝게도 PureScript의 생태계 내부에는 정적 호스팅 블로그를 만들어줄만한 도구가 없었고, 고민하던 끝에 Halogen과 비슷한 구조라는 생각이 드는 React 생태계에서 도구를 찾아보았다. 그리고 그 결과, [Gatsby][Gatsby]라는 도구를 찾아내 사용하기로 결정했다. 이는 필자가 React에 익숙해서였던 것도 있지만, Gatsby자체가 많은 플러그인(Plugin)과 도구를 지원하면서 상당히 큰 커뮤니티를 가지고 있었기 때문이다.

다만 Gatsby를 쓰려면 한가지 문제가 있었다. 어쨌던 JavaScript를 작성할 필요가 있었던 것이다. Gatsby의 설정 파일들을 쓰기 위해서는 JavaScript를 사용해야했고, 플러그인을 만드려고 해도, React 컴포넌트를 만드려고 해도, 결국은 JavaScript를 작성해야만 했다. 이 문제는 [ts-node][ts-node]를 통해서 설정 파일을 포함한 모든 곳에 TypeScript만 사용하는 것으로 어떻게 해결하는데 성공했다.

JavaScript를 TypeScript로 대체하는데 성공하고서 남은 일들은 비교적 간단했다. 필자가 React에 익숙했던만큼 단순한 Halogen 렌더링(Rendering)용 React 컴포넌트를 만드는데도 별 문제가 없었고, [Webpack][Webpack]의 플러그인들을 사용해서 블로그용 Gatsby 플러그인들을 만드는 것도 어려울 것이 없었다. [Remark][Remark]를 사용해서 글 작성용 템플릿(Template) 컴포넌트를 만들었고, 글 작성 기능을 추가하는 것도 간단히 끝냈다.

## 더 나은 블로그를 향하여! - React {#react}

그러나 이 블로그에도 여전히 문제는 남아있었다. 다음의 두 개가 필자의 신경에 가장 거슬렸다.

- FOUC(Flash Of Unstyled Contents, 스타일되지 않은 내용의 깜빡임)
- 하나의 컴포넌트 작성을 위해 여러 언어가 사용됨

FOUC는 Halogen과 React의 통신이 불가능했기때문에 발생했다. React 컴포넌트 안에서 Halogen 컴포넌트를 렌더링하는 것은 가능했지만, 언제 Halogen 컴포넌트의 렌더링이 끝나는지, 언제 다시 렌더링을 해야하는지, &#x2026; 등 여러 정보를 React가 알 수 없으니, Halogen으로 작성된 CSS 렌더링용 컴포넌트가 언제 CSS를 다 출력하고, 언제 내용에 해당하는 컴포넌트를 출력하기 시작해야하는지 React가 조정할 수가 없었다. 필자가 만든 Halogen용 React 컴포넌트는 Halogen 컴포넌트마다 Halogen 렌더링을 새로 했기 때문에, Halogen쪽에서도 이 문제를 해결할 정보를 가지고 있지 않았다. Halogen용 React 컴포넌트의 구조를 바꾸면 될 일이었지만, 어느 한 쪽이라도 충분한 정보를 받을 수 있도록 구조를 바꾸는 것이 그다지 간단하지 않은 일이었다.

다른 문제는 좀 더 미묘한 취향의 문제였다. 안 그래도 Gatsby의 GraphQL로 얻어낸 정보를 TypeScript에서 사용할 때에도 일일히 자료형을 입혀주기 힘든데, TypeScript에서 PureScript로 넘어갈 때마다, 그리고 다시 PureScript에서 TypeScript로 넘어올 때마다 자료형 정보를 잃어버리니 자료형과 관련된 컴파일 경고가 거의 무의미했다. 말하자면 이 문제가 애초에 필자가 AngularJS를 떠났던 이유인데, 수많은 기술들을 함께 사용하다보니 다시 이 문제에 직면하게 된 것이다.

이 두 문제를 한 번에 해결하는 법은 간단했다. 그냥 TypeScript와 React를 사용하면 되는 것이다. 물론 PureScript와 비교했을 때 맘에 들지 않는 선택이기는 했다. 그러나 어쩌랴! PureScript의 생태계가 충분히 크지 않은걸. 결국 블로그에 있는 PureScript 컴포넌트들을 하나씩 TypeScript로 바꿔썼고, 바꿔쓰는 김에 CSS와 관련된 코드들도 다 [emotion][emotion]을 사용해 [CSS-in-JS][CSS-in-JS] 방식으로 컴포넌트 안으로 옮겼다. 그리고 마침내&#x2026;

## 제작기, 그 너머로! {#epilogue}

이 글을 쓰고있는 지금은 글 서두에 말했던 것처럼 React, TypeScript를 Gatsby 안에서 사용해서, GitHub Pages의 힘을 빌려 블로그를 호스팅하고 있다. 그렇지만 이 여정은 아직 끝이 아니다. 만일 앞으로 PureScript에 좋은 정적 호스팅 도구가 나온다면 다시 PureScript로 돌아갈 의향이 있다. 다른 훌륭한 도구가 나와서 그 도구가 Gatsby보다 편한 정적 호스팅을 제공한다면 언제든지 옮겨갈 것이다. GitHub Pages 또한 보다 편한 호스팅 환경을 제공하는 서비스가 있으면 포기할 수 있다. 이 글을 읽는 독자분들께서도 더 나은 도구가 있다면 댓글로 알려주시면 감사하겠다.

그러면 다음 변화를 기다리며, 여기서 제작기를 마치도록 하겠다.

[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[Gatsby]: https://www.gatsbyjs.org
[GitHub Pages]: https://pages.github.com
[C]: https://en.wikipedia.org/wiki/C_(programming_language)
[C++]: https://en.wikipedia.org/wiki/C%2B%2B
[Haskell]: https://en.wikipedia.org/wiki/Haskell_(programming_language)
[Python]: https://en.wikipedia.org/wiki/Python_(programming_language)
[HTML]: https://en.wikipedia.org/wiki/HTML
[CSS]: https://en.wikipedia.org/wiki/Cascading_Style_Sheets
[JS]: https://en.wikipedia.org/wiki/JavaScript
[HTTP Status Code]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Status_codes
[Cache]: https://en.wikipedia.org/wiki/Web_cache
[Cookie]: https://en.wikipedia.org/wiki/HTTP_cookie
[tistory]: https://www.tistory.com
[AngularJS]: https://angularjs.org/
[Git]: https://git-scm.com
[GitHub]: https://github.com
[Bootstrap]: https://getbootstrap.com/
[Elm]: https://elm-lang.org/
[PureScript]: http://www.purescript.org/
[Elm compiler]: https://github.com/elm/compiler/
[elm-package]: https://github.com/elm-lang/elm-package
[Angular]: https://angular.io/
[DefinitelyTyped]: https://github.com/DefinitelyTyped/DefinitelyTyped
[npm]: https://www.npmjs.com/
[Halogen]: https://github.com/purescript-halogen/purescript-halogen
[purescript-react]: https://github.com/purescript-contrib/purescript-react
[psc-package]: https://github.com/purescript/psc-package
[ts-node]: https://github.com/TypeStrong/ts-node
[Webpack]: https://webpack.js.org/
[Remark]: https://github.com/remarkjs/remark
[emotion]: https://emotion.sh/docs/introduction
[CSS-in-JS]: https://en.wikipedia.org/wiki/CSS-in-JS
