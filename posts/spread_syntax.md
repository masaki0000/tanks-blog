---
title: 'JSの「...hoge」とは'
date: '2021-04-18'
category: 'program'
# image: 'shell.png'
---

## 作成した理由

Next.js公式チュートリアルで使われていた「...hoge」
という表記を初めて見たので確実に覚える為、まとめました。

#### 該当部分
next.js公式チュートリアルの getPostDataメソッド内での表記<br>
[該当ページリンク](https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops)<br>



## ...hoge すなわち スプレッド構文

スプレッド構文は配列・オブジェクトを展開するための構文。<br/>
短いコードで利用できる。<br>

## 使用例
#### 配列

~~~
// 配列の宣言
const array1 = [9, 8, 7];

// 配列の複製
const array2 = [...array1]; // => [9, 8, 7]

// 配列の要素を追加して生成
// 配列同士の結合も可
const array3 = [...array2, 6, 5]; // => [9, 8, 7, 6, 5]
~~~

#### オブジェクト

~~~
// オブジェクト型定数の宣言
const obj1 = { a: 1, b: 2 };

// オブジェクト型の複製
const obj2 = { ...obj1 }; // => { a: 1, b: 2 }

// プロパティを追加して生成<
// 同じプロパティを書けば置き換えも可
// オブジェクト型同士の結合も可
const obj3 = { ...obj1, c: 3 }; // => { a: 1, b: 2, c: 3 }
~~~
