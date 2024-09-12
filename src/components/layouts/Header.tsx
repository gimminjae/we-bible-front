import React from "react"
import useHeader from "../../hooks/useHeader";

function Header() {
  const { header } = useHeader()
  return <header>{header}</header>
}
export default React.memo(Header)
