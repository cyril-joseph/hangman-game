// import { useEffect } from "react"

export default function Button(props) {
    const { text, type, onClick, ...rest } = props
    const handleClick = (e) => {
        e.preventDefault()
        onClick && onClick(e)
    }
    // const keyPress = (e) => {
    //     console.log(e)
    // }
    // useEffect(() => {
    //     document.addEventListener('keydown', keyPress) 
    //     return () => document.removeEventListener('keydown',keyPress)
    // },[])
    return (
        <button {...rest} onClick={handleClick}>{text}</button>
    )
}