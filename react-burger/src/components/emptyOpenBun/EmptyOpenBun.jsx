import styles from "./emptyOpenBun.module.css"
import PropTypes from "prop-types";

export const EmptyOpenBun = ({text}) => {
    return (
            <div className={`ml-8 ${styles.no_top_bun}`}>
                {text}
            </div>
    )
}

EmptyOpenBun.propTypes = {
    text: PropTypes.string.isRequired,
}