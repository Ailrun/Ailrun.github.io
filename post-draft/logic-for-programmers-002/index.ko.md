---
title: 프로그래머를 위한 논리학 - 2
date: 2020-06-01T02:30:16-05:00
---

## 세번째 글을 열면서 {#prologue}

[지난 글](/ko/post/logic-for-programmers-001/)에서는 공리와 추론 규칙에 대해 알아보고, 그 중 '고전 자연 연역 체계'라고 불리는 공리와 추론 규칙의 모음에 대해 설명하고 사용해 보았다. 이번 글은 고전 자연 연역 체계를 더 써보고 싶은 독자들을 위한 약간의 퍼즐들로 시작해, 이번 글에서 소개한다고 약속했던 비교적 난해할 수 있는 논리 체계 두 개를 다뤄볼 것이다. 이 중 '구성적 자연 연역 체계'라고 불리는 체계는 강한 자료형 개발에 응용되는 중요한 개념을 포함하고있는 논리 체계이다. 이 개념 역시 이 글에서 간략한 소개를 할 것이나, 이 개념에 대한 자세한 설명은 논리학에 대한 더 많은 지식을 필요로 하기 때문에, 보다 구체적인 설명은 이후의 글로 넘기도록 하겠다.

## 연작의 목차 {#table-of-contents}

- 이전 글
   - [프로그래머를 위한 논리학 - 0](/ko/post/logic-for-programmers-000/)
   - [프로그래머를 위한 논리학 - 1](/ko/post/logic-for-programmers-001/)
- 이 글
   - [세번째 글을 열면서](./#prologue)
   - [명제 논리(영차 논리) 심화 - 1](./#zeroth-advance-1)
      - [퍼즐 맞춰보기 : 고전 자연 연역 체계로 건전함을 증명할 수 있는 논증들](./#more-arguments-for-0th-classical-natural-deduction)
      - [단순하지만 난해한 논리 체계 : 얀 워카시에비치의 체계](./#jan-s-zeroth)
      - [강한 자료형 개발에 응용되는 논리 체계 : 구성적 자연 연역 체계](./#constructive-natural-deduction-of-zeroth)
   - [세번째 글을 마치며](./#epilogue)
- 다음 글
   - [작성중&#x2026;] 명제 논리(영차 논리) 심화 - 2
   - 술어 논리(일차 논리) 기초
   - 술어 논리(일차 논리) 심화
   - 논리와 프로그래밍
   - 양상 논리 기초
   - 미정&#x2026;

## 명제 논리(영차 논리) 심화 - 1 {#zeroth-advance-1}

### 퍼즐 맞춰보기 : 고전 자연 연역 체계로 건전함을 증명할 수 있는 논증들 {#more-arguments-for-0th-classical-natural-deduction}

이전 장의 연습 문제만으로는 성에 차지 않는 몇몇 독자들을 위해 더 많은 (고전 자연 연역 체계로 건전성 증명이 가능한) 논증들을 준비해 보았다. 이전의 연습 문제로도 충분하다고 생각하는 독자들은 [다음 절](./#jan-s-zeroth)부터 읽기 바란다. 아래 문제들은 쉬운 것부터 어려워지는 순으로 나열되어 있다. 첫 쉬운 문제 몇 개는 답을 생략했놓았다. 만약 연습문제와 관련된 질문이 있다면 댓글을 달아주기 바란다.

1. $\vdash P \to (Q \to (P \land Q))$

1. $\vdash P \to (P \lor Q)$

1. $\vdash Q \to (P \lor Q)$

1. $\vdash ((P \land Q) \lor ((\lnot P) \land (\lnot Q))) \to (P \to Q)$
   <details class='answer'>
   <summary>답 보기</summary>

   1. $(P \land Q) \lor ((\lnot P) \land (\lnot Q)) \vdash (P \land Q) \lor ((\lnot P) \land (\lnot Q))$ (pre)
   1. $P \land Q \vdash P \land Q$ (pre)
   1. $P \land Q \vdash Q$ (2번에 $\land_{E2}$)
   1. $P \vdash P$ (pre)
   1. $(\lnot P) \land (\lnot Q) \vdash (\lnot P) \land (\lnot Q)$ (pre)
   1. $(\lnot P) \land (\lnot Q) \vdash \lnot P$ (5번에 $\land_{E1}$)
   1. $(\lnot P) \land (\lnot Q), P \vdash Q$ (4, 6번에 $\lnot_{E}$)
   1. $(P \land Q) \lor ((\lnot P) \land (\lnot Q)), P \vdash Q$ (1, 3, 7번에 $\lor_{E}$)
   1. $(P \land Q) \lor ((\lnot P) \land (\lnot Q)) \vdash P \to Q$ (8번에서 $P$에 $\to_{I}$)
   1. $\vdash ((P \land Q) \lor ((\lnot P) \land (\lnot Q))) \to (P \to Q)$ (9번에서 $(P \land Q) \lor ((\lnot P) \land (\lnot Q))$에 $\to_{I}$)

   </details>

1. $\vdash (P \to (Q \to R)) \to ((P \to Q) \to (P \to R))$
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \to (Q \to R) \vdash P \to (Q \to R)$ (pre)
   1. $P \to Q \vdash P \to Q$ (pre)
   1. $P \vdash P$ (pre)
   1. $P \to (Q \to R), P \vdash Q \to R$ (1, 3번에 $\to_{E}$)
   1. $P \to Q, P \vdash Q$  (2, 3번에 $\to_{E}$)
   1. $P \to (Q \to R), P \to Q, P \vdash R$ (4, 5번에 $\to_{E}$)
   1. $P \to (Q \to R), P \to Q \vdash P \to R$ (6번에서 $P$에 $\to_{I}$)
   1. $P \to (Q \to R) \vdash (P \to Q) \to (P \to R)$ (7번에서 $P \to Q$에 $\to_{I}$)
   1. $\vdash (P \to (Q \to R)) \to ((P \to Q) \to (P \to R))$ (8번에서 $P \to (Q \to R)$에 $\to_{I}$)

   </details>

1. $\vdash (P \lor Q) \to ((\lnot P) \to Q)$  
   ($\lor$ 삼단논법, Or syllogism) 
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \lor Q \vdash P \lor Q$ (pre)
   1. $\lnot P \vdash \lnot P$ (pre)
   1. $P \vdash P$ (pre)
   1. $\lnot P, P \vdash Q$ (2, 3번에 $\lnot_{E}$)
   1. $Q \vdash Q$ (pre)
   1. $P \lor Q, \lnot P \vdash Q$ (1, 4, 5번에 $\lor_{E}$)
   1. $P \lor Q \vdash (\lnot P) \to Q$ (6번에서 $\lnot P$에 대해 $\to_{I}$)
   1. $\vdash (P \lor Q) \to ((\lnot P) \to Q)$ (7번에서 $P \lor Q$에 대해 $\to_{E}$)

   </details>

1. $\vdash \lnot (P \land (\lnot P))$  
   (모순율, Law of contradiction)
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \land (\lnot P) \vdash P \land (\lnot P)$ (pre)
   1. $P \land (\lnot P) \vdash P$ (1번에 $\land_{E1}$)
   1. $P \land (\lnot P) \vdash \lnot P$ (1번에 $\land_{E2}$)
   1. $\vdash \lnot (P \land (\lnot P))$ (2, 3번에 $\lnot_{I}$)

   </details>

1. $\vdash ((P \to Q) \to P) \to P$  
   (펄스의 법칙, Peirce law, 어려울 수 있음)
   <details class='answer'>
   <summary>답 보기</summary>

   1. $P \vdash P$ (pre)
   1. $\lnot P \vdash \lnot P$ (pre)
   1. $P, \lnot P \vdash Q$ (1, 2번에 $\lnot_{E}$)
   1. $\lnot P \vdash P \to Q$ (3번에서 $P$에 대해 $\to_{I}$)
   1. $(P \to Q) \to P \vdash (P \to Q) \to P$ (pre)
   1. $(P \to Q) \to P, \lnot P \vdash P$ (4, 5번에 $\to_{E}$)
   1. $(P \to Q) \to P \vdash \lnot (\lnot P)$ (2, 6번에 $\lnot_{I}$)
   1. $(P \to Q) \to P \vdash P$ (7번에 $\lnot\lnot_{E}$)
   1. $\vdash ((P \to Q) \to P) \to P$ (8번에서 $(P \to Q) \to P$에 대해 $\to_{E}$)

   </details>

1. $\vdash (P \to R) \to (((P \to Q) \to R) \to R)$ (어려울 수 있음)
   <details class='answer'>
   <summary>답 보기</summary>

   1. $(P \to Q) \to R \vdash (P \to Q) \to R$ (pre)
   1. $P \to R \vdash P \to R$ (pre)
   1. $P \vdash P$ (pre)
   1. $P \to R, P \vdash R$ (2, 3번에 $\to_{E}$)
   1. $\lnot R \vdash \lnot R$ (pre)
   1. $P \to R, \lnot R, P \vdash Q$ (4, 5번에 $\lnot_{E}$)
   1. $P \to R, \lnot R \vdash P \to Q$ (6번에서 $P$에 $\to_{I}$)
   1. $P \to R, (P \to Q) \to R, \lnot R \vdash R$ (1, 7번에 $\to_{E}$)
   1. $P \to R, (P \to Q) \to R \vdash \lnot (\lnot R)$ (5, 8번에 $\lnot_{I}$)
   1. $P \to R, (P \to Q) \to R \vdash R$ (9번에 $\lnot\lnot_{E}$)
   1. $P \to R \vdash ((P \to Q) \to R) \to R$ (10번에서 $(P \to Q) \to R$에 $\to_{I}$)
   1. $\vdash (P \to R) \to (((P \to Q) \to R) \to R)$ (11번에서 $P \to R$에 $\to_{I}$)

   </details>

1. $\vdash ((P \to Q) \to R) \to ((R \to P) \to (S \to P))$ (어려울 수 있음)
   <details class='answer'>
   <summary>답 보기</summary>

   1. $R \to P, S \vdash R \to P$ (pre)
   1. $(P \to Q) \to R \vdash (P \to Q) \to R$ (pre)
   1. $P \vdash P$ (pre)
   1. $\lnot P \vdash \lnot P$ (pre)
   1. $\lnot P, P \vdash Q$ (3, 4번에 $\lnot_{E}$)
   1. $\lnot P \vdash P \to Q$ (5번에서 $P$에 $\to_{I}$)
   1. $(P \to Q) \to R, \lnot P \vdash R$ (2, 6번에 $\to_{E}$)
   1. $(P \to Q) \to R, R \to P, S, \lnot P \vdash P$ (1, 7번에 $\to_{E}$)
   1. $\lnot P \vdash \lnot P$ (pre)
   1. $(P \to Q) \to R, R \to P, S \vdash \lnot (\lnot P)$ (8, 9번에 $\lnot_{I}$)
   1. $(P \to Q) \to R, R \to P, S \vdash P$ (10번에 $\lnot\lnot_{E}$)
   1. $(P \to Q) \to R, R \to P \vdash S \to P$ (11번에서 $S$에 $\to_{I}$)
   1. $(P \to Q) \to R \vdash (R \to P) \to (S \to P)$  
      (12번에서 $R \to P$에 $\to_{I}$)
   1. $\vdash ((P \to Q) \to R) \to ((R \to P) \to (S \to P))$  
      (13번에서 $(P \to Q) \to R$에 $\to_{I}$)

   </details>

1. $\vdash (P \to Q) \leftrightarrow ((\lnot P) \lor Q)$  
   ($\to$ 동등성, implication equivalence, 어려울 수 있음)
   <details class='answer'>
   <summary>답 보기</summary>

   $\vdash ((\lnot P) \lor Q) \to (P \to Q)$ 부분의 증명은 위 $\lor$ 삼단논법의 증명에 $\lnot\lnot_{E}$ 규칙 사용을 한 번 추가한 것일 뿐이므로 생략하도록 하겠다.
   1. $P \to Q \vdash P \to Q$ (pre)
   1. $\lnot P \vdash \lnot P$ (pre)
   1. $\lnot P \vdash (\lnot P) \lor Q$ (2번에 $\lor_{I1}$)
   1. $\lnot ((\lnot P) \lor Q), \lnot P \vdash \lnot ((\lnot P) \lor Q)$ (pre)
   1. $\lnot ((\lnot P) \lor Q) \vdash \lnot (\lnot P)$ (3, 4번에 $\lnot_{I}$)
   1. $\lnot ((\lnot P) \lor Q) \vdash P$ (5번에 $\lnot\lnot_{E}$)
   1. $P \to Q, \lnot ((\lnot P) \lor Q) \vdash Q$ (1, 6번에 $\to_{E}$)
   1. $P \to Q, \lnot ((\lnot P) \lor Q) \vdash (\lnot P) \lor Q$ (7번에 $\lor_{I2}$)
   1. $\lnot ((\lnot P) \lor Q) \vdash \lnot ((\lnot P) \lor Q)$ (pre)
   1. $P \to Q \vdash \lnot (\lnot ((\lnot P) \lor Q))$ (8, 9번에 $\lnot_{I}$)
   1. $P \to Q \vdash (\lnot P) \lor Q$ (10번에 $\lnot\lnot_{E}$)
   1. $\vdash (P \to Q) \to ((\lnot P) \lor Q)$  
      (11번에서 $P \to Q$에 대해 $\to_{I}$)

   </details>

### 단순하지만 난해한 논리 체계 : 얀 워카시에비치의 체계 {#jan-s-zeroth}

고전 자연 연역 체계는 5 개의 논리연산자($\leftrightarrow$, $\to$, $\land$, $\lor$, $\lnot$)와 0 개의 공리, 14 개의 추론 규칙으로 되어있다. 이보다 더 단순한 체계는 없을까? 다시 말해, 이보다 더 적은 수의 논리 연산자, 공리, 추론 규칙을 사용하는 체계는 없을까? 물론 0 개의 공리보다 더 적은 수의 공리를 사용하는 것은 불가능하지만, 5 개의 논리연산자나 14 개의 추론 규칙보다 더 적은 수의 논리연산자/추론 규칙을 사용하는 것은 가능하다. '얀 워카시에비치'('Jan Łukasiewicz')라는 논리학자(1878-1956)가 세운 오늘날에도 자주 언급되는 체계는 2 개의 논리 연산자, 3 개의 공리, 그리고 2 개의 추론 규칙만을 가지고 있다. 이 체계는 설명하기에는 단순하지만 이해하거나 증명에 사용하기에는 훨씬 어렵고, 논리 체계를 확장하기도 쉽지 않다. 이 논리 체계가 고전 자연 연역 체계와 얼마나 다른지 한번 살펴보도록 하자.

#### 얀 워카시에비치의 체계 : 논리 연산자 {#operators-of-jan-s-zeroth}

이 체계는 단 2개의 논리 연산자만을 가진다.

- $\lnot$ (&#x2026;가 아니다, Not)
- $\to$ (&#x2026;이면 &#x2026;, If)

왜 나머지 논리 연산자들은 버려두고 이 두 논리 연산자만을 가지고 있을까? 이유는 단순하다. 이 체계 안에서 우리는 나머지 연산자들을 모두 이 두 연산자들의 조합으로 정의할 것이기 때문이다.
다른 연산자들의 정의는 다음과 같다.

- $P \lor Q$는 $(\lnot P) \to Q$로 정의된다.
- $P \land Q$는 $\lnot (P \to (\lnot Q))$로 정의된다.
- $P \leftrightarrow Q$는 (위의 $\land$ 정의를 사용해서) $(P \to Q) \land (Q \to P)$로 정의된다.

위 정의에 의해 규정된 논리 연산자들은 고전 자연 연역 체계에서 사용되는 각각의 연산자와 똑같이 행동한다. 원한다면 위 정의들을 $\vdash (P \lor Q) \leftrightarrow ((\lnot P) \to Q)$와 같은 꼴의 논증으로 바꾸고, 고전 자연 연역 체계 안에서 증명해 볼 수도 있다. 이 증명을 시도해보길 원하는 독자들은 위 연습문제에서 비슷한 문제를 발견할지도 모른다. 각각의 논증 문제를 위 연습문제와 한번 비교해보기를 권한다.

#### 얀 워카시에비치의 체계 : 공리 {#axioms-of-jan-s-zeroth}

이번엔 이 체계의 공리에 대해 알아보자. 얀 워카시에비치는 다음과 같은 3개의 공리를 사용했다.

1. $P \to (Q \to P)$
2. $(P \to (Q \to R)) \to ((P \to Q) \to (P \to R))$
3. $((\lnot P) \to (\lnot Q)) \to (Q \to P)$

여기 나열된 공리들은 모두 고전 자연 연역 체계 안에서도 전제가 없는 건전한 논증을 통해 참임을 보일 수 있다. 다만, 여기서 주의할 점은 얀 워카시에비치의 체계 안에서는 위 세 명제는 참임을 보일 수 있는 대상이 아니라, 우리가 참이라고 받아들여야만 하는 대상이라는 것이다. 이들이 증명 가능한 것은 지금 이야기 하고 있는 것과는 **다른 체계**인 고전 자연 연역 체계에서의 이야기이다. 논리 체계가 달라지면 받아들이는 것이 달라진다는 점을 명심하기 바란다.

아래 예시에서는 위 공리를 각각 공리1, 공리2, 공리3이라고 부를 것이다.

#### 얀 워카시에비치의 체계 : 추론 규칙 {#inference-rules-of-jan-s-zeroth}

마지막으로 이 체계의 두 추론 규칙에 대해서 알아본 뒤, 몇몇 예시 논증의 건전함을 증명해보도록 하자. 간편하게도 이 두 추론 규칙은 모두 고전 자연 연역 체계에도 있는 규칙들이다.

- $pre$ 규칙
- $\to_{E}$ 규칙

이 두 규칙의 상세한 내용을 잊어버렸을 독자를 위하여 다음과 같이 이 두 규칙을 다시 작성해놓았다.

- $\begin{gathered}
   \hline
   \;\Gamma, P \vdash P\;
   \end{gathered}$

- $\begin{gathered}
   \;\Gamma \vdash P \to Q\; \;\; \;\Delta \vdash P\;\\
   \hline
   \;\Gamma, \Delta \vdash Q\;
   \end{gathered}$
   
#### 얀 워카시에비치의 체계 : 예시 {#examples-of-jan-s-zeroth}

우선 $\vdash P \to P$라는 논증이 건전함을 보여보자. 고전 자연 연역 체계에서는 간단하게 증명이 가능했지만, 이 체계에서는 그 증명이 간단하지만은 않다.

1. $\vdash (P \to ((Q \to P) \to P)) \to ((P \to (Q \to P)) \to (P \to P))$  
   (공리2)
1. $\vdash P \to ((Q \to P) \to P)$ (공리1)
1. $\vdash (P \to (Q \to P)) \to (P \to P)$ (1, 2번에 $\to_{E}$)
1. $\vdash P \to (Q \to P)$ (공리1)
1. $\vdash P \to P$ (3, 4번에 $\to_{E}$)

이 체계 내에서는 $\to_{I}$에 해당하는 추론 규칙이 없기 때문에 훨씬 비직관적인 방식으로 증명을 해야하는 것을 볼 수 있다. 다음 예시인 $\vdash (Q \to R) \to ((P \to Q) \to (P \to R))$의 증명에서도 똑같은 상황이 벌어짐을 확인할 수 있다.

1. $\vdash ((Q \to R) \to ((P \to (Q \to R)) \to ((P \to Q) \to (P \to R)))) \to (((Q \to R) \to (P \to (Q \to R))) \to ((Q \to R) \to ((P \to Q) \to (P \to R))))$  
   (공리2)
1. $\vdash ((P \to (Q \to R)) \to ((P \to Q) \to (P \to R))) \to ((Q \to R) \to ((P \to (Q \to R)) \to ((P \to Q) \to (P \to R))))$  
   (공리1)
1. $\vdash (P \to (Q \to R)) \to ((P \to Q) \to (P \to R))$ (공리2)
1. $\vdash (Q \to R) \to ((P \to (Q \to R)) \to ((P \to Q) \to (P \to R)))$  
   (2, 3번에 $\to_{E}$)
1. $\vdash ((Q \to R) \to (P \to (Q \to R))) \to ((Q \to R) \to ((P \to Q) \to (P \to R)))$  
   (1, 4번에 $\to_{E}$)
1. $\vdash (Q \to R) \to (P \to (Q \to R))$ (공리1)
1. $\vdash (Q \to R) \to ((P \to Q) \to (P \to R))$  
   (5, 6번에 $\to_{E}$)

#### 얀 워카시에비치의 체계 : 연습문제 {#arguments-for-jan-s-zeroth}

이 체계를 사용한 증명은 쉽지 않다. 따라서 아래의 연습문제를 꼭 풀어볼 필요는 없으며, 이 체계와 비교하여 고전 자연 연역 체계가 얼마나 직관적인지를 이해했다면 다음 절로 넘어가도 좋다.

1. $\vdash P \to (Q \to Q)$
1. $\vdash P \to (\lnot P \to Q)$ (어려움)
1. $\vdash P \to \lnot (\lnot P)$ (매우 어려움)  
   (Hint: 위 문제를 응용해보자)
1. $\vdash \lnot (\lnot P) \to P$  
   (Hint: 위 문제를 응용해보자)

### 강한 자료형 개발에 응용되는 논리 체계 : 구성적 자연 연역 체계 {#constructive-natural-deduction-of-zeroth}

이제 다시 자연 연역 체계로 돌아오자. 다만 이번에는 '**구성적** 자연 연역 체계'라고 불리는 체계에 대해서 알아볼 것이다. 이 체계는 강한 자료형 언어에서 핵심적인 역할을 하는 논리 체계이기도 하다. 이후의 '논리와 프로그래밍' 글에서 더 자세히 다루겠지만, 강한 자료형 언어에서의 프로그램은 구성적 자연 연역 체계에서의 증명에 대응되고, 강한 자료형 언어의 자료형은 구성적 자연 연역 체계에서의 명제에 대응된다. 이런 대응 관계 덕에 구성적 자연 연역 체계는 프로그래밍의 역사에서도 매우 중요한 체계로, 현대의 모든 강한 자료형 언어의 역사적 배경에는 구성적 자연 연역 체계가 있다고 해도 과언이 아니다.

그렇다면 왜 구성적 자연 연역 체계를 먼저 다루지 않고 고전 자연 연역 체계를 먼저 다루었을까? 구성적 자연 연역 체계가 고전 자연 연역 체계를 단순화하면 얻어지는 논리 체계이기 때문이다. 그러나 고전 자연 연역 체계를 더 자연스러운 것으로 받아들이는 사람들이 많기 때문에, 더 친숙한 소개를 위해 고전 자연 연역 체계를 먼저 다루었다. 이제 어떤 단순화를 가하여 구성적 자연 연역 체계를 만드는지, 그리고 이 단순화가 왜 중요한지에 대해 다루어보자.

#### 안녕히, 오래된 부정이여! : 부정 제거하기 - 1 {#removal-of-negation-in-natural-deduction-of-zeroth-1}

고전 자연 연역 체계를 소개할 때, 전제 규칙과 이중 $\lnot$ 제거를 제외한 규칙들은 모두 다음 둘 중 하나의 이름을 붙였었다.

-  "... 추가 규칙"
-  "... 제거 규칙"

더 나아가 $\lnot$와 $\leftrightarrow$를 제외하면 다른 연산자를 위한 규칙들은

- 추론 규칙의 위나 아래에 추가하거나 제거하려는 논리 연산자가 딱 한 번 등장한다
- 그 외의 논리 연산자는 등장하지 않는다

는 특징을 가진다. 이 특징들은 우리가 증명을 구성할 때 특히 유용하다. 논증의 결론이 특정한 논리 연산자를 가진다면, 건전함의 증명은 (전제에 이미 같은 꼴이 등장하지 않는 이상) 그 논리 연산자를 추가하는 규칙을 반드시 사용해야만 한다. 마찬가지로, 특정한 논리 연산자를 가진 전제의 부분을 증명에 사용하고 싶다면, 그 논리 연산자를 제거하는 규칙을 사용해야만 한다. 다른 말로는 우리가 논증의 건전함을 증명할 때, 그 **논증의 모양**이 무슨 규칙을 써야하는지 **직관적으로 안내**해주고 있다는 것이다. 물론 앞서 말했듯 이 **안내**에는 세 문제가 있다.

1. $\leftrightarrow$ 추가/제거 규칙
2. $\lnot$ 추가/제거 규칙
3. 이중 $\lnot$ 제거 규칙

이들을 차례로 살펴보자. $\leftrightarrow$의 문제는 사실 해결이 간단하다. 위의 얀 워카시에비치의 체계에서 다루었던 것처럼, $\leftrightarrow$과 관련된 것들을 추론 규칙에서 없애버리고 $P \leftrightarrow Q$를 $(P \to Q) \land (Q \to P)$로 정의하면 되기 때문이다. 더 심각한 것은 그 뒤의 두 문제이다.

#### 안녕히, 오래된 부정이여! : 부정 제거하기 - 2 {#removal-of-negation-in-natural-deduction-of-zeroth-2}

$\lnot$을 제거하기 위해 다음의 새 논리 연산자/단위식을 도입하자.

- $\bot$ (거짓, Falsehood, Bottom)

이 논리 연산자는 무슨 역할을 할 수 있을까? 우선 "$\bot$ 추가 규칙"이라고 불릴만한 규칙을 만드는 것은 불가능하다는 걸 알 수 있다. 다른 연산자를 사용하지 않고 항상 거짓을 증명하는 건 불가능해야하기 때문이다. (애초에 우리는 거짓을 증명할 수 있는 논리 체계를 원하지 않는다.) 그렇다면 "$\bot$ 제거 규칙"(혹은 "$\bot_{E}$ 규칙")이라고 불릴만한 것은 어떨까?

- $\begin{gathered}
   \;\Gamma \vdash \bot\;\\
   \hline
   \;\Gamma \vdash P\;
   \end{gathered}$

즉, $\Gamma$를 전제로 $\bot$가 따라나온다면, 그 $\Gamma$를 전제로 임의의 논리식 $P$가 따라나온다는 것이다. 혹자는 다시 "아니, 거짓을 증명할 수 있다고 하면 왜 아무거나 증명할 수 있다는 거야?"라고 말할지 모르겠다. 그러나 이는 우리가 이미 $\lnot$ 제거 규칙에서 보았던 현상임을 기억하자. 우리가 만약 $\lnot P$와 $P$를 결론으로 가지는 논증을 모두 가지고 있다면, 우리는 그 둘로부터 아무 논리식 $Q$를 결론으로 가지는 논증을 만들어낼 수 있다.

그러면 $\bot$이 왜 $\lnot$을 제거하는데 유용한가? 바로 $\bot$과 $\to$를 사용해서 $\lnot$을 정의할 수 있기 때문이다. $\lnot P$는 $P \to \bot$으로 정의한다. 즉, "P가 아니다"는 표현의 의미는 "P이면 거짓이다"라는 표현의 의미와 같다.

#### 부정 제거 연습문제 - 2 {#removal-of-negation-in-natural-deduction-of-zeroth-problems-2}

1. $\lnot P$를 $P \to \bot$로 정의하더라도 이전과 같은 추가 규칙을 유도할 수 있음을 보이자. 즉, $\Gamma, P \vdash Q$와 $\Delta, P \vdash \lnot Q$라는 두 논증을 가지고 있을때, $\lnot$의 정의와 $\to$, $\bot$ 추가/제거 규칙으로부터 $\Gamma, \Delta \vdash \lnot P$를 추론해내 보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $\Gamma, P \vdash Q$ (주어진 논증)
   1. $\Delta, P \vdash \lnot Q$ (주어진 논증)
   1. $\Delta, P \vdash Q \to \bot$ ($\lnot$의 정의)
   1. $\Gamma, \Delta, P \vdash \bot$ (1, 3번에 $\to_{E}$)
   1. $\Gamma, \Delta \vdash P \to \bot$ (4번에서 $P$에 대해 $\to_{I}$)
   1. $\Gamma, \Delta \vdash \lnot P$ ($\lnot$의 정의)

   </details>
1. $\lnot P$를 $P \to \bot$로 정의하더라도 이전과 같은 제거 규칙을 유도할 수 있음을 보이자. 즉, $\Gamma \vdash P$와 $\Delta \vdash \lnot P$라는 두 논증을 가지고 있을때, $\lnot$의 정의와 $\to$, $\bot$ 추가/제거 규칙으로부터 $\Gamma, \Delta \vdash Q$를 추론해내 보자.
   <details class='answer'>
   <summary>답 보기</summary>

   1. $\Gamma \vdash P$ (주어진 논증)
   1. $\Delta \vdash \lnot P$ (주어진 논증)
   1. $\Delta \vdash P \to \bot$ ($\lnot$의 정의)
   1. $\Gamma, \Delta \vdash \bot$ (1, 3번에 $\to_{E}$)
   1. $\Gamma, \Delta \vdash Q$ (4번에서 $Q$에 대해 $\bot_{E}$)

   </details>

#### 안녕히, 오래된 부정이여! : 부정 제거하기 - 3 {#removal-of-negation-in-natural-deduction-of-zeroth-3}

그렇다면 이중 $\lnot$ 제거 규칙은 어떻게 다루어야 **논증의 구조로부터 건전성 증명을 직관적으로 안내받는** 상황을 만들 수 있을까? 안타깝게도, 이중 $\lnot$ 제거 규칙은 이 구조에 잘 들어맞지 않는다. $\lnot$ 연산자 자체가 일으킨 문제와는 다르게, 이중 $\lnot$ 제거 규칙이 가지고 있는 문제는 훨씬 근본적인 문제이기 때문이다. 이 문제 혹은 특징이 바로 "고전 자연 연역 체계"라는 이름에서 "고전"이 나타내는 것이다. "고전성"이라고 부르는 이 특징은 이중 $\lnot$ 제거 규칙과 동등한 다음 공리로 살펴보는 것이 더 좋다.

- $\begin{gathered}
   \hline
   \;\Gamma \vdash P \lor (P \to \bot)\;
   \end{gathered}$
 
즉, 모든 논리식 $P$는 참이거나 거짓임(배중률)이 증명 가능하다는 것이다. 우리는 일상적으로 배중률을 받아들이지만, 어떤 조건을 체계로부터는 증명도 반증도 불가능한 문장들이 존재한다는 것이 괴델(Kurt Gödel)이래 수학적으로 알려져있다. 다른 말로는 우리의 일상적 관념과는 다르게 배중률은 절대적으로 받아들어야하는 진리가 아니라는 것이다. 이런 수학적 사실에 기초하여 배중률 및 그와 동등한 법칙들을 거부하는 논리의 사조가 여럿 존재하고, 그 사조 중 하나가 바로 **구성주의**(*Constructivism*)이다. 흥미롭게도, 이 구성주의야말로 개발과 굉장히 긴밀한 연관을 가지는 사조이다. 이후 건전성 증명과 프로그램(Program)의 연관성을 다룰 때 구성주의적 증명과 고전적 증명의 차이에 대해서 좀 더 자세히 다룰 것이다.

이로서 세 문제를 모두 해결 혹은 제거하였다. 이것으로 얻어지는 체계가 바로 구성적 자연 연역 체계이다. 논리 연산자로는 $\bot$, $\to$, $\land$, $\lor$를 가지며, $pre$ 규칙을 제외한 모든 규칙은 추가/제거 규칙 중 하나이고, 어떤 연산자의 추가 규칙은 규칙으로부터 그 연산자를 딱 하나 추가할 수 있고, 제거 규칙은 그 연산자를 딱 하나 제거할 수 있다. 또한 각 규칙은 대상이 되는 논리 연산자 외에는 어떤 다른 논리 연산자도 쓰지 않는다. 그러면 이 체계와 더 친숙해지기 위해 다음의 연습문제를 풀어보자.

#### 부정 제거 연습문제 - 3 {#removal-of-negation-in-natural-deduction-of-zeroth-problems-3}

1. $\vdash ((P \to Q) \to P) \to P$ (펄스의 법칙)의 건전성을 구성적 자연 연역 체계에서 증명할 수 있는가? 증명할 수 없다면 어디에서 문제가 발생하는가?
   <details class='answer'>
   <summary>답 보기</summary>

   증명할 수 없다. 다음의 미완성 증명을 보자.
   1. $P, (P \to Q) \to P \vdash Q$ (추론이 안 됨)
   1. $(P \to Q) \to P \vdash P \to Q$ (1번에서 $P$에 대해 $\to_{I}$)
   1. $(P \to Q) \to P \vdash (P \to Q) \to P$ (pre)
   1. $(P \to Q) \to P \vdash P$ (2, 3번에 $\to_{E}$)
   1. $\vdash ((P \to Q) \to P) \to P$ (4번에서 $(P \to Q) \to P$에 대해 $\to_{I}$)
   
   구성적으로 1.을 정당화할 수 있는 방법은 존재하지 않는다. 다른 말로는 구성적으로는 위의 1.을 이끌어낼만한 더 당연한 사실을 찾을 수 없기 때문이다.

   </details>
1. $P \lor (P \to \bot) \vdash ((P \to Q) \to P) \to P$ (펄스의 법칙)의 건전성을 구성적 자연 연역 체계에서 증명할 수 있는가? 증명할 수 없다면 어디에서 문제가 발생하는가? (어려움)
   <details class='answer'>
   <summary>답 보기</summary>

   증명할 수 있다.
   1. $P \vdash P$ (pre)
   1. $P \to \bot \vdash P \to \bot$ (pre)
   1. $P \to \bot, P \vdash \bot$ (1, 2번에 $\to_{E}$)
   1. $P \to \bot, P \vdash Q$ (3번에서 $Q$에 대해 $\bot_{E}$)
   1. $P \to \bot \vdash P \to Q$ (4번에서 $P$에 대해 $\to_{I}$)
   1. $(P \to Q) \to P \vdash (P \to Q) \to P$ (pre)
   1. $(P \to Q) \to P, P \to \bot \vdash P$ (5, 6번에 $ \to_{E}$)
   1. $P \lor (P \to \bot) \vdash P \lor (P \to \bot)$ (pre)
   1. $P \lor (P \to \bot), (P \to Q) \to P \vdash P$ (1, 7, 8번에 $\lor_{E}$)
   1. $P \lor (P \to \bot) \vdash ((P \to Q) \to P) \to P$ (9번에서 $(P \to Q) \to P$에 대해 $\to_{I}$)

   </details>

#### 약간의 역사 : 겐첸, 자연 연역 체계의 고안자 {#history-and-founder-of-natural-deduction}

우리가 다룬 두 자연 연역 체계, 즉 고전 자연 연역 체계와 구성적 자연 연역 체계는 모두 한 사람이 고안한 체계이다. 이 위대한 발명자의 이름은 게르하르트 겐첸으로, 자연 연역 체계를 포함해 논리 체계 자체와 체계의 성질에 대해 많은 기여를 한 독일의 논리학자이다.

## 세번째 글을 마치며 {#epilogue}
