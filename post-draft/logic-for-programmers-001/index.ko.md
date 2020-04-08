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
   - [두번째 글을 열면서](#prologue)
   - [명제 논리(영차 논리) 심화](#zeroth-order-logic-advance)
      - [이걸 언제 다 써? : 진리표의 문제](#issues-of-truth-table-in-zeroth)
      - [논증 퍼즐 맞추기 : 공리와 추론 규칙](#axioms-and-inference-rules-of-zeroth)
      - [자연스럽게 논증 증명하기 : 고전 자연 연역 체계](#classical-natural-deduction-system-of-zeroth)
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

> 뭐하러 그걸 계산해&#x2026; 그냥 프로그램을 개발해서 해결하면 되는 거 아냐?

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

이제 논증이 건전한 것 같다! 정말 그런지 증명하기 위해 이 논증에 해당하는 진리표를 쓰려고 해 보자. **현재 지구에 살아있는 모든 사람**으로 '모든 사람'이라는 표현의 지시체를 한정하더라도 이 논증은 적어도 70억 개의 전제를 가지고 있고, 따라서 우리는 $2^{7,000,000,000}$ 줄의 가로줄을 나열(혹은 프로그램을 쓸 경우, 계산)해야한다. 이 우주의 모든 원자 수가 $2^{266}$ 개보다도 적으니 각 원자당 가로줄 한 개를 쓸 수 있다고 하더라도 우주가 $2^{6,999,999,744}$ 개는 있어야 한다. 이 말인 즉슨 진리표를 사용해서는 이 논증이 건전한지 아닌지 증명하지 못한다는 것이다. (물론 지금의 예시에서 이 사단을 일으킨 가장 궁극적인 원인은 '모든'이라는 표현이다. 이런 표현을 제대로 다루는 방법은 이후 술어 논리(일차 논리)에서 다룰 것이다.) 물론 이건 약간 극단적인 예시이지만, 이 정도까지는 아니더라도 수십/수백 개의 전제를 가진 상황은 얼마든지 맞닥뜨릴 수 있다. 아마 독자들도 이런 상황에서는 진리표를 쓰는 것이 현실적으로 불가능하다는 것을 이제 이해했을 것이다. 그렇다면 이런 생각을 하는 독자도 있을지 모르겠다.

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
1. 6 번의 전제와 결론에 따라서 ${P \to Q},\allowbreak{Q \to R}\allowbreak\vdash\nobreak{P \to R}$이다.

여기서 처음의 두 단계는 일상적인 과정에서는 생략되어있으며, 위의 연역 과정을 좀 더 엄밀하게 만들기 위해 추가된 것일 뿐이다. 이후 단계들은 일상적인 과정의 단계에 거의 그대로 대응된다.

이 방법은 개발자가 프로그램을 만들 때 사용하는 방법과도 비슷하다. 예를 들어 우리가 한 2차원 점의 원점으로부터의 거리를 계산하는 함수를 만들고 싶을 때, 즉 `(a, b)`라는 입력값으로부터 `sqrt(a * a + b * b)`라는 값을 만들어내는 함수를 만들고 싶을 때 다음과 같은 과정을 거칠 것이다. (아래의 프로그램은 유사 코드(Pseudo code)로 작성했다.)

1. 함수의 모양을 `double distance(Point p) {}`과 같이 쓴다.  
   여기서 우리는 `p`라는 입력값이 들어올 것이라고 가정했다.
1. 함수의 몸체에서 필요한 값들을 `double x = p.x`와 `double y = p.y`, `double xx = x * x` 그리고 `double yy = y * y`와 같이 계산한다.  
   여기서 우리는 우리가 가정한 값을 사용해 새로운 값들을 계산했다.
1. 함수의 앞서 만들어낸 값들에서 결과값을 `return sqrt(xx + yy)`와 같이 만든다.  
   여기서 우리는 새로 계산한 값들을 사용해 결과값을 만들어냈다.
1. 모든 과정을 종합해서 하나의 함수를 만들어 낸다.
    ```
    double distance(Point p)
    {
      double x = p.x
      double y = p.y
      double xx = x * x
      double yy = y * y
     
      return sqrt(xx + yy)
    }
    ```
   
함수 작성의 첫 단계는 위 연역 과정 중에 전제를 가정하는 것과 비슷한 것이다. 이어지는 두 단계는 위 연역 과정에서 전제를 가지고 새로운 결론들을 이끌어내는 것에 대응된다. 마지막으로 함수를 쓰는 단계가 전체 논증의 건전함을 보이는 것과 비슷한 단계에 해당한다.

그렇다면 이런 방식을 쓰기 위해서 필요한 것은 무엇일까? 프로그램의 관점에서 먼저 생각해보자. 우리가 위와 같은 프로그램을 짜기 위해서는

1. 프로그램의 의미를 설명하는 규칙이 있어야 한다. 예를 들어
   - 앞에 이미 선언된 변수만 접근할 수 있다.
   - `double sqrt(double input)`인 함수 `sqrt`에 `double` 값의 인자를 넘기면 `double` 값을 얻는다.
   - `Point`라는 자료형에 `x`라는 필드(Field)가 있을 때에만 `Point p`인 `p`에서 `p.x`와 같이 `x`를 접근할 수 있다.
   등이 필요하다.
1. `sqrt`라는 함수가 있어야 한다.

진리표를 사용하지 않는 방식은 공리(Axiom)와 추론 규칙(Inference rule)을 사용한다. 공리란 너무 당연하기에 우리가 참으로 받아들일 *명제**를 말한다. 이를테면

- $P \to P$  
   ($P$이면 $P$이다)
- $P \lor (\lnot P)$  
   ($P$이거나 $P$가 아니다)

등을 들 수 있겠다. 반면에 추론 규칙이란 하나 이상의 논증을 사용해서 새로운 논증을 **추론(Infer)해내는** 규칙들을 말한다. 새롭게 만들어진 논증은 추론에 사용된 논증들이 모두 건전한 경우에 당연히 건전하다고 받아들일 수 있는 논증이어야 한다. 이를테면

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

등을 들 수 있겠다. 여기서 가로줄 위에 있는 논증들이 사용되는 논증들이고, 가로줄 밑에 있는 논증이 새롭게 만들어진 논증이다.

다음 절부터는 수많은 명제 중에서도 **제일 당연하다**고 여길만한 몇 개의 공리와 추론 규칙을 정해놓고, 정해진 공리와 추론 규칙만으로 증명하고자 하는 논증을 이끌어내려고 시도할 것이다. 만일 논증을 이끌어내는데 성공한다면 그 논증은 건전한 것이고, 이끌어낼 수 있는 방법이 아예 없다면 그 논증은 건전하지 못한 것이다.

이렇게 정해진 공리와 추론 규칙들을 모아놓은 것을 **논리 체계**라고 부른다. 우선 가장 쉽고 유명한 논리 체계를 먼저 알아보고, 그 뒤에 약간 난해한 논리 체계에 대해서도 한 번 논의해볼 것이다.

## 자연스럽게 논증 증명하기 : 고전 자연 연역 체계 {#classical-natural-deduction-system-of-zeroth}

이 절에서는 '자연 연역 체계'라고 불리는 논리 체계를 소개하려고 한다. 왜 자연 연역 체계를 소개하는가? 이유는 단순하다. 이해하기 쉽기 때문이다. 자연 연역 체계는 공리를 가지고 있지 않고 추론 규칙도 이해하기 쉬운 방식으로 구성돼 있다. 그럼 추론 규칙을 하나하나 알아보면서 이야기해 보자.

### 자연 연역 체계의 추론 규칙들

아래의 추론 규칙은 그 뜻을 설명하다보면 너무 당연한 이야기를 반복하게 되는 경우가 있다. 왜냐? 우리가 당연한 것을 추론 규칙으로 삼고 싶기 때문이다. 따라서 같은 이야기가 너무 반복되는 것 같더라도 독자 여러분의 너른 양해를 부탁드린다.

가장 처음 소개할 추론 규칙은 가장 중요한 것이기도 하다. 바로 전제에 있는 명제를 결론으로 취급하는 논증을 만들어내는 규칙이다. (여기서 $\Gamma$는 그냥 $P$를 제외한 다른 전제들을 뭉뚱그려 표기하기 위한 기호들이다. 이후에도 $\Gamma$와 $\Delta$를 이런 방식으로 사용할 것이다.)

- $\begin{gathered}
   \hline
   \;\Gamma, P \vdash P\;
   \end{gathered}$

이 규칙은 'Premise 규칙'이라고 한다. 이 규칙은 전제에 어떤 사실이 있다면 결론으로 그 사실이 따라나올 수 있다는 것을 말하고 있다.

다음으로 소개할 추론 규칙은 $\land$를 추가하거나 제거하기 위한 규칙이다.

- $\begin{gathered}
   \;\Gamma \vdash P\; \;\; \;\Delta \vdash Q\;\\
   \hline
   \;\Gamma, \Delta \vdash P \land Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash P \land Q\;\\
   \hline
   \;\Gamma \vdash P\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash P \land Q\;\\
   \hline
   \;\Gamma \vdash Q\;
   \end{gathered}$

잠깐! 쉽다고 해놓고 벌써부터 뭐가 너무 복잡한 것 같다. 이해를 돕기 위해 잡다한 전제를 모두 없애고 핵심 부분만 다시 써보도록 하자.

- $\begin{gathered}
   \;\vdash P\; \;\; \;\vdash Q\;\\
   \hline
   \;\vdash P \land Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P \land Q\;\\
   \hline
   \;\vdash P\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P \land Q\;\\
   \hline
   \;\vdash Q\;
   \end{gathered}$

이제 약간 볼 만한 것 같으니, 규칙들의 이름과 의미를 한 번 알아보자. 첫번째 규칙은 '$\land$ 추가 규칙' 혹은 '$\land_{I}$'이라고 한다. $P$와 $Q$를 모두 이끌어낼 수 있을 때 $P \land Q$도 이끌어낼 수 있다는 이야기이다. 두번째 규칙은 '$\land$ 제거 규칙 1번' 혹은 '$\land_{E1}$'이라고 한다. $P \land Q$를 이끌어낼 수 있으면 $P$도 이끌어낼 수 있다는 이야기이다. 마지막 규칙은 $\land_{E1}$과 대칭인 규칙으로, '$\land$ 제거 규칙 2번' 혹은 '$\land_{E2}$'이라고 부른다. $\land_{E1}$과 비슷하게 $P \land Q$를 이끌어낼 수 있을 때 $Q$도 이끌어낼 수 있다는 내용이다. 처음 나열한 잡다한 전제를 포함하고 있는 세 규칙은 지금 설명한 세 규칙을 증명 중에 어디서든 사용할 수 있게 만들기 위해 복잡해진 것일 뿐이다.

이어서 $\lor$을 추가하거나 제거하기 위한 규칙을 소개하겠다. 이번엔 간략화된 규칙을 먼저 보도록 하자.

- $\begin{gathered}
   \;\vdash P\;\\
   \hline
   \;\vdash P \lor Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash Q\;\\
   \hline
   \;\vdash P \lor Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P \lor Q\; \;\; \;P \vdash R\; \;\; \;Q \vdash R\;\\
   \hline
   \;\vdash R\;
   \end{gathered}$

첫번째 규칙은 '$\lor$ 추가 규칙 1번' 혹은 '$\lor_{I1}$'이라고 한다. $P$를 이끌어낼 수 있다면  $P \lor Q$도 이끌어낼 수 있다는 이야기이다. 두번째 규칙은 $\lor_{I1}$의 대칭으로, '$\lor$ 추가 규칙 2번' 혹은 '$\lor_{I2}$'이라고 부른다. 이 역시 $P \lor Q$를 이끌어내지만, $Q$를 이끌어낼 수 있었던 상황을 가정한다는 점이 다르다. 마지막 규칙은 '$\lor$ 제거 규칙' 혹은 '$\lor_{E}$'이라고 부른다. $P$ 또는 $Q$이고 $P$을 전제로 $R$, $Q$를 전제로 해도 $R$을 이끌어낼 수 있다면 $R$을 이끌어낼 수 있다는 규칙이다. 잡다한 전제를 추가하면 다음과 같이 된다.

- $\begin{gathered}
   \;\Gamma \vdash P\;\\
   \hline
   \;\Gamma \vdash P \lor Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash Q\;\\
   \hline
   \;\Gamma \vdash P \lor Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash P \lor Q\; \;\; \;\Delta_0, P \vdash R\; \;\; \;\Delta_1, Q \vdash R\;\\
   \hline
   \;\Gamma, \Delta_0, \Delta_1 \vdash R\;
   \end{gathered}$

<span></span>

그 다음 소개할 추론 규칙은 $\lnot$을 추가하거나 제거하기 위한 규칙이다. 우선 간략화시킨 간단한 규칙을 먼저 보자.

- $\begin{gathered}
   \;P \vdash Q\; \;\; \;P \vdash \lnot Q\;\\
   \hline
   \;\vdash \lnot P\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P\; \;\; \;\vdash \lnot P\;\\
   \hline
   \;\vdash Q\;
   \end{gathered}$

첫번째 규칙은 'Not 추가 규칙' 혹은 '$\lnot_I$'이라고 한다. 이 규칙은 $P$를 전제로 삼아서 $Q$ 그리고 ($Q$와 모순되는) $\lnot Q$를 모두 이끌어낼 수 있을 때, $\lnot P$를 이끌어낼 수 있다는 규칙이다. 다시 말해 $P$를 전제로 삼으면 모순이 발생할 때, $P$가 거짓임을 이끌어내는 것이다. 두번째 규칙은 'Not 제거 규칙' 혹은 '$\lnot_E$'이라고 한다. $P$와 $P$가 아니란 사실을 이끌어낼 수 있다면 아무런 명제($Q$)나 이끌어낼 수 있다는 것이다. 이 규칙은 이전 글에서 설명했단 $\to$의 진리값 규칙과 연관된다. 이전 글을 읽으면서

> $P \to Q$는 $P$가 거짓이거나 $Q$가 참일 때에는 참이고, $P$가 참이면서 $Q$가 거짓이면 거짓이다.

라는 규칙에 의문을 품은 사람은 $\lnot_E$의 뜻이 헷갈릴 수 있다. 이는 이 진리값 규칙과 $\lnot_E$이 사실상 같은 생각을 요구하는 규칙이기 때문이다. 그 경우에는 이전 글에서 언급했던 것처럼 댓글로 질문을 남겨주기를 바란다. 필자가 최대한 답변할 수 있도록 노력하겠다.

$\lnot_I$와 $\lnot_E$에 자잘한 전제를 추가하면 다음과 같이 된다.

- $\begin{gathered}
   \;\Gamma, P \vdash Q\; \;\; \;\Delta, P \vdash \lnot Q\;\\
   \hline
   \;\Gamma, \Delta \vdash \lnot P\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash P\; \;\; \;\Delta \vdash \lnot P\;\\
   \hline
   \;\Gamma, \Delta \vdash Q\;
   \end{gathered}$

<span></span>

$\leftrightarrow$을 추가하고 제거하기 위한 규칙 역시 존재한다. 역시 간략화된 규칙을 먼저 보자.

- $\begin{gathered}
   \;\vdash P \to Q\; \;\; \;\vdash Q \to P\;\\
   \hline
   \;\vdash P \leftrightarrow Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P \leftrightarrow Q\;\\
   \hline
   \;\vdash P \to Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P \leftrightarrow Q\;\\
   \hline
   \;\vdash Q \to P\;
   \end{gathered}$

각각

- '$\leftrightarrow$ 추가 규칙' 혹은 '$\leftrightarrow_{I}$'
- '$\leftrightarrow$ 제거 규칙 1번' 혹은 '$\leftrightarrow_{E1}$'
- '$\leftrightarrow$ 제거 규칙 2번' 혹은 '$\leftrightarrow_{E2}$'

라고 한다. 이 규칙들은 $P \leftrightarrow Q$를 $(P \to Q) \land (Q \to P)$로 해석했을 때 $\land$의 법칙들과 동일하다. 잡다한 전제와 논증을 추가했을 때도 $\land$의 경우와 매우 비슷하다.

- $\begin{gathered}
   \;\Gamma \vdash P \to Q\; \;\; \;\Delta \vdash Q \to P\;\\
   \hline
   \;\Gamma, \Delta \vdash P \leftrightarrow Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash P \leftrightarrow Q\;\\
   \hline
   \;\Gamma \vdash P \to Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\Gamma \vdash P \leftrightarrow Q\;\\
   \hline
   \;\Gamma \vdash Q \to P\;
   \end{gathered}$

이번에는 $\to$을 추가하고 제거하기 위한 규칙이다. 간략화된 규칙은 다음과 같다.

- $\begin{gathered}
   \;P \vdash Q\;\\
   \hline
   \;\vdash P \to Q\;
   \end{gathered}$
- $\begin{gathered}
   \;\vdash P\; \;\; \;\vdash P \to Q\;\\
   \hline
   \;\vdash Q\;
   \end{gathered}$

첫번째 규칙은 '$\to$ 추가 규칙' 혹은 '$\to_{I}$'라고 하고, 두번째 규칙은 '$\to$ 제거 규칙' 혹은 '$\to_E$'라고 한다. 이 중 두번째 규칙은 '전건 긍정'(라틴어로 Modus Ponens)이라고도 부른다. 이 두 규칙(의 복잡한 버전)을 통해 논증과 조건문을 상호 교환할 수 있다. $P \vdash Q$ 라는 논증이 있으면 $\vdash P \to Q$를 이끌어낼 수 있으며, 마찬가지로 $\vdash P \to Q$가 있으면 $P \vdash Q$를 이끌어낼 수 있다. 혹자는

> 그러면 왜 $\vdash$랑 $\to$를 구분해야 하는 건데?

라고 물을 수도 있다. 가장 중요한 차이점 중 하나는 $\vdash$는 논리 체계 안에서 의미를 가지는 것이고 $\to$는 명제 안에서 의미를 가지는 것이라는 점이다.
