---
title: '文字列中の改行コードが反映されない時の対処法'
date: '2021-04-26'
category: 'program'
# image: 'shell.png'
---

## 症状

JSXでに改行コードの含まれた文字列が入った変数の内容を表示させたところ、改行コードが反映されなかった。

## 対処

該当要素のCSSプロパティ「white-space」に「pre-wrap」を設定する

~~~
white-space: pre-wrap;
~~~

