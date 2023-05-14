export const ScreenType = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
} as const

/**
 * Функция, возвращающая типа экрана
 *
 * @return {ScreenType} Тип экрана ScreenType
 */
export const getScreenType = () =>
  window.innerWidth >= 1280 ? ScreenType.DESKTOP : ScreenType.MOBILE
