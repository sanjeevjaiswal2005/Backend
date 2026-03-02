import React from "react";

const FormInput = ({ label, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="text"
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default FormInput;
