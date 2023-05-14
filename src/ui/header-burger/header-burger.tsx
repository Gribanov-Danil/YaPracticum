import styles from "./header-burger.module.css"
export const HeaderBurger = () => {
  return (
    <button className={`burger ${styles.header__burger} btn__reset header__item`}>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
    </button>
  )
}