import { SnackbarProvider, VariantType, useSnackbar } from "notistack"

const useCustomToast = () => {
  const { enqueueSnackbar } = useSnackbar()
  const toast = (message: string, variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    console.log(message, variant)
    enqueueSnackbar(message, { variant })
  }
  return {
    toast,
  }
}

export default useCustomToast
