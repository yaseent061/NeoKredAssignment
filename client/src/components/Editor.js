import "../App.css"
import axios from "axios"

const Editor = ({fieldData,handleDataChange})=>{

    function debounce(func, delay) {
        let timeoutId;
    
        return function(...args) {
            const context = this;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    const debouncedApiCall = debounce(async (value) => {
        try {
            const payload = { data: value };
            const response = await axios.post('http://localhost:5000', payload);
            handleDataChange(response.data);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    }, 800);

    const handleCodeChange=(e)=>{
        debouncedApiCall(e.target.value)  
    }

    return(
        <> 
            <fieldset className="Field">
                <legend>HTML</legend>
                <textarea className="Editor" name="input" placeholder="Type your HTML here..." value={fieldData}onChange={handleCodeChange}></textarea>
            </fieldset>
        </>
    )
}

export default Editor