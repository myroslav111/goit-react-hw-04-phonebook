import React from 'react';
import { InputWrap, InputBook } from '../Input/Input.styled';

const InputNumber = ({ onChange, value }) => {
  return (
    <InputWrap>
      Number
      <InputBook
        type="tel"
        name="number"
        onChange={onChange}
        value={value}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </InputWrap>
  );
};

export default InputNumber;
