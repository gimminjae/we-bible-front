import { VariantType, useSnackbar } from "notistack"

const useToast = () => {
  const { enqueueSnackbar } = useSnackbar()
  const success = (message: string) => {
    enqueueSnackbar(message, {
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "success",
    })
  }
  const error = (message: string) => {
    enqueueSnackbar(message, {
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "error",
    })
  }
  const warning = (message: string) => {
    enqueueSnackbar(message, {
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "warning",
    })
  }
  const info = (message: string) => {
    enqueueSnackbar(message, {
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "info",
    })
  }
  const defaultToast = (message: string) => {
    enqueueSnackbar(message, {
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      variant: "default",
    })
  }
  return {
    success,
  }
}

export default useToast
