import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'

const styles = {
  row: { clear: 'both', content: '', display: 'table' }
}
function Board({ board, play }) {
  return (
    <div>
      <div style={styles.row}>
        <Square player={board[0]} play={() => play(0)} />
        <Square player={board[1]} play={() => play(1)} />
        <Square player={board[2]} play={() => play(2)} />
      </div>
      <div style={styles.row}>
        <Square player={board[3]} play={() => play(3)} />
        <Square player={board[4]} play={() => play(4)} />
        <Square player={board[5]} play={() => play(5)} />
      </div>
      <div style={styles.row}>
        <Square player={board[6]} play={() => play(6)} />
        <Square player={board[7]} play={() => play(7)} />
        <Square player={board[8]} play={() => play(8)} />
      </div>
    </div>
  )
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.object).isRequired,
  play: PropTypes.func.isRequired
}

export default Board
