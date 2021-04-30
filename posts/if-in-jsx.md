---
title: 'JSXでIF文を記述する'
date: '2021-04-21'
category: 'program'
# image: 'shell.png'
---

## 症状

ReactのJSX内に、IF文を直接記述することができなかった

## 対処

そのまま記述する子はできないので、無名関数を利用して記述する

### 例

~~~
  // Arrow関数の場合
  (() => {
    if (条件式) {
      return( 返り値 )
    } else {
      return ( 返り値 )
    }
  })()

  // functionキーワードの場合
  !function() {
    if (条件式) {
      return( 返り値 )
    } else {
      return ( 返り値 )
    }
  }()
~~~

