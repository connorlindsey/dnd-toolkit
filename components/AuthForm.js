import React, { useState } from "react"
import styled from "styled-components"
import { Form, Input, Label } from "../styles/Form"
import { Button } from "../styles/Button"
import { useRouter } from "next/router"
import { useAuth } from "../context/auth-context"

const AuthForm = () => {
  const { login, register } = useAuth()
  const router = useRouter()
  const [formVariant, setFormVariant] = useState("LOGIN")
  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const [status, setStatus] = useState("DEFAULT")
  const [message, setMessage] = useState("")

  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus("LOADING")

    if (values.password.length <= 0 || values.username.length <= 0) {
      setMessage("Please complete form")
      setStatus("ERROR")
      return
    }

    if (formVariant === "LOGIN") {
      const { message, status } = login(values.username, values.password)
      if (status === "error") {
        setMessage(message)
        setStatus("ERROR")
      } else {
        setStatus("DEFAULT")
        router.push("/monsters")
      }
    } else {
      const { message, status } = register(values.username, values.password)
      if (status === "error") {
        setMessage(message)
        setStatus("ERROR")
      } else {
        setStatus("DEFAULT")
        router.push("/monsters")
      }
    }
  }

  return (
    <Card>
      <h3>{formVariant === "LOGIN" ? "Login" : "Sign Up"}</h3>
      <Form onSubmit={handleSubmit}>
        <Label>
          Username
          <Input
            placeholder='Username'
            values={values.username}
            name='username'
            onInput={handleInput}
          />
        </Label>
        <Label>
          Password
          <Input
            placeholder='Password'
            type='password'
            values={values.password}
            name='password'
            onInput={handleInput}
          />
        </Label>
        <Button type='submit' disabled={status === "LOADING"}>
          {status === "LOADING" ? "Loading..." : formVariant === "LOGIN" ? "Login" : "Sign Up"}
        </Button>
        <p
          className='text-button'
          onClick={() => setFormVariant(formVariant === "LOGIN" ? "SIGNUP" : "LOGIN")}>
          {formVariant === "LOGIN" ? "Need an account? Sign up" : "Already have an account? Login"}
        </p>
        {message && <p className='error-message'>{message}</p>}
      </Form>
    </Card>
  )
}

const Card = styled.div`
  max-width: 400px;
  padding: 1rem 2rem;
  box-shadow: ${(props) => props.theme.elevation1};
  border-radius: ${(props) => props.theme.borderRadius};

  h3 {
    margin: 0;
  }

  .text-button {
    margin-bottom: 0rem;
    color: ${(props) => props.theme.primary["500"]};
    cursor: pointer;
    transition: 0.2s ease all;

    &:hover {
      color: ${(props) => props.theme.primary["600"]};
      text-decoration: underline;
    }
  }

  .error-message {
    color: ${(props) => props.theme.error};
    margin-bottom: 0rem;
  }
`

export default AuthForm
