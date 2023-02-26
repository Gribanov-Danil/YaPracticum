import styles from "./emptyClosingBun.module.css"
import PropTypes from "prop-types";

export const EmptyClosingBun = ({text}) => {
    return (
        <div className={`ml-8 ${styles.no_bottom_bun}`}>
            {text}
        </div>
    )
}

EmptyClosingBun.propTypes = {
    text: PropTypes.string.isRequired,
}