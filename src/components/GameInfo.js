import React from 'react'
import PropTypes from 'prop-types'

const GameInfo = ({ current, history, setCurrent, winner }) => {
  const { player } = history[current]

  return (
    <div style={{ marginLeft: '20px' }}>
      {winner ? (
        <div>Winner : {winner.toUpperCase()}</div>
      ) : (
        <div>Next Player : {player.toUpperCase()}</div>
      )}
      <ol>
        {history.map((_, i) =>
          i === 0 ? (
            <li>
              <button onClick={() => setCurrent(i)}>Go to game start</button>
            </li>
          ) : (
            <li>
              <button onClick={() => setCurrent(i)}>Go to move #{i}</button>
            </li>
          )
        )}
      </ol>
    </div>
  )
}

GameInfo.propTypes = {
  current: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
  winner: PropTypes.string.isRequired
}

export default GameInfo
