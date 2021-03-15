import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { useFormik } from 'formik';


import Button from '../Button';
import { AuthContext } from '../../providers/AuthProvider';
import FormContainer from '../../styles/FormContainer';

import LoginFormSchema from './validator';

const LoginForm = () => {

  const { authenticate, loading } = useContext(AuthContext);

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: LoginFormSchema,

    onSubmit: (values) => {
      authenticate(values).catch((e) => alert(e));
    },
  });

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Senha"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          size={'large'}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          loading={loading}
          disabled={loading}
        >
          Entrar
        </Button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;