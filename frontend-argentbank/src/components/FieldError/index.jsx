import styles from './styles/fieldError.module.scss'

function FieldError(props) {
    const { message } = props
    let isActive = ''
    message === undefined ? (isActive = 'none') : (isActive = 'block')

    return (
        <>
            <span className={styles.messageError} style={{ display: isActive }}>
                {`${message}`}
            </span>
        </>
    )
}
export default FieldError
