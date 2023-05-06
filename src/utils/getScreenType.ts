export const ScreenType = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
} as const

export type TScreenType = (typeof ScreenType)[keyof typeof ScreenType]

/**
 * Функция, возвращающая типа экрана
 */
export const getScreenType = () =>
  window.innerWidth >= 1280 ? ScreenType.DESKTOP : ScreenType.MOBILE
