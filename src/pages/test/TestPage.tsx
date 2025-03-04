import { useCallback, useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { TextField } from "@mui/material"

function TestPage() {
  const { signUp, signIn, signOut, auth } = useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = useCallback(async () => {
    const { error } = await signUp(username, password)
    if (error) {
      console.error("Error signing up:", error.message)
    } else {
      console.log("Signed up successfully!")
    }
  }, [username, password, signUp])

  const handleSignIn = useCallback(async () => {
    const { error } = await signIn(username, password)
    if (error) {
      console.error("Error signing in:", error.message)
    } else {
      console.log("Signed in successfully!")
    }
  }, [username, password, signIn])

  const handleSignOut = useCallback(async () => {
    const { error } = await signOut()
    if (error) {
      console.error("Error signing out:", error.message)
    } else {
      console.log("Signed out successfully!")
    }
  }, [signOut])

  useEffect(() => {
    console.log("auth: ", auth)
  }, [auth])

  return (
    <div>
      <TextField
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>button</button>
      {auth && <button onClick={handleSignOut}>Sign Out</button>}
      {!auth && (
        <>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleSignIn}>Sign In</button>
        </>
      )}
    </div>
  )
}
export default TestPage
