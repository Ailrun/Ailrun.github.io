---
title: 프로그래머를 위한 논리학 - 2
date: 2020-06-01T02:30:16-05:00
---

## 세번째 글을 열면서 {#prologue}

[지난 글](/ko/post/logic-for-programmers-001/)에서는 공리와 추론 규칙에 대해 알아보고, 그 중 '고전 자연 연역 체계'라고 불리는 공리와 추론 규칙의 모음에 대해 설명하고 사용해 보았다. 이번 글은 고전 자연 연역 체계를 더 써보고 싶은 독자들을 위한 약간의 퍼즐들로 시작해, 이번 글에서 소개한다고 약속했던 난해한 논리 체계 두 개를 다뤄볼 것이다. 이 중 '구성적 자연 연역 체계'라고 불리는 체계는 강한 자료형 개발에 응용되는 중요한 개념을 포함하고있는 논리 체계이다. 이 개념 역시 이 글에서 간략한 소개를 할 것이나, 이 개념에 대한 자세한 설명은 논리학에 대한 더 많은 지식을 필요로 하기 때문에, 보다 구체적인 설명은 이후의 글로 넘기도록 하겠다.

## 연작의 목차 {#table-of-contents}

- 이전 글
   - [프로그래머를 위한 논리학 - 0](/ko/post/logic-for-programmers-000/)
   - [프로그래머를 위한 논리학 - 1](/ko/post/logic-for-programmers-001/)
- 이 글
   - [세번째 글을 열면서](./#prologue)
   - [명제 논리(영차 논리) 심화 - 1](./#zeroth-advance-1)
      - [퍼즐 맞춰보기 : 고전 자연 연역 체계로 건전함을 증명할 수 있는 논증들](./#more-arguments-for-0th-classical-natural-deduction)
      - [단순하지만 난해한 논리 체계 : 얀 워카시에비치의 체계](./#jan-s-zeroth-system)
      - [강한 자료형 개발에 응용되는 논리 체계 : 구성적 자연 연역 체계](./#constructive-natural-deduction-of-zeroth)
   - [세번째 글을 마치며](./#epilogue)
- 다음 글
   - [작성중&#x2026;] 명제 논리(영차 논리) 심화 - 2
   - 술어 논리(일차 논리) 기초
   - 술어 논리(일차 논리) 심화
   - 고차 논리 기초
   - 양상 논리 기초
   - 미정&#x2026;

## 명제 논리(영차 논리) 심화 - 1 {#zeroth-advance-1}

### 퍼즐 맞춰보기 : 고전 자연 연역 체계로 건전함을 증명할 수 있는 논증들 {#more-arguments-for-0th-classical-natural-deduction}

이전 장의 연습 문제만으로는 성에 차지 않는 몇몇 독자들을 위해 더 많은 (고전 자연 연역 체계로 건전성 증명이 가능한) 논증들을 준비해 보았다. 이전의 연습 문제로도 충분하고도 남았던 독자들은 [다음 절](./#more-arguments-for-0th-classical-natural-deduction)부터 읽기 바란다.

### 단순하지만 난해한 논리 체계 : 얀 워카시에비치의 체계 {#jan-s-zeroth-system}

고전 자연 연역 체계는 5 개의 논리연산자($\leftrightarrow$, $\to$, $\land$, $\lor$, $\lnot$)와 0 개의 공리, 14 개의 추론 규칙으로 되어있다. 이보다 더 단순한 체계는 없을까? 다시 말해, 이보다 더 적은 수의 논리 연산자, 공리, 추론 규칙을 사용하는 체계는 없을까? 물론 0 개의 공리보다 더 적은 수의 공리를 사용하는 것은 불가능하지만, 5 개의 논리연산자나 14 개의 추론 규칙보다 더 적은 수의 논리연산자/추론 규칙을 사용하는 것은 가능하다. '얀 워카시에비치'라는 논리학자(1878-1956)가 세운 오늘날에도 자주 언급되는 체계는 2 개의 논리 연산자, 3 개의 공리, 그리고 2 개의 추론 규칙만을 가지고 있다. 이 체계는 설명하기에는 단순하지만 이해하거나 증명에 사용하기에는 훨씬 어렵기 때문에

### 강한 자료형 개발에 응용되는 논리 체계 : 구성적 자연 연역 체계 {#constructive-natural-deduction-of-zeroth}

## 세번째 글을 마치며 {#epilogue}