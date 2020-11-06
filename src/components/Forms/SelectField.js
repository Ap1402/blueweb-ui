import React from "react";
import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-group">
        <label htmlFor={props.id || props.name}>{label}</label>
        <select className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="invalid-feedback d-block">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default SelectField;
