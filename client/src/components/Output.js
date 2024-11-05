import "../App.css"
import { useEffect } from "react"

const Output = ({data})=>{
    useEffect(()=>{
        console.log(data)
    },[data])
    return(
        <>
        <fieldset>
            <legend>Output</legend>
                <div className="Output">
                    <div dangerouslySetInnerHTML={{__html:data}}></div>
                </div>
            </fieldset>
        </>
    )
}

export default Output