import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ position: "absolute", top: 50, right: 50 }}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'green',
}

export default Button
