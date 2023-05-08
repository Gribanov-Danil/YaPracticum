import { FC } from "react"
import { NavBar } from "../nav-bar/nav-bar"
import "./header.css"

export const AppHeader: FC = () => {
  return (
    <header id="pageHeader" className="header">
      <NavBar />
    </header>
  )
}
