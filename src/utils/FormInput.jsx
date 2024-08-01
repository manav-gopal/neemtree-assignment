import React from "react";

const FormInput = ({
  name,
  label = name,
  type = "text",
  placeholder,
  required = true,
}) => (
  <div className="form-group">
    <label htmlFor={name}>
      {label.toUpperCase()} {required && <span>*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default FormInput;
