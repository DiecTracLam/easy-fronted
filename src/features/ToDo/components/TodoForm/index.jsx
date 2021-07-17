import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'Components/forms-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    Newtodo: yup.string().required('Please enter title').min(5, 'Too short'), // cái này là NewTodo đc viết bằng String và .required là phải có kí tự nào
  }); // đó nếu ko báo lỗi và min là ít nhất 5 kí tự nếu ko báo lỗi

  const form = useForm({
    defaultValues: {
      Newtodo: '',
    },
    resolver: yupResolver(schema), // Cái này nghĩa là thêm thư viện bên ngoài để sử dụng cho form VD như sử dụng thư viện yup
  });

  const HandleSubmit = (values) => {
    console.log(values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(HandleSubmit)}>
      <InputField name="Newtodo" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
