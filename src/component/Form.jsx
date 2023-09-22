import React, {useState} from 'react';
// import '../styles/From.css';
const Form = (props) => {
  const [focused, setFocused] = useState(false)

  const {label, errorMessage, onChange, ...inputProps} = props;
  
  const handleFocus = (e) => {
    setFocused(true);
  };
  
  return (
    <>
      <div className="formInput">
        <lable> {label} </lable>
        <input {...inputProps} 
          onChange = {onChange} 
          onBlur={handleFocus}
          onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default Form;