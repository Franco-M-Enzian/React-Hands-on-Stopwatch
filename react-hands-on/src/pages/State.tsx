import React, { useState } from 'react'
import styled from 'styled-components'

// アロー関数
const State = () => {
  // useState()は、Reactにある標準の関数 初期値を指定
  // countに対して数値が変更されるsetCount関数を指定
  const [count, setCount] = useState(0)

  const MarginTopBox = styled.div`
    margin-top: 24%;
  `
  return (
    <MarginTopBox>
      <p>You clicked {count} times</p>
      {/* ボタンをクリックすると、setCount関数が実行され、countが1カウントされる */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </MarginTopBox>
  )
}

export default State
