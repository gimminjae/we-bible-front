import {useCallback, useContext} from "react";
import {HeaderContext} from "../store/context/HeaderContext";

const useHeader = () => {
  const { header, setHeader } = useContext(HeaderContext)
  const setMenu = useCallback((jsx: any) => setHeader(jsx), [])
  return {
    setMenu,
    header
  }
}

export default useHeader
