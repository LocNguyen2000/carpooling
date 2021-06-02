import React, { useState } from "react";
import { Container, Modal } from 'react-bootstrap'
import axios from 'axios';
import * as  Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../../css/LoginForm.css'

const LoginForm = () => {
  // const { authUser, setAuthUser } = useContext(AuthUserCtx);
  const [isError, setError ] = useState(false)
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [registing, setRegisting] = useState(false)

  
  const initialValues_ = {
    username: "",
    password: ""
  };

  const validationSchema_ = Yup.object().shape({
    username: Yup.string()
      .required("Username is required!"),
    password: Yup.string()
      .required("Password is required!"),
  });

  const onSubmit_ = (data) => {
    console.log(data);
    axios.post("https://carpooling-deploy.herokuapp.com/authenticate", {
      username: data.username,
      password: data.password
    }).then((res) => {
      console.log("Post: ", res.data);
      if (res.data.token != null){
        console.log("Login Successfully");
        window.location.pathname = "/home"
      }
    }).catch(err =>{
      console.log("Error: ", err);
      setError(true)
    })
  }
  
  const onClose = (setFieldValue) => {
    setShow(false); 
    setError(true);

    setFieldValue("username", "");
    setFieldValue("password", "");
  }


    return (<Formik
    initialValues={initialValues_}
    validationSchema={validationSchema_}
    onSubmit={onSubmit_}
  >
    {({values,
      errors,
      setFieldValue,
      isValid}) => {
      return (
        <Container className="login">
          <Modal show={show && isError} onHide={() => {onClose(setFieldValue)}}>
            <Modal.Header closeButton>
              <span>Error</span>
            </Modal.Header>
          </Modal>
          <Form>
            
            <h3 className="text-center pt-3">LOGIN</h3>
            <label>Username</label>
            <Field className="field" type="text" name="username" value={values.username}/>
            <ErrorMessage className="error" name="username" component="div" />
            <label>Password</label>
            <Field className="field" type="password" name="password" value={values.password}/>
            <ErrorMessage className="error" name="password" component="div" />

            <div className="button-wrapper">
              <button
                className="button"
                type="submit"
                disabled={login && !isValid}
              >
                {login ? "Login..." : "Login"}
                </button>
            </div>

            <a href="/register" >
              Not have an account yet? Register
              </a>
          </Form>
        </Container>
      );
    }}
  </Formik>
)}

export default LoginForm;
