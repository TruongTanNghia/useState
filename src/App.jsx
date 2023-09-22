import React, { useState } from 'react'
import { Form1} from './imports/index'
import { inputs } from './data/form_data';
import './App.css'
const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword:'',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
    console.log(values);
  };
  
  return (
    <> 
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) =>(
          <Form1 
            key={input.id} 
            {...input} 
            value={values[input.name]}
            onChange = {onChange} 
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
      
    </>
  );
};

export default App;