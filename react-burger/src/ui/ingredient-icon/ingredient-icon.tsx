import clsx from "clsx"
import { FC, ReactNode } from "react"
import styles from "./ingredient-icon-styles.module.css"

interface IngredientIconProps {
  srcSet: string
  src: string
  alt?: string
  extraClass?: string
  children?: ReactNode
}

export const IngredientIcon: FC<IngredientIconProps> = ({
  srcSet,
  src,
  alt = "ingredient",
  extraClass,
  children,
}) => {
  return (
    <div className={clsx(styles.container, extraClass, styles.items_picture)}>
      <div>
        <picture className={styles.picture}>
          <source srcSet={srcSet} />
          <img src={src} alt={alt} width="112" height="56" />
        </picture>
        {children}
      </div>
    </div>
  )
}
