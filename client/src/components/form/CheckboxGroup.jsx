import React from "react";
import { Field, ErrorMessage } from "formik";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  className="cbx2"
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />

                <label
                  style={{
                    padding: "0 10px",
                  }}
                  htmlFor={option.value}
                >
                  {option.key}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
}

export default CheckboxGroup;
