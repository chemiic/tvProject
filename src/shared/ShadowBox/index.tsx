
export const ShadowBox = ({children}) => {
    return (
        <div className={'bg-[#00000020] p-[20px] rounded-[20px]'}>
            {children}
        </div>
    )
}