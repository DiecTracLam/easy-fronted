import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

// InputField.propTypes = {

// };

function PasswordField(props) {
  const { form, name, label } = props;
  const { formState, register } = form;
  const { errors, touchedFields } = formState;
  // console.log(register)
  // console.log(touchedFields[name])
  // console.log(errors[name]);
  // console.log(form.control)
  // console.log(form.handleSubmit)

  const [showPassword, setPassword] = useState(false);
  const handleClickShowPassword = () => {
    setPassword((x) => !x);
  };
  return (
    <div>
      {/* // <TextField id="standard-basic" defaultValue="Hello World" fullWidth /> */}
      <FormControl fullWidth margin='normal' variant="outlined">
        <InputLabel htmlFor={name}>{label}</InputLabel>

        <Controller // Controller là dùng để quản lý các biến như name control vào cái render mà mình muốn
          render={({ field: { ref, name, onChange, onBlur, value }, fieldState: { invalid, error, isTouched } }) => (
            console.log('ewe', error?.message, ' ', invalid),
            (
              <OutlinedInput
                // inputRef={ref}
                name={name}
                // value={value}
                onChange={onChange}
                // onBlur={onBlur}
                error={invalid}
                helperText={error?.message}

                fullWidth
                id={name}
                label={label}
                variant="outlined"
                margin="normal"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            )
          )}
          name={name} //name="NewTodo" Phải có name nếu ko nó sẽ báo lỗi
          control={form.control} // Cái này dùng để quản lý các hàm như onChange , onBlur .
        />
      </FormControl>
    </div>
  );
}

export default PasswordField;
