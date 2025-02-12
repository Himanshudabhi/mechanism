const InputField = ({type,placeholder,value,onChange,className})=>{
    return(
        <>
        <input 
            type={type} 
            className={`form-control mt-4 ${className ? className: ""}`} 
            id="exampleFormControlInput1" 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            >
            
            </input>
            
        
        </>
    )
}
export default InputField