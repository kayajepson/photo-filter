import PropTypes from 'prop-types'

function Button({className = '', ...props}) {
  return (
    <button
      className={`button-link ${className}`}
      data-testid="button"
      {...props}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string,
}

export default Button