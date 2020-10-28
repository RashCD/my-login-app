import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  userId: Yup.string()
    .min(2, 'User id is too Short!')
    .max(10, 'User id is too Long!')
    .required('Required'),
  userPassword: Yup.string()
    .min(8, 'Minimum password length is 8 character')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'Must contain minimum 8 Characters, At least one Uppercase & one Number'
    )
    .required('Required'),
});
