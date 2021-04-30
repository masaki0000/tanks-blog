---
title: '[Next.js]Link利用時の警告の対処'
date: '2021-04-20'
category: 'program'
# image: 'shell.png'
---

## 症状

Next.jsで、Linkコンポーネントを利用する際にエラー(警告)が出る。
動作に問題は起きず、エディタ(VScode)にもエラー表記がでないので、原因特定が難しかった。

### エラー内容
~~~
Warning: Function components cannot be given refs. 
Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
~~~


## 直接原因(エラー再現)
Linkコンポーネント内に、next/imageコンポーネントやカスタムコンポーネントを直接配置するとエラーが出る

<details><summary>警告再現コード</summary>
<div>

```
// 例1

// リンクコンポーネント
<Link href="/href">
  // カスタムコンポーネント
  <CustomMenu
    name="***"
    color="***"
  >
    menuText
  </CustomMenu>
</Link>

// 例2
<Link href="/href">
  // Next.js標準のImageコンポーネント
  <Image
    src={'***'}
    height={**}
    width={**}
    alt="***"
  />
</Link>
```

</div></details>

## 対処法

- forwardRef を利用する

- next/imageコンポーネントやカスタムコンポーネントをdivタグや、<br>空タグ(<> ~ </>)で覆う<br>
※但しこの方法は、簡単に対処できる代わりに、カスタムコンポーネントにClickイベントが渡せなくなる

[参考ページリンク](https://github.com/vercel/next.js/issues/7915)<br>


## 原因

Linkは仕様として、refを渡すようになっているらしく、refをカスタムコンポーネントに渡してしまっている為


