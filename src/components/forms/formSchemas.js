import * as Yup from "yup";

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// Password rule: At least one upper case English letter, one lower case English letter, one digit, one special character, and minimum eight in length.

/* const emailRegex =
  /^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*@((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))\z/; */

export const contactFormSchema = Yup.object().shape({
  selectDepartment: Yup.string().required("Required!!"),
  name: Yup.string().min(5).required("Required!!"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required!!"),
  message: Yup.string().required("Required!!"),
});

export const loginFormSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required!!"),
  password: Yup.string()
    .min(8)
    .matches(passwordRegex, {
      message:
        "Password hint: At least one upper case English letter, one lower case English letter, one digit, one special character, and minimum eight in length",
    })
    .required("Required!!"),
});

export const signUpFormSchema = Yup.object({
  email: Yup.string()
  .email("Please enter a valid email address")
  .required("Required!!"),
  password: Yup.string()
  .min(8)
  .matches(passwordRegex, {
    message:
      "Password hint: At least one upper case English letter, one lower case English letter, one digit, one special character, and minimum eight in length",
  })
  .required("Required!!"),
confirmPassword: Yup.string().oneOf(
  [Yup.ref("password"), null],
  "Password must match"
),
})