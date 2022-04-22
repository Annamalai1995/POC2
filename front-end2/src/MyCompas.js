import { useParams } from "react-router-dom"

export const Agaram=()=>{
    return(
        <>
            <h1>Happiness Depends upon ourselves</h1>

        </>
    )
}
export const Thenali=()=>{
    const{gopi}=useParams()
    return(
        <>
            <h1>Happiness Overloaded{gopi}</h1>

        </>
    )
}
export const Vikram=()=>{
    return(
        <>
            <h1>Happiness</h1>

        </>
    )
}