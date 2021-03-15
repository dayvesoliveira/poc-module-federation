import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  email:    Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export default LoginFormSchema;