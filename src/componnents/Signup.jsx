import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import { UserSignUp } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary + 90};
`;

const Signup = ({setOpenAuth}) => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const validateInputs = () => {
    if (!email || !password || !name) {
      alert("Please fill all fields");
      return false;
    }
    return true;
  };

  // const handelSignUp = async (setOpenAuth) =>{
  //   setLoading(true);
  //   setButtonDisable(true);

  //   if(validateInputs){
  //     await UserSignUp({ name, email, password }).then((res) =>{
  //       dispatch(loginSuccess(res.data));
  //       setOpenAuth(false);

  //     }).catch((err) => {
  //       alert(err.response.data.message);
  //     }).finally(()=>{
  //       setLoading(false);
  //       setButtonDisable(false);
  //     })
  //   }
  // };

  const handelSignUp = async () => {
  setLoading(true);
  setButtonDisable(true);

  if (validateInputs()) {
    try {
      const res = await UserSignUp({ name, email, password });

      // Make sure res and res.data exist
      if (res && res.data) {
        dispatch(loginSuccess(res.data));
        // navigate("/");
        setOpenAuth(false);
      } else {
        alert("Unexpected response from server.");
      }

    } catch (err) {
      // Check if err.response and err.response.data exist
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        console.error("Signup Error:", err);
        alert("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
      setButtonDisable(false);
    }
  } else {
    setLoading(false);
    setButtonDisable(false);
    alert("Please fill all fields correctly.");
  }
};


  return (
    <Container>
      <div>
        <Title>Welcome to Rentora</Title>
        <Span>Please signup with your details here</Span>
      </div>
      <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
        <TextInput label="Full Name" placeholder="Enter your full name"  value={name} handelChange={(e) => setName(e.target.value)}/>  
        <TextInput label="Email Address" placeholder="Enter your email address" value={email} handelChange={(e) => setEmail(e.target.value)}/>
        <TextInput label="Password" placeholder="Enter your Password" password value={password} handelChange={(e) => setPassword(e.target.value)}/>
        
        <Button text="Sign Up" 
        onClick={handelSignUp}
        isLoading={loading}
        isDisabled={buttonDisable}
        />
      </div>
    </Container>
  );
};

export default Signup;
