import {useState,useEffect} from "react";
import "./RegisterStyle.css";


export const Register = () => {
  const initialValues={name:"",surname:"",email:"",password:"",confirmPassword:""};
  const [formValues,setFormValues]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  

  const handleChange =(e) => {
    const{ name , value } =e.target;
    setFormValues({...formValues,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    validate(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(() =>{
    if(Object.keys(formErrors).length=== 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values)=>{
    const errors={}
    const regexEmail=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|net)$/;
    const regexPass=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=-])[A-Za-z\d!@#$%^&*()_+=-]{8,}$/;

    if(!values.name){
      errors.name ="Name is required";
    }
    if(!values.surname){
      errors.surname ="Surname is required";
    }
    if(!values.email){
      errors.email ="Email is required";
    }else if(!regexEmail.test(values.email)){
      errors.email="This is not a valid email";
    }
    if(!values.password){
      errors.password ="Password is required";
    }else if(!regexPass.test(values.password)){
      errors.password="This is not a valid password";
    }
     if(!values.confirmPassword){
      errors.confirmPassword ="You need to confirm password";
    }else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;

  }
    return (
      <>
    <div class="register-box">
    <p>Sign up</p>
    <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input value={formValues.name} onChange={handleChange} type="text" placeholder="Type name" id="name" name="name"></input>
        <label htmlFor='name'>Name</label>
        <p id="error">{formErrors.name}</p>
      </div>
      <div class="user-box">
      <input value={formValues.surname} onChange={handleChange} type="text" placeholder="Type surname" id="surname" name="surname"></input>
        <label htmlFor='surname'>Surname</label>
        <p id="error">{formErrors.surname}</p>
      </div>
      <div class="user-box">
      <input value={formValues.email} onChange={handleChange} type="email" placeholder="Type e-mail" id="email" name="email"></input>
        <label htmlFor='email'>Email</label>
        <p id="error">{formErrors.email}</p>
      </div>
      <div class="user-box">
      <input value={formValues.password} onChange={handleChange} type="password" placeholder="Type password" id="password" name="password"></input>
        <label htmlFor="password">Password</label>
        <p id="error">{formErrors.password}</p>
      </div>
      <div class="user-box">
      <input value={formValues.confirmPassword}  onChange={handleChange} type="password" placeholder="Type password" id="confirmPassword" name="confirmPassword"></input>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <p id="error">{formErrors.confirmPassword}</p>
      </div>
      <button class="btn" type="submit">Sign up </button>
    </form>
    <p>Already have an account? <a href="/Login" class="a2">Log in!</a></p>
  </div>
      </>
    );
  };
  