import React, { useState } from "react"
import Router from "./router"
import { HeaderContext } from "./store/context/HeaderContext"
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import { CookiesProvider } from "react-cookie"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { SnackbarProvider } from "notistack"
import { Box } from "@mui/material"

const queryClient = new QueryClient()

function App() {
  const [header, setHeader] = useState("")
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <HeaderContext.Provider value={{ header, setHeader }}>
              <Header className="relative h-[7vh] content-center" />
              <div className="mt-[9vh] container mx-auto my-auto">
                <Router />
              </div>
              <Footer />
              <ReactQueryDevtools />
            </HeaderContext.Provider>
          </QueryClientProvider>
        </CookiesProvider>
      </SnackbarProvider>
    </>
  )
}

export default App
