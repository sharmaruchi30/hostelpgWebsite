import React from "react";
import CheckboxGroup from "./CheckboxGroup";
function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
