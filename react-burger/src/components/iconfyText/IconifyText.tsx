import { FC, ReactElement } from "react"

interface IIconifyText {
  text: string
  textClass: string
  iconLocation: "right" | "left"
  gapInPx: number
  icon: ReactElement
}

export const IconifyText: FC<IIconifyText> = ({ text, textClass, iconLocation, gapInPx, icon }) => {
  let outputComponent
  const textBlock = <p className={`text ${textClass}`}>{text}</p>
  if (iconLocation === "right")
    outputComponent = (
      <div style={{ display: "flex", gap: gapInPx, alignItems: "center" }}>
        {textBlock}
        {icon}
      </div>
    )
  else
    outputComponent = (
      <div style={{ display: "flex", gap: gapInPx, alignItems: "center" }}>
        {icon}
        {textBlock}
      </div>
    )
  return <>{outputComponent}</>
}
