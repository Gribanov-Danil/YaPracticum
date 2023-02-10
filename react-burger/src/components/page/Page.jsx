import pageStyle from "./page.module.css"
export const Page = ({children}) => {
    return (
        <div className={pageStyle.page}>
            {children}
        </div>
    )
}