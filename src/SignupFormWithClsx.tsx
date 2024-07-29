import clsx from "clsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  password: Yup.string()
    .min(8, "Must be 8 characters or more but less than 15")
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const SignupFormWithClsx = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form>
          <Field
            type="text"
            className={clsx(errors.name && touched.name ? "alertInput" : "")}
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="div" />
          <Field
            className={clsx(errors.email && touched.email ? "alertInput" : "")}
            type="email"
            name="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            className={clsx(
              errors.password && touched.password ? "alertInput" : ""
            )}
            type="password"
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupFormWithClsx;
