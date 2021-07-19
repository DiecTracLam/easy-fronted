import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../Components/forms-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Typography, makeStyles, Button } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PasswordField from 'Components/forms-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2)
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    margin: theme.spacing(2,0,3,0),
    textAlign: 'center'
  },

  submit: {
    margin: theme.spacing(3,0,2,0),
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    // fullname: yup.string().required('Please enter title').min(5, 'Too short'),
    // email: yup.string().required('Please enter title').min(5, 'Too short'),
    password: yup.string().required('Please enter title').min(5, 'Too short'),
    // retypePassword: yup.string().required('Please enter title').min(5, 'Too short'), // cái này là NewTodo đc viết bằng String và .required là phải có kí tự nào
  }); // đó nếu ko báo lỗi và min là ít nhất 5 kí tự nếu ko báo lỗi

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema), // Cái này nghĩa là thêm thư viện bên ngoài để sử dụng cho form VD như sử dụng thư viện yup
  });

  const HandleSubmit = (values) => {
    console.log(values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    // form.reset();  
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>

      <form onSubmit={form.handleSubmit(HandleSubmit)}>
        {/* <InputField name="fullname" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassword" label="ReType Password" form={form} /> */}
        <PasswordField name='password' label='Password' form={form}/>

        {/* <Button type="submit" className={classes.submit} variant='contained' color='primary' fullWidth>
          Create an account
        </Button> */}
      </form>
    </div>
  );
}

export default RegisterForm;
