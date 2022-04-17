import { createContext, useCallback, useEffect, useState } from "react"
import api from "./services/api"

const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const { pageComponent: Page, router, ...otherProps } = props

  const [session, setSession] = useState()

  const initSession = useCallback((jwt) => {
    if (!jwt) {
      setSession(null)

      return
    }

    const [, payload] = jwt.split(".")
    const session = atob(payload)

    setSession(session)
  }, [])

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")

    initSession(jwt)
  }, [initSession])

  const signIn = useCallback(
    async (username, password) => {
      try {
        const {
          data: { jwt },
        } = await api.post("/user/sign-in", { username, password})

        localStorage.setItem("jwt", jwt)
        initSession(jwt)

      } catch (err) {
        alert(err.response.data.error)
      }
    },
    [initSession, router]
  )

  const signUp = useCallback(
    async (username, password, email) => {
      try {
        await api.post("/user/register", { username, password, email })
      } catch (err) {
        alert(err.response.data.error)
      }
    },
    [router]
  )

  const signOut = () => {
    localStorage.clear()
    setSession(null)
    router.push("/signin")
  }

  return (
    <AppContext.Provider
      {...otherProps}
      value={{
        router,
        session,
        signIn,
        signUp,
        signOut,
      }}
    />
  )
}

export default AppContext