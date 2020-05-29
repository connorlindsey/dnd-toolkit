import React from "react"

const AuthContext = React.createContext()
AuthContext.displayName = "AuthContext"

const AuthProvider = (props) => {
  // Data
  const [user, setUser] = React.useState(null)

  // Methods
  const login = (username, password) => {
    // 1. Find the user
    const storedPassword = localStorage.getItem(username)
    if (!storedPassword) {
      return { message: "Username does not exist", status: "error" }
    }

    // 2. Validate the password
    if (password !== storedPassword) {
      return { message: "Incorrect password", status: "error" }
    }

    // 3. Handle Login
    setUser(username)
    return { message: "Success", status: "success" }
  }
  const logout = () => {
    setUser(null)
    return { message: "Success", status: "success" }
  }
  const register = (username, password) => {
    // 1. Find the user
    const storedPassword = localStorage.getItem(username)
    if (storedPassword) {
      return { message: "Username already exists", status: "error" }
    }

    // 2. Handle signup
    localStorage.setItem(username, password)
    setUser(username)
    return { message: "Success", status: "success" }
  }

  const value = {
    login,
    logout,
    register,
    user,
  }

  return <AuthContext.Provider value={value} {...props} />
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`)
  }
  return context
}

export { AuthProvider, useAuth }
