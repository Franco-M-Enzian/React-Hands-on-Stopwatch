import React, { useState } from 'react'
import styled from 'styled-components'


const StopWatch = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const MarginTopBox = styled.div`
    margin-top: 24%;
    color: blue;
  `

const handleStart = () => {
  if (timerId) return
  const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10)
  setTimerId(id)
}

const handleStop = () => {
  if (timerId) clearInterval(timerId)
    setTimerId(null)
}

const handleReset = () => {
  setTime(0)
  if (timerId) clearInterval(timerId)
    setTimerId(null)
}

  return (
    <div>
      <MarginTopBox>{(time / 1000).toFixed(1)} s</MarginTopBox>
      <div>
        <button onClick={handleStart}>Start</button>
      </div>
      <div>
        <button onClick={handleStop}>Stop</button>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}


export default StopWatch