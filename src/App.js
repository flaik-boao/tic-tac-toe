import React, { useState, useEffect } from 'react'
import Board from './components/Board'
import GameInfo from './components/GameInfo'
import './App.css'

function App() {
  const [history, setHistory] = useState([
    {
      player: 'X',
      board: Array(9).fill()
    }
  ])
  const [current, setCurrent] = useState(0)
  const [winner, setWinner] = useState(null)

  const play = g => {
    if (history.slice(0, current + 1).pop().board[g] || winner) return

    setHistory(history => {
      const { player, board } = history.slice(0, current + 1).pop()
      return history.slice(0, current + 1).concat({
        player: player === 'X' ? 'O' : 'X',
        board: board.map((grid, index) => {
          if (g === index) return player
          else return grid
        })
      })
    })
    setCurrent(current => current + 1)
  }

  const { board } = history[current]

  useEffect(() => {
    setWinner(calculateWinner(board))
  }, [winner, board])

  return (
    <div className='App'>
      <Board board={board} play={play} />
      <GameInfo history={history} setCurrent={setCurrent} current={current} winner={winner} />
    </div>
  )
}

const calculateWinner = board => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export default App
