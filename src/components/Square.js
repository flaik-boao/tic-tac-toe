/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

const Square = ({ player, play }) => (
  <button
    onClick={play}
    css={css`
      width: 50px;
      height: 50px;
      font-size: 24px;
      line-height: 50px;
      float: left;
      border: 1px #e2e2e2 solid;
      display: inline-block;
      margin-right: -1px;
      margin-top: -1px;
      padding: 0;
      text-align: center;
      &:focus {
        outline: none;
      }
    `}>
    {player || ' '}
  </button>
)

Square.propTypes = {
  player: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired
}

export default Square
