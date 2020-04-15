---
title: 프로그래머를 위한 논리학 - 1
date: 2020-03-14T02:30:16-05:00
---

# 두번째 글을 열면서 {#prologue}

이전 글에서 명제 논리를 위해 필요한 기본적인 정의들과 진리표를 이용한 논증의 건전함 증명에 대해서 알아보았다. 이 글에서는 진리표를 이용한 증명이 언제 어려워지는지(혹은 불가능해지는지)에 대해서 알아보고, 진리표와는 다른 방법이 무엇이 있는지에 대해서 알아볼 것이다.

## 안내의 글

이 글은 '프로그래머를 위한 논리학' 연작의 두번째 글이다. 필자는 이 글 안에서 첫번째 글에서 언급한 개념을 사용하거나 인용하려고 하고 있으므로, 만일 [첫번째 글](/ko/post/logic-for-programmers-000)을 읽지 않은 독자가 있다면 부디 먼저 읽어주기를 바란다.

# 연작의 목차

- 이전 글
   - [프로그래머를 위한 논리학 - 0](/ko/post/logic-for-programmers-000)
- 이 글
   - [두번째 글을 열면서](./#prologue)
   - [명제 논리(영차 논리) 심화](./#zeroth-order-logic-advance)
      - [이걸 언제 다 써? : 진리표의 문제](./#issues-of-truth-table-in-zeroth)
      - [논증 퍼즐 맞추기 : 공리와 추론 규칙](./#axioms-and-inference-rules-of-zeroth)
      - [자연스럽게 논증 증명하기 : 고전 자연 연역 체계](./#classical-natural-deduction-system-of-zeroth)
- 다음 글
   - [작성중&#x2026;] 술어 논리(일차 논리) 기초
   - 술어 논리(일차 논리) 심화
   - 고차 논리 기초
   - 양상 논리 기초
   - 미정&#x2026;

# 명제 논리(영차 논리) 심화 {#zeroth-order-logic-advance}

## 이걸 언제 다 써? : 진리표의 문제 {#issues-of-truth-table-in-zeroth}

다음 논증의 건전함을 증명하는 상황을 한 번 생각해보자.

- ${\lnot P},\allowbreak{Q \land R},\allowbreak{Q \to (S \lor T)}\allowbreak\vdash\nobreak{(R \to U)}\allowbreak\to\nobreak({(S \to V)}\allowbreak\to\nobreak({(T \to V)}\allowbreak\to\nobreak({(\lnot P)}\allowbreak\to\nobreak{(U \land V))}))$

너무 길어서 읽기도 힘든 논증이다. 이 논증의 진리표를 그리려면 우선 $P$, $Q$, $R$, $S$, $T$, $U$, $V$가 참/거짓인 경우를 각각 나눠야 하고, $\lnot P$, $Q \land R$, $Q \to (S \lor T)$ 와 ${(R \to U)}\allowbreak\to\nobreak({(S \to V)}\allowbreak\to\nobreak({(T \to V)}\allowbreak\to\nobreak({(\lnot P)}\allowbreak\to\nobreak{(U \land V)})))$이 각 경우에 참인지 거짓인지 계산해야 한다. 그러려면 무려 가로줄이 128 줄에 세로줄이 11 줄인 진리표를 그려야하고, 거기에 써야하는 진리값은 총 1508 개에 계산해야하는 진리값만 가로줄당 4 개씩 총 512 개가 된다. 말만 해도 끔찍하지 않은가?

물론 개발자들은

> 뭐하러 그걸 계산해&#x2026; 프로그램을 하나 개발해서 해결하면 되는 거 아냐?

라고 생각할 수도 있고, 어느정도 말이 되는 해결책이기도 하다. 진리값 하나당 1 비트(bit)의 저장공간을 차지한다고하면 지금 생각하고 있는 논증은 512 비트, 즉 64 바이트(byte)를 소비하고 이는 64 비트 정수형이나 배정밀도 부동소수점형(Double-precision floating-point type)의 값 8 개어치밖에 안 된다. 단위식이 두세 개 정도 늘어도 정수 16 개, 32 개에 해당하는 공간이니 감당할 수 있고, 단위식이 수십 개가 되는 상황은 잘 다루지 않을테니 그건 프로그램이 다루지 못하는 한계라고 얘기해버리면 된다.

근데 정말 우리가

> 단위식이 수십 개가 되는 상황은 잘 다루지 않을

것일까? 다음과 같은 국어 논증을 명제 논리의 논증으로 번역하려고 시도해보자.

- (전제) 모든 사람은 결국엔 죽는다.
- (결론) 따라서 (사람 중 한 명인) 철수는 결국엔 죽는다.

각각의 명제를 단위식 $P$, $Q$로 번역하면 위 논증을 다음과 같이 번역할 수 있다.

- $P \vdash Q$

흠? 뭔가 이상하다. 국어로 쓰인 논증은 말이 되는 논증인 것 같은데, 번역해보니 건전하지 못한 논증이 나와버렸다. 이건 이상한 번역으로 인해 두 명제가 모두 '결국엔 죽는다'의 지시체를 포함한다는 공통점이 사라졌기 때문이다. 그렇다면 어떻게 위 논증을 제대로 번역할 수 있을까? 한 번 '모든 사람'의 지시체를 풀어서 써 보자.

- (전제) 철수는 결국엔 죽는다.
- (전제) 영희는 결국엔 죽는다.
- (전제) 명주는 결국엔 죽는다.
- (전제) 호경은 결국엔 죽는다.
- (전제) &#x2026;
- (결론) 철수는 결국엔 죽는다.

각각의 전제를 단위식 $P_{ChulSoo}$와 같은 식으로 번역하면, 다음과 같은 논증을 얻는다.

- $P_{ChulSoo},\allowbreak P_{YeongHui},\allowbreak P_{MyeongJoo},\allowbreak P_{HoGyeong},\allowbreak\ldots\allowbreak\allowbreak\vdash\nobreak P_{ChulSoo}$

이제 논증이 건전한 것 같다! 정말 그런지 증명하기 위해 이 논증에 해당하는 진리표를 쓰려고 해 보자. **현재 지구에 살아있는 모든 사람**으로 '모든 사람'이라는 표현의 지시체를 한정하더라도 이 논증은 적어도 70억 개의 전제를 가지고 있고, 따라서 우리는 $2^{7,000,000,000}$ 줄의 가로줄을 나열(혹은 프로그램을 쓸 경우, 계산)해야한다. 이 우주의 모든 원자 수가 $2^{266}$ 개보다도 적으니 각 원자당 가로줄 한 개를 쓸 수 있다고 하더라도 우주가 $2^{6,999,999,744}$ 개는 있어야 한다. 이 말인 즉슨 진리표를 사용해서는 이 논증이 건전한지 아닌지 증명하지 못한다는 것이다. (물론 지금의 예시에서 이 사단을 일으킨 가장 궁극적인 원인은 '모든'이라는 표현이다. 이런 표현을 제대로 다루는 방법은 이후 술어 논리(일차 논리)에서 다룰 것이다.) 물론 이건 약간 극단적인 예시이지만, 이 정도까지는 아니더라도 수십/수백 개의 전제를 가진 상황은 얼마든지 맞닥뜨릴 수 있다. 아마 독자들도 이런 상황에서는 진리표를 쓰는 것이 쉽지 않다는 것을 이제 이해했을 것이다. 그렇다면 이런 생각을 하는 독자도 있을지 모르겠다.

> 논리학이라며&#x2026; 그러면 이런 노가다말고 좀 더 막 수식쓰고 수학적이고 논리적인 그런 방법이 있을 거 아냐? 그런 거 없어?

다행인지 불행인지 그런 방법이 있다. 뿐만이 아니라 앞으로 더 복잡한 논리(술어 논리(일차 논리)나 고차 논리, 양상 논리 등)를 다루기 위해서는 그런 방법을 알아야만 한다. 그렇다면 어쩔 도리가 없으니 대체 무슨 방법인지 한 번 살펴나 보자.

## 논증 퍼즐 맞추기 : 공리와 추론 규칙 {#axioms-and-inference-rules-of-zeroth}

진리표를 사용하지 않는 새로운 방식은 우리가 일상에서 무언가를 논리적으로 따질 때 쓰는 방식과 비슷하다. 이 방법을 한 번 좀 더 일상적인 방식으로 묘사해보자. 우리가 다음과 같은 논증이 건전하다는 걸 증명하고 싶다고 해 보자.

- 만일 철수가 게임기를 가지고 있다면 철수는 하루종일 게임을 한다.
- 만일 철수가 하루종일 게임을 한다면 철수의 논리학 성적은 10점이 떨어질 것이다.
- 따라서 만일 철수가 게임기를 가지고 있다면 철수의 논리학 성적은 10점이 떨어질 것이다.

이 논증의 건전함을 보이기 위해서 사람들은 아마도 다음과 같이 생각할 것이다.

1. 철수가 게임기를 가지고 있다고 해보자.
1. 그러면 첫번째 전제가 말하는 대로 철수는 하루종일 게임을 할 것이다.
1. 그러면 두번째 전제가 말하는 대로 철수의 논리학 성적은 10점이 떨어질 것이다.
1. 앞의 세 단계를 통해 철수가 게임기를 가지고 있다는 걸 가정했을 때 철수의 논리학 성적이 10점 떨어진다는 것을 보였다.
1. 따라서 위 논증은 건전하다.

<span></span>

논증에서 앞으로 사용하려는 좀 더 수학적인 방식은 이런 생각의 흐름을 좀 더 체계화한 것일 뿐이다. 한번 위 논증을 번역한 논증을 좀 더 체계적으로 증명해 보도록 하자.

- ${P \to Q},\allowbreak{Q \to R}\allowbreak\vdash\nobreak{P \to R}$

그러면 다음과 같은 연역 과정(Deduction process)을 따를 수 있다.

1. $P \to Q$를 가정한다.
1. $Q \to R$를 가정한다.
1. $P$를 가정한다.
1. 3 번의 결론($P$)에 의해 1 번의 결론($P \to Q$)의 조건이 만족되므로 $Q$가 참이다. (1, 3 번을 전제로 한 결론)
1. 4 번의 결론($Q$)에 의해 2 번의 결론($Q \to R$)의 조건이 만족되므로 $R$이 참이다. (1, 2, 3 번을 전제로 한 결론)
1. 5 번의 결론은 1, 2, 3 번의 전제를 가정해야 유도할 수 있다. 여기서 3 번의 전제를 조건으로 바꾸어 $P \to R$을 얻는다. (1, 2 번을 전제로 한 결론)
1. 6 번의 전제와 결론에 따라서 ${P \to Q},\allowbreak{Q \to R}\allowbreak\vdash\nobreak{P \to R}$이 건전하다.

여기서 처음의 두 단계는 일상적인 생각의 흐름에서는 보통 생략되며, 위의 연역 과정을 좀 더 엄밀하게 만들기 위해 추가된 것일 뿐이다. 이후의 단계는 생각의 흐름의 각 단계에 거의 그대로 대응된다.

그렇다면 이런 방식을 쓰기 위해서는 무슨 도구가 필요할까? 여기서 '공리(Axiom)'와 '추론 규칙(Inference rule)'이라는 두 도구가 등장한다. 각각이 무엇인지 한번 알아보자.

먼저, **공리**란 너무 **당연하기에** 우리가 참으로 받아들일 **명제**를 말한다. 이를테면

- $P \to P$  
   ($P$이면 $P$이다)
- $P \lor (\lnot P)$  
   ($P$이거나 $P$가 아니다)

등을 들 수 있겠다.

이어서, **추론 규칙**이란 이미 알고있는 하나 이상의 논증을 사용해서 새로운 논증을 추론(Infer)해내는 규칙들을 말한다. 여기서 새롭게 만들어진 논증은 사용된 논증이 모두 건전하다면 **당연히 건전하다**고 받아들일 수 있는 논증이어야 한다. 이를테면

- $\begin{gathered}
   \;P \vdash Q\;\\
   \hline
   \;\vdash P \to Q\;
   \end{gathered}$  
   ($P$를 전제로 $Q$를 건전하게 이끌어낼 수 있다면, 전제없이 $P \to Q$를 건전하게 이끌어낼 수 있다.)
- $\begin{gathered}
   \;\vdash P\; \;\; \;\vdash Q\;\\
   \hline
   \;\vdash P \land Q\;
   \end{gathered}$  
   ($P$와 $Q$를 각각 전제 없이 건전하게 이끌어낼 수 있다면, $P \land Q$를 건전하게 이끌어낼 수 있다.)

등을 들 수 있겠다. 여기서 가로줄 위에 있는 논증이 이미 알고있는 논증이고, 가로줄 밑에 있는 논증이 새롭게 만들어진 논증이다.

앞서서 공리와 추론 규칙을 설명할 때 '당연하다'라는 표현을 썼다. 그러면 우리가 당연하게 생각하는 아무 명제/규칙이나 다 공리/추론 규칙으로 사용해서 논증의 건전함을 보여도 괜찮을까? 안타깝게도 그렇지는 않다. 우리가 당연하다고 생각하는 명제 중에서도 서로 모순을 일으키는 명제가 있을 수 있고, 우리가 당연하다고 생각하는 규칙도 비슷한 문제를 일으킬 수 있다. 이런 식으로 모순이 발생하는 것을 피하기 위해서는 공리와 추론 규칙을 세심히 선택하고 선택된 공리와 추론 규칙만을 잘 사용해서 논증의 건전함을 보여야 한다.

이어지는 절들에서는 널리 사용되는 세심히 선택된 공리와 추론 규칙의 모음을 몇 소개하고 사용해 볼 것이다. 이렇게 선택된 공리와 추론 규칙들을 모아놓은 것을 **논리 체계**라고 부른다. 바로 다음 절에서는 가장 쉽고 유명한 논리 체계를 먼저 알아볼 것이고, 잇다른 절에서는 약간 난해한 논리 체계에 대해서도 한번 다뤄볼 것이다.

## 자연스럽게 논증 증명하기 : 고전 자연 연역 체계 {#classical-natural-deduction-system-of-zeroth}

이 절에서는 '고전 자연 연역 체계' 혹은 간단히 '자연 연역 체계'라고 불리는 논리 체계를 소개하려고 한다. 왜 이 체계를 소개하는가? 이유는 단순하다. 고전 자연 연역 체계가 다른 체계에 비해서 이해하기에도 사용하기에도 쉽기 때문이다. 이는 다음의 두 특징 때문이다.

1. 고전 자연 연역 체계에는 공리가 아예 없다.
1. 고전 자연 연역 체계는 그 이름대로 자연스럽다고 할 만한 추론 규칙만 포함한다.

<span></span>

그럼 이 자연스러운 추론 규칙에 대해 이야기해 보자.

### 고전 자연 연역 체계의 추론 규칙 - 0

자연 연역 체계는 다음 14 개의 추론 규칙을 가진다.

1. 전제 규칙 ($pre$ 규칙)
1. $\to$ 추가 규칙 ($\to_{I}$ 규칙)
1. $\to$ 제거 규칙 ($\to_{E}$ 규칙)
1. $\land$ 추가 규칙 ($\land_{I}$ 규칙)
1. $\land$ 제거 규칙 1번 ($\land_{E1}$ 규칙)
1. $\land$ 제거 규칙 2번 ($\land_{E2}$ 규칙)
1. $\lor$ 추가 규칙 1번 ($\lor_{I1}$ 규칙)
1. $\lor$ 추가 규칙 2번 ($\lor_{I2}$ 규칙)
1. $\lor$ 제거 규칙 ($\lor_{E}$ 규칙)
1. $\lnot$ 추가 규칙 ($\lnot_{I}$ 규칙)
1. $\lnot$ 제거 규칙 ($\lnot_{E}$ 규칙)
1. 이중 $\lnot$ 제거 규칙 ($\lnot\lnot_{E}$ 규칙)
1. $\leftrightarrow$ 추가 규칙 ($\leftrightarrow_{I}$ 규칙)
1. $\leftrightarrow$ 제거 규칙 ($\leftrightarrow_{E}$ 규칙)

<span></span>

어떤 독자들은 이름을 보고 이미 예상하고 있을 것처럼, 대부분의 규칙은 어떤 논리연산자를 논증에 추가하거나 논증에서 제거하는 방법에 대해서만 다루는 간단한 규칙이다. 그러면 1 번 규칙부터 차례대로 알아보자.

### 고전 자연 연역 체계의 추론 규칙 - 1

이 절에서는 위 목록의 1 번부터 6 번까지에 해당하는 규칙을 자세히 설명할 것이다. 이렇게 일부만 따로 자세히 소개하는 것은 (추론 규칙은 당연한 추론에 대해 다루는 규칙이므로) 모든 규칙을 자세히 설명하는 것은 필자에게도 독자에게도 지루한 일이 될 것이라고 생각하기 때문이다. 1~6 번의 규칙을 이해하고 나면 나머지 규칙은 규칙의 모양과 사용 예시 정도만 보아도 독자 여러분들이 받아들일 수 있으리라 믿는다.

가장 처음 소개할 추론 규칙은 전제 규칙이다. 이 규칙은 다른 체계에서도 매우 중요한 규칙 중 하나이기도 하다. 우선 이 규칙과 비슷한 생각의 흐름을 살펴보자.

1. 철수가 잔다고 가정하자. 그러면 철수가 잔다.

이런 생각은 일부러 써놓기에도 이상할 정도로 당연해보인다. 약간 연역 과정답게 바꾸면

1. $P \vdash P$는 건전하다.

가 되고, 이 과정 또한 당연한 것으로 보인다. 이제 이 당연한 과정을 추론 규칙의 형식에 맞춰 쓰면

- $\begin{gathered}
   \hline
   \;P \vdash P\;
   \end{gathered}$

를 얻는다. 즉, 알고 있는 논증이 아무것도 없는 상황일지라도 $P \vdash P$가 건전한 논증이라는 사실을 우리가 당연히 받아들인다는 이야기이다. 위 추론 규칙을 좀 더 일반적으로 변형하면 우리가 '전제 규칙'(혹은 '$pre$ 규칙')이라고 부르는 규칙을 얻는다.

- $\begin{gathered}
   \hline
   \;\Gamma, P \vdash P\;
   \end{gathered}$

여기서 $\Gamma$는 $P$를 제외한 다른 전제들 모두를 뭉뚱그려 표기하기 위한 기호이다. (이후에도 $\Gamma$와 $\Delta$를 이런 방식으로 사용할 것이므로 기억해두면 좋다.) $\Gamma$가 왜 추가되었는지를 다시 생각의 흐름으로 예시를 들어보자.

1. 영희가 잔다고 가정하자. 또 철수가 잔다고 가정하자. 그러면 철수가 잔다.

$\Gamma$가 다른 아무 전제('영희가 잔다')를 모두 포함하므로, 여전히 위의 추론 규칙을 사용해서 위 생각에 대응되는 논증($Q, P \vdash P$)이 건전하다는 걸 증명할 수 있다.

이어서 소개할 추론 규칙은 $\to$를 추가하기 위한 규칙이다. 마찬가지로 생각의 흐름에 해당하는 예시를 먼저 살펴보자.

1. 호준이 앉아 있다고 가정하자. 그러면 설미가 화장실에 간다.
1. 따라서 호준이 앉아 있다면 설미가 화장실에 간다.

같은 말을 반복하는 것 같기도 하고 위의 전제 규칙과도 구분이 잘 안 되는 것 같다. 조금 더 엄밀하게 보기 위해서 연역 과정답게 바꿔보자.

1. $P \vdash Q$가 건전하다.
1. 그렇다면 $\vdash P \to Q$가 건전하다.

즉 우리가 $P$를 전제로 $Q$를 이끌어 낼 수 있다면, 전제 없이 $P \to Q$를 이끌어 낼 수 있다는 이야기이다. 이걸 추론 규칙의 형식으로 쓰면

- $\begin{gathered}
   \;\Gamma, P \vdash Q\;\\
   \hline
   \;\Gamma \vdash P \to Q\;
   \end{gathered}$

를 얻는다. 이 규칙이 우리가 '\to 추가 규칙'(혹은 '$\to_{I}$ 규칙')이라고 부르는 규칙이다. 이렇게 추가한 $\to$를 다시 논증으로부터 없애고 싶다면 어떻게 해야할까? 역시 자연스럽게 생각하는 방식부터 보도록 하자.

1. 준기가 밥을 먹는다면 준기는 식탁에 앉아있다.
1. 준기는 밥을 먹는다.
1. 따라서 준기는 식탁에 앉아있다.

이를 조금 더 엄밀하게 바꾸면

1. $\vdash P \to Q$가 건전하다.
1. $\vdash P$가 건전하다.
1. 따라서 $\vdash Q$가 건전하다.

즉 $P \to Q$를 이끌어낼 수 있고 $P$를 이끌어낼 수 있다면 $Q$도 이끌어낼 수 있다는 것이다. 이 역시 추론 규칙의 형식으로 쓰면

- $\begin{gathered}
   \;\Gamma \vdash P \to Q\; \;\; \;\Delta \vdash P\;\\
   \hline
   \;\Gamma, \Delta \vdash Q\;
   \end{gathered}$

가 된다. 이 규칙은 '\to 제거 규칙'(혹은 '$\to_{E}$ 규칙')이라고 부른다.

이제 $\land$에 대한 규칙으로 넘어가자. $\land$를 추가하기 위한 규칙의 예시를 생각의 흐름으로 표현하면 다음과 같다.

1. 미예가 자고 있다.
1. 수영은 책을 읽고 있다.
1. 그렇다면 미예는 자고 있고 수영은 책을 읽고 있다.

역시 당연한 흐름인 것 같다. 연역 과정답게 바꾸면

1. $\vdash P$이 건전하다.
1. $\vdash Q$이 건전하다.
1. 그렇다면 $\vdash P \land Q$이 건전하다.

이 된다. 이걸 다음과 같이 일반화해서 추론 규칙의 형식에 맞춰 쓰면 '$\land$ 추가 규칙'이라고 부르는 규칙을 얻는다.

- $\begin{gathered}
   \;\Gamma \vdash P\; \;\; \;\Delta \vdash Q\;\\
   \hline
   \;\Gamma, \Delta \vdash P \land Q\;
   \end{gathered}$

<span></span>

그러면 $\land$를 제거하려면 어떻게 해야할까? 마찬가지로 예시부터 보도록 하자.

1. 미예는 자고 있고 수영은 책을 읽고 있다.
1. 그렇다면 미예는 자고 있다.

바로 일반화된 추론 규칙으로 옮겨 쓰면 다음과 같이 $\land$ 제거 규칙 1번을 얻는다.

- $\begin{gathered}
   \;\Gamma \vdash P \land Q\;\\
   \hline
   \;\Gamma \vdash P\;
   \end{gathered}$

이 규칙은 $P \land Q$에서 $P$를 이끌어내는 규칙이다. $P \land Q$에서 $Q$를 이끌어내도록 바꿔쓰기만 하면 다음의 $\land$ 제거 규칙 2번도 만들 수 있다.

- $\begin{gathered}
   \;\Gamma \vdash P \land Q\;\\
   \hline
   \;\Gamma \vdash Q\;
   \end{gathered}$

<span></span>

여기까지 6 개의 규칙들에 대해서 지루하게 알아보았으니, 규칙을 한번 사용해보도록 하자. 이 절에서 알아본 규칙들로 증명하려고 하는 것은 다음 논증의 건전함이다.

- $\vdash (P \land Q) \to (Q \land P)$

<span></span>

무슨 말인가하면 '문주가 화장실에 가고 또 구승이 의자에 앉아있다면 구승이 의자에 앉아있고 문주가 화장실에 간다'가 가리키는 명제처럼, '$\land$' 혹은 '그리고'가 가리키는 논리연산자는 좌/우에 오는 항들(혹은 앞/뒤에 오는 항들)의 순서를 따지지 않는다는 얘기이다. 이 논증의 건전함을 보이기위해서 다음과 같이 추론 규칙을 사용할 수 있다. (우측 괄호 안에 사용된 추론 규칙을 써 놓았다.)

1. $P \land Q \vdash P \land Q$ (pre)
1. $P \land Q \vdash P$ (1번에 $\land_{E1}$)
1. $P \land Q \vdash Q$ (1번에 $\land_{E2}$)
1. $P \land Q \vdash Q \land P$ (2, 3번에 $\land_{I}$)
1. $\vdash (P \land Q) \to (Q \land P)$ (4번에서 $P \land Q$에 대해 $\to_{I}$)

<span></span>

위 단계를 약간 풀어쓰면 다음과 같은 연역 과정으로 쓸 수 있다.

1. $P \land Q$를 가정하자.
1. 1번에서부터 $P$를 얻는다. (1번 가정)
1. 1번에서부터 $Q$를 얻는다. (1번 가정)
1. 2, 3번에서부터 $Q \land P$를 얻는다. (1번 가정)
1. 4번의 가정을 조건으로 바꿔서 $(P \land Q) \to (Q \land P)$를 얻는다.
1. 5번에 의해 $\vdash (P \land Q) \to (Q \land P)$가 건전하다.

<span></span>

여기서 전제 규칙과 $\to$ 추가 규칙이 사용되는 방식을 유심히 봐 두도록 하자. 이어질 연습문제를 포함해 앞으로 건전함을 증명할 대부분의 논증들이 이 두 규칙을 이런 방식으로 사용하기 때문이다. 다른 논증을 통해서 이 방식을 한번 더 살펴보도록 하자.

- $\vdash P \to (P \land P)$

이번 논증은 '철민이 잔다면 철민은 자고 철민은 잔다'가 가리키는 명제처럼 $\land$를 무의미하게 반복하는 것이 괜찮다는 걸 보여주는 논증이다. 이 논증의 건전함은 다음과 같이 보일 수 있다.

1. $P \vdash P$ (pre)
1. $P \vdash P \land P$ (1번과 1번에 $\land_{I}$)
1. $\vdash P \to (P \land P)$ (2번에서 $P$에 대해 $\to_{I}$)

<span></span>

이 단계들도 한 번 풀어서 써 보자.

1. $P$를 가정하자.
1. 1번과 1번에서부터 $P \land P$를 얻는다. (1번 가정)
1. 2번의 가정을 조건으로 바꿔서 $P \to (P \land P)$를 얻는다.
1. 3번에 의해 $\vdash P \to (P \land P)$가 건전하다.

<span></span>

아마 이해를 할듯 말듯한 독자들이 꽤 있으리라 생각한다. 그렇다면 다음의 연습문제를 풀면서 감을 잡아보도록 하자.

### 자연 연역 체계 연습문제 - 1

1. $\vdash P \to P$가 건전함을 증명해보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \vdash P$ (pre)
   1. $\vdash P \to P$ (1번에 $\to_{I}$)

   </details>
1. $\vdash P \to (Q \to P)$가 건전함을 증명해보자.
   <details class='answer'>
   <summary>답 보기</summary>

    1. $P \vdash P$ (pre)
    1. $Q \vdash Q$ (pre)
    1. $P, Q \vdash P \land Q$ (1, 2번에 $\land_{I}$)
    1. $P, Q \vdash P$ (3번에 $\land_{E1}$)
    1. $P \vdash Q \to P$ (4번에서 $Q$에 대해 $\to_{I}$)
    1. $\vdash P \to (Q \to P)$ (5번에서 $P$에 대해 $\to_{I}$)

    </details>
1. $\vdash (P \land (Q \land R)) \to R$가 건전함을 증명해보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \land (Q \land R) \vdash P \land (Q \land R)$ (pre)
   1. $P \land (Q \land R) \vdash Q \land R$ (1번에 $\land_{E2}$)
   1. $P \land (Q \land R) \vdash R$ (2번에 $\land_{E2}$)
   1. $\vdash (P \land (Q \land R)) \to R$ (3번에서 $P \land (Q \land R)$에 대해 $\to_{I}$)

   </details>
1. $\vdash (P \land (P \to Q)) \to Q$가 건전함을 증명해보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \land (P \to Q) \vdash P \land (P \to Q)$ (pre)
   1. $P \land (P \to Q) \vdash P$ (1번에 $\land_{E1}$)
   1. $P \land (P \to Q) \vdash P \to Q$ (1번에 $\land_{E2}$)
   1. $P \land (P \to Q) \vdash Q$ (2, 3번에 $\to_{E}$)
   1. $\vdash (P \land (P \to Q)) \to Q$ (4번에서 $P \land (P \to Q)$에 대해 $\to_{I}$)

   </details>
1. $\vdash ((P \to R) \land (P \land Q)) \to (Q \land R)$가 건전함을 증명해보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $(P \to R) \land (P \land Q) \vdash (P \to R) \land (P \land Q)$ (pre)
   1. $(P \to R) \land (P \land Q) \vdash P \land Q$ (1번에 $\land_{E2}$)
   1. $(P \to R) \land (P \land Q) \vdash Q$ (2번에 $\land_{E2}$)
   1. $(P \to R) \land (P \land Q) \vdash P$ (2번에 $\land_{E1}$)
   1. $(P \to R) \land (P \land Q) \vdash P \to R$ (1번에 $\land_{E1}$)
   1. $(P \to R) \land (P \land Q) \vdash R$ (4, 5번에 $\to_{E}$)
   1. $(P \to R) \land (P \land Q) \vdash Q \land R$ (3, 6번에 $\land_{I}$)
   1. $\vdash ((P \to R) \land (P \land Q)) \to (Q \land R)$ (7번에서 $(P \to R) \land (P \land Q)$에 대해 $\to_{I}$)

   </details>
1. $\vdash (P \to Q) \to ((Q \to R) \to (P \to R))$가 건전함을 증명해보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \to Q \vdash P \to Q$ (pre)
   1. $Q \to R \vdash Q \to R$ (pre)
   1. $P \vdash P$ (pre)
   1. $P \to Q, P \vdash Q$ (1, 3번에 $\to_{E}$)
   1. $P \to Q, Q \to R, P \vdash R$ (2, 4번에 $\to_{E}$)
   1. $P \to Q, Q \to R \vdash P \to R$ (5번에서 $P$에 대해 $\to_{I}$)
   1. $P \to Q \vdash (Q \to R) \to (P \to R)$ (6번에서 $Q \to R$에 대해 $\to_{I}$)
   1. $\vdash (P \to Q) \to ((Q \to R) \to (P \to R))$ (7번에서 $P \to Q$에 대해 $\to_{I}$)

   </details>

### 고전 자연 연역 체계의 추론 규칙 - 2

이번 절에서는 나머지 추론 규칙들을 소개하도록 하겠다. 우선 $\lor$을 위한 규칙이다.

- $\lor$ 추가 규칙 1번 ($\lor_{I1}$)  
   $\begin{gathered}
   \;\Gamma \vdash P\;\\
   \hline
   \;\Gamma \vdash P \lor Q\;
   \end{gathered}$
- $\lor$ 추가 규칙 2번 ($\lor_{I2}$)  
   $\begin{gathered}
   \;\Gamma \vdash Q\;\\
   \hline
   \;\Gamma \vdash P \lor Q\;
   \end{gathered}$
- $\lor$ 제거 규칙 ($\lor_{E}$)  
   $\begin{gathered}
   \;\Gamma \vdash P \lor Q\; \;\; \;\Delta_0, P \vdash R\; \;\; \;\Delta_1, Q \vdash R\;\\
   \hline
   \;\Gamma, \Delta_0, \Delta_1 \vdash R\;
   \end{gathered}$

이 규칙들은 $P$를 이끌어낼 수 있거나 $Q$를 이끌어낼 수 있을 때에만 $P$ 또는 $Q$를 이끌어낼 수 있다는 것, 그리고 $P$와 $Q$로부터 동일한 결론 $R$에 도달할 수 있을 때에만 $P$ 또는 $Q$에서 $R$에 도달할 수 있다는 것을 설명하는 규칙들이다.

그 다음 소개할 추론 규칙은 $\lnot$을 위한 규칙이다.

- $\lnot$ 추가 규칙 ($\lnot_{I}$)  
   $\begin{gathered}
   \;\Gamma, P \vdash Q\; \;\; \;\Delta, P \vdash \lnot Q\;\\
   \hline
   \;\Gamma, \Delta \vdash \lnot P\;
   \end{gathered}$
- $\lnot$ 제거 규칙 ($\lnot_{E}$)  
   $\begin{gathered}
   \;\Gamma \vdash P\; \;\; \;\Delta \vdash \lnot P\;\\
   \hline
   \;\Gamma, \Delta \vdash Q\;
   \end{gathered}$
- 이중 $\lnot$ 제거 규칙 ($\lnot\lnot_{E}$)  
   $\begin{gathered}
   \;\Gamma \vdash \lnot\lnot P\;\\
   \hline
   \;\Gamma \vdash P\;
   \end{gathered}$

첫번째 규칙은 $P$를 전제로 삼아서 $Q$ 그리고 ($Q$와 모순되는) $\lnot Q$를 모두 이끌어낼 수 있을 때, $\lnot P$를 이끌어낼 수 있다는 규칙이다. 다시 말해 $P$를 전제로 삼으면 모순이 발생할 때, $P$가 거짓임을 이끌어내는 것이다. 두번째 규칙은 $P$와 $P$가 아니란 사실을 이끌어낼 수 있다면 아무런 명제($Q$)나 이끌어낼 수 있다는 것이다. 이 규칙은 지난 글에서 설명했단 $\to$의 진리값 규칙과 연관된다. 지난 글을 읽으면서

> $P \to Q$는 $P$가 거짓이거나 $Q$가 참일 때에는 참이고, $P$가 참이면서 $Q$가 거짓이면 거짓이다.

라는 규칙에 의문을 품은 사람은 $\lnot_{E}$ 규칙의 뜻이 헷갈릴 수 있다. 이는 이 진리값 규칙과 $\lnot_E$ 규칙이 비슷한 생각을 요구하는 규칙이기 때문이다. 그 경우에는 이전 글에서 언급했던 것처럼 댓글로 질문을 남겨주기를 바란다. 필자가 최대한 답변할 수 있도록 노력하겠다. 마지막 규칙은 $\lnot$이 두 개가 연달아 있을 때, 즉 $P$가 아닌 것이 아닌 때에는 $P$가 참이라는 규칙이다. 이 규칙 또한 굉장히 중요한 규칙 중 하나이고, 많은 증명에서 사용된다.

$\leftrightarrow$을 추가하고 제거하기 위한 규칙 역시 존재한다. 역시 간략화된 규칙을 먼저 보자.

- $\leftrightarrow$ 추가 규칙 ($\leftrightarrow_{I}$)  
   $\begin{gathered}
   \;\Gamma \vdash (P \to Q) \land (Q \to P)\;\\
   \hline
   \;\Gamma, \Delta \vdash P \leftrightarrow Q\;
   \end{gathered}$
- $\leftrightarrow$ 제거 규칙 ($\leftrightarrow_{E}$)  
   $\begin{gathered}
   \;\Gamma \vdash P \leftrightarrow Q\;\\
   \hline
   \;\Gamma \vdash (P \to Q) \land (Q \to P)\;
   \end{gathered}$

이 규칙들은 $P \leftrightarrow Q$를 $(P \to Q) \land (Q \to P)$로 해석하는 규칙들이라고 이해하면 된다.

지금까지 고전 자연 연역 체계의 추론 규칙에 대해서 알아보았다. 이제 이 추론 규칙들을 사용해보도록 하자. 첫번째 예시는 다음과 같다.

- $\vdash (P \lor Q) \to (Q \lor P)$

아까 살펴본 $\land$가 좌/우를 따지지 않는다는 명제의 $\lor$ 버전을 위한 논증이다. 한번 증명해보자.

1. $P \vdash P$ (pre)
1. $P \vdash Q \lor P$ (1번에 $\lor_{I2}$)
1. $Q \vdash Q$ (pre)
1. $Q \vdash Q \lor P$ (1번에 $\lor_{I1}$)
1. $P \lor Q \vdash P \lor Q$ (pre)
1. $P \lor Q \vdash Q \lor P$ (2, 4, 5번에 $\lor_{E}$)
1. $\vdash (P \lor Q) \to (Q \lor P)$ (6번에서 $P \lor Q$에 대해 $\to_{I}$)

이 증명을 조건에 있는 $\lor_{E}$ 규칙을 활용하는 방식에 주의해서 살펴보도록 하자. $\lor_{E}$ 규칙을 사용하기 위해서는 $\lor$의 각 경우에 해당하는 증명을 각각 해야한다는 것이 요점이다. 다른 예시를 통해서 복습해보도록 하자.

- $\vdash ((P \lor Q) \land (P \to Q)) \to Q$

이 다음의 예시는 $\leftrightarrow$를 사용하는 논증이다.

- $\vdash (P \lor (Q \land R)) \leftrightarrow ((P \lor Q) \land (P \lor R))$

$\leftrightarrow$를 포함하는 결론을 이끌어내려고 할 때는 $\to$의 경우와 $\leftarrow$의 경우, 즉

- $\vdash (P \lor (Q \land R)) \to ((P \lor Q) \land (P \lor R))$
- $\vdash ((P \lor Q) \land (P \lor R)) \to (P \lor (Q \land R))$

의 건전함을 모두 증명하면 된다. 우선 첫번째 논증의 건전함부터 증명해보자.

1. $P \vdash P$ (pre)
1. $P \vdash P \lor Q$ (1번에 $\lor_{I1}$)
1. $P \vdash P \lor R$ (1번에 $\lor_{I1}$)
1. $P \vdash (P \lor Q) \land (P \lor R)$ (2, 3번에 $\land_{I}$)
1. $Q \land R \vdash Q \land R$ (pre)
1. $Q \land R \vdash Q$ (5번에 $\land_{E1}$)
1. $Q \land R \vdash P \lor Q$ (6번에 $\lor_{I2}$)
1. $Q \land R \vdash R$ (5번에 $\land_{E2}$)
1. $Q \land R \vdash P \lor R$ (8번에 $\lor_{I2}$)
1. $Q \land R \vdash (P \lor Q) \land (P \lor R)$ (7, 9번에 $\land_{I}$)
1. $P \lor (Q \land R) \vdash P \lor (Q \land R)$ (pre)
1. $P \lor (Q \land R) \vdash (P \lor Q) \land (P \lor R)$ (4, 10, 11번에 $\lor_{E}$)
1. $\vdash (P \lor (Q \land R)) \to ((P \lor Q) \land (P \lor R))$ (12번에서 $P \lor (Q \land R)$에 대해 $\to_{I}$)

### 자연 연역 체계 연습문제 - 2
