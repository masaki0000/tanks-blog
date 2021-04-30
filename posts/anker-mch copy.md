---
title: "[Next.js] imageコンポーネントを親要素のサイズに合わせる方法"
date: '2021-04-25'
category: 'program'
image: ''
---

## imageコンポーネントを親要素のサイズに合わせる

1. 親要素にサイズを設定する。<br/>
2. Next.jsのnext/imageコンポーネント の[layout](https://y-hiroyuki.xyz/next-js/use-image-components#sec1-4)プロパティをfillにする。<br/>

また、[objectFit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)プロパティをcontainにすることで、縦横比を維持したまま拡大できる。<br/>


<details><summary>コーディング例</summary>
<div>

~~~
<Image 
  src={"xxxx"}
  layout="fill"
  objectFit='contain'
/> 
~~~

</div></details>

**のだが**、何故かこれが正しく反映されない

## 解決方法

親要素にposition: "relative" を設定する。

[参考サイト](https://github.com/vercel/next.js/discussions/18739)


## おわりに

解決はしたもの、なぜこれをしないと動作しないのかが分かりませんでした。<br/>
仕様なのか、不具合なのか...<br/>
公式ドキュメントにすら記載されておらず、運よく上記のサイト見つけられたので、助かりました。




