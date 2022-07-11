import React from 'react';
import { FormFind, Label, Input, Span } from './FormFinde.styled';

const FormFinde = ({ onChange, value }) => {
  return (
    <FormFind>
      <Label htmlFor="search">Finde contact by name</Label>
      <Input
        id="search"
        onChange={onChange}
        value={value}
        type="search"
        pattern=".*\S.*"
        required
      />
      <Span className="caret"></Span>
    </FormFind>
  );
};

export default FormFinde;
