export const ScreenType = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
} as const

/**
 * Функция, возвращающая типа экрана
 */
export const getScreenType = () =>
  window.innerWidth >= 1280 ? ScreenType.DESKTOP : ScreenType.MOBILE
