import * as yup from 'yup';

export const formSchema = yup.object().shape({
  email: yup.string().email("Oops! That doesn't look like an email address").required("Oops! That doesn't look like an email address"),
});
