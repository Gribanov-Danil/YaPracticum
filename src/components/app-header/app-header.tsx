import { FC } from "react"
import { NavBar } from "../nav-bar/nav-bar"
import "./header.css"

/**
 * Главная шапка сайта
 */
export const AppHeader: FC = () => {
  return (
    <header id="pageHeader" className="header">
      <NavBar />
    </header>
  )
}
