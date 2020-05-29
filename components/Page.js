import React, { useEffect } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Header from "./Header"
import Meta from "./Meta"
import Theme from "../styles/theme.js"
import { useAuth } from "../context/auth-context"
import { useRouter } from "next/router"

const StyledPage = styled.div`
  background-color: ${(props) => props.theme.primary["150"]};
  min-height: 100vh;
  color: ${(props) => props.theme.grey["900"]};
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Marcellus', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.grey["900"]};
  }
  button {  font-family: 'Marcellus', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; }
`

const Page = (props) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user && router.pathname !== "/") {
      router.replace("/")
    }
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{props.children}</Inner>
        </StyledPage>
      </>
    </ThemeProvider>
  )
}

export default Page
