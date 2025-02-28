import { useCallback, useEffect, useMemo, useState } from "react"
import supabase from "../api/db/supabase"
import { Provider } from "@supabase/supabase-js"

interface UserAttributeProps {
  displayName: string
  phone: string
}

const useAuth = () => {
  const signUp = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { data, error }
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone: "",
      options: {},
      email,
      password,
    })
    return { data, error }
  }, [])

  const signInWithAuth = useCallback(async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    })
    return { data, error }
  }, [])

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }, [])

  const [auth, setAuth] = useState<any>(null)

  const getAuth: any = useCallback(async () => {
    const { data, error: userError } = await supabase.auth.getUser()
    return setAuth(data?.user ? data.user : null)
  }, [supabase.auth])

  const updateUserInfo = useCallback(async (attributes: UserAttributeProps) => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        displayName: attributes.displayName,
        phone: attributes.phone,
      },
    })
    return {
      data,
      error,
    }
  }, [])

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      // if (event === "PASSWORD_RECOVERY") { // event 값에 따라 다음 로직 분기 처리
      //   setShowResetForm(true);
      // }
      getAuth()
    })
  }, [])

  return {
    signUp,
    signIn,
    signInWithAuth,
    signOut,
    auth,
    updateUserInfo,
  }
}
export default useAuth
