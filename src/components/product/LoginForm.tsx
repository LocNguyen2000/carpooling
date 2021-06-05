import React, { useEffect, useRef, useState } from "react";
import { Container, Modal } from 'react-bootstrap'
import axios from 'axios';
import * as  Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from "formik";
import '../../css/LoginForm.css'
import { baseServices, userServices } from "../../services";
import BeatLoader from "react-spinners/BeatLoader";

const LoginForm = ({ history }) => {
  // const { authUser, setAuthUser } = useContext(AuthUserCtx);
  const formRef = useRef<any>()
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(false)

  useEffect(() => {
    const authenticate = () => {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token'),
        }
      }
      userServices.user(localStorage.getItem('username'), config)
        .then(res => {
          if (res.roles[0].role === 'DRIVER')
            history.push('/driver-profile')
          else
            history.push('/passenger-profile')
        })
        .catch(err => localStorage.clear())
        .finally(() => setLoading(false))
    }
    authenticate();
  }, [])

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
    setRegistering(true)
    baseServices.authenticate({
      username: data.username,
      password: data.password,
    }).then(res => {
      localStorage.setItem('username', data.username);
      localStorage.setItem('password', data.password);
      localStorage.setItem('token', res.token);
      const config = {
        headers: {
          Authorization: "Bearer " + res.token,
        }
      }
      userServices.user(data.username, config)
        .then(res => {
          if (res.roles[0].role === 'DRIVER')
            history.push('/driver-profile')
          else
            history.push('/passenger-profile')
        })
        .catch(err => console.log(err))
    })
    .catch(err => setShow(true))
      .finally(() => setRegistering(false))
  }

  const handleClose = () => {
    setShow(false)
  }

  if (loading) {
    return (<div className='loading'>
      <BeatLoader color='#123abc' loading={loading} size={20} />
    </div>)
  }

  return (<Formik
    innerRef={formRef}
    initialValues={initialValues_}
    validationSchema={validationSchema_}
    onSubmit={onSubmit_}
  >
    {({ values,
      errors,
      setFieldValue,
      isValid }) => {
      return (
        <>
          {registering && 
          <div className='loading'>
            <BeatLoader color='#123abc' loading={registering} size={20} />
          </div>
          }
          <Container className="login">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <span>Tài khoản hoặc mật khẩu sai.</span>
              </Modal.Header>
            </Modal>
            <Form>

              <h3 className="text-center pt-3">LOGIN</h3>
              <label>Username</label>
              <Field className="field" type="text" name="username" value={values.username} />
              <ErrorMessage className="error" name="username" component="div" />
              <label>Password</label>
              <Field className="field" type="password" name="password" value={values.password} />
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
        </>
      );
    }}
  </Formik>
  )
}

export default LoginForm;
