---
title: 'markdownのhtml変換：コード挿入時の自動改行'
date: '2021-04-26'
category: 'program'
---

## 症状

Remarkを利用してmarkdownをhtml変換したとき、code表示の部分が文字列の折り返しをせず、親要素からはみ出てしまう。<br/>

#### markdown形式のCode表示

バッククオート(`)３つ、もしくはチルダ(~)３つで文字列を囲む

## 原因と解決法

### 原因

Code表示をhtml変換する際、文字列がcodeタグで囲われ、さらにpreタグで囲われている為<br/>
※preタグはcssプロパティ「white-space」が「pre」となっている為折り返しされない。<br/>

### 解決法

cssプロパティ「white-space」を「pre-wrap」に設定する

~~~
white-space: pre-wrap;
~~~



