import { useSnackbar } from "notistack"
import { useCallback } from "react"

interface Options {
  autoHideDuration?: number
  anchorOrigin?: {
    vertical: "top" | "bottom"
    horizontal: "left" | "center" | "right"
    variant: "success" | "error" | "warning" | "info" | "default"
  }
}

const useToast = () => {
  const { enqueueSnackbar } = useSnackbar()
  const getOptions = useCallback(
    (options: any) => ({
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "success",
      ...options,
    }),
    []
  )
  const success = (message: string) => {
    enqueueSnackbar(message, getOptions({ variant: "success" }))
  }
  const error = (message: string) => {
    enqueueSnackbar(message, getOptions({ variant: "error" }))
  }
  const warning = (message: string) => {
    enqueueSnackbar(message, getOptions({ variant: "warning" }))
  }
  const info = (message: string) => {
    enqueueSnackbar(message, getOptions({ variant: "info" }))
  }
  const defaultToast = (message: string) => {
    enqueueSnackbar(message, getOptions({ variant: "default" }))
  }
  return {
    success,
    error,
    warning,
    info,
    defaultToast,
  }
}

export default useToast
