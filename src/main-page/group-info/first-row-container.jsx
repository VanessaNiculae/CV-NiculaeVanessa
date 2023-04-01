export const FirstRowContainer = ({children}) => {
    return(
        <div className={"container"}>
            <div className={'row'}>
                {children}
            </div>
         </div>
    )
}