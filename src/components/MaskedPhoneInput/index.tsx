import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import InputMask from 'react-input-mask';

interface MaskedInputProps {
  maskCode: string;
}
/** Поле ввода телефона Mui. */
const MaskedPhoneInput: FC<TextFieldProps & MaskedInputProps> = (props) => {
  // inputMask props passed to the input.
  const {
    onChange,
    onPaste,
    onMouseDown,
    onFocus,
    onBlur,
    value,
    disabled,
    maskCode,
    // props passed directly to TextField.
    ...otherProps
  } = props;

  const mask = `${maskCode} (999) 999 99 99`;
  return (
    // fix incorrect react/types version error
    // remove when typings (@types/react-input-mask) for react v18 released
    // @ts-ignore
    <InputMask
      mask={mask}
      onChange={onChange}
      onPaste={onPaste}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value as any}
      disabled={disabled}
    >
      {/* @ts-ignore */}
      {(maskInputProps: any) => (
        <TextField {...maskInputProps} {...otherProps} disabled={disabled} />
      )}
    </InputMask>
  );
};

export default MaskedPhoneInput;
