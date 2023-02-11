import PropTypes from "prop-types";

export const IconfyText = ({text, textClass, iconLocation,gapInPx, icon}) => {
    let outputComponent
    const textBlock =  <p className={`text ${textClass}`}>{text}</p>
    if (iconLocation === "right")
        outputComponent =
            <div style={{display:"flex", gap:gapInPx, alignItems: "center"}}>
                {textBlock}
                {icon}
            </div>
    else
        outputComponent =
            <div style={{display:"flex", gap:gapInPx, alignItems: "center"}}>
                {icon}
                {textBlock}
            </div>
  return (
      <>
          {outputComponent}
      </>
  )
}

IconfyText.propTypes = {
    text: PropTypes.string.isRequired,
    textClass: PropTypes.string.isRequired,
    iconLocation: PropTypes.string.isRequired,
    gapInPx: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired
}