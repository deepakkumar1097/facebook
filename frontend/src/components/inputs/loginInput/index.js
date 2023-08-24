import React from "react";
import { useField, ErrorMessage } from "formik";
import { useMediaQuery } from "react-responsive";
import "./style.css";

function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);

  const desktop = useMediaQuery({ query: "(min-width: 850px)" });
  // console.log(desktop);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktop ? "input_error input_error_desktop" : "input_error"
          }
          style={{ transform: "translateY(3px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={desktop ? "error_arrow_left" : "error_arrow_top"}
            ></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div
          className={
            desktop ? "input_error input_error_desktop" : "input_error"
          }
          style={{ transform: "translateY(1px)" }}
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={desktop ? "error_arrow_left" : "error_arrow_bottom"}
            ></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !desktop ? "63%" : "16px"}` }}
        ></i>
      )}
    </div>
  );
}

export default LoginInput;
