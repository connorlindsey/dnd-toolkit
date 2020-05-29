import App from "next/app"
import Page from "../components/Page"
import { AuthProvider } from "../context/auth-context"

class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <AuthProvider>
        <Page>
          <Component />
        </Page>
      </AuthProvider>
    )
  }
}
export default MyApp
