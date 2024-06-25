import React from "react";

type Props = {
  labelText?: string,
  type?: string,
  id?: string,
  name?: string,
  value?: string,
  onChange?: (params?: any) => void,
  placeholder?: string,
}
function LabelInput({ labelText, type, id, name, value, onChange, placeholder }: Props) {
  return (
    <>
      <div>
        {labelText && <label htmlFor={id}>{labelText}</label>}
        {<input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />}
      </div>
    </>
  )
}

export default LabelInput
