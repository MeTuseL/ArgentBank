import styles from './styles/fieldError.module.scss'
import PropTypes from 'prop-types'

/**
 * This component renders an error message for a typical form field.
 *
 * @category Components
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.message - Personalized error message for the form field.
 * @returns  { JSX.Element } A React element that renders an error message for a typical form field.
 */
function FieldError(props) {
    const { message } = props
    let isActive = ''
    message === undefined ? (isActive = 'none') : (isActive = 'block')

    return (
        <span className={styles.messageError} style={{ display: isActive }}>
            {`${message}`}
        </span>
    )
}
FieldError.propTypes = {
    /**
     * Personalized error message for form field
     */
    message: PropTypes.string,
}
export default FieldError
