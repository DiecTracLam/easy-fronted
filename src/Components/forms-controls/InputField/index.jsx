import React from 'react';
// import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

// InputField.propTypes = {

// };

function InputField(props) {
  const { form, name, label } = props;
  const { formState , register} = form;
  const {errors, touchedFields}=formState
  console.log("aaaaaaaaaa")
  // console.log(register)
  // console.log(touchedFields[name])
  // console.log(errors[name]);
  // console.log(form.control)
  // console.log(form.handleSubmit)
  return (
    <Controller         // Controller là dùng để quản lý các biến như name control vào cái render mà mình muốn 
      render={({ field: { ref, name, onChange, onBlur, value } , fieldState:{invalid,error,isTouched}}) => (
        console.log('ewe', error?.message," ",invalid),
        (<TextField 
            // inputRef={ref} 
            name={name} 
            value={value} 
            fullWidth label={label} 
            onChange={onChange} 
            onBlur={onBlur}
            error={invalid} 
            helperText={error?.message}
            variant='outlined'
            margin="normal"
        />)
      )}
      name={name}                 //name="NewTodo" Phải có name nếu ko nó sẽ báo lỗi 
      control={form.control}     // Cái này dùng để quản lý các hàm như onChange , onBlur .
    />
    // <TextField id="standard-basic"  defaultValue="Hello World" fullWidth/>
  );
}

export default InputField;
