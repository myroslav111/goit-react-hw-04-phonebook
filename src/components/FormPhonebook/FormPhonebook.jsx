import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import InputNumber from './InputNumber';
import { Form } from './FormPhonebook.styled';

// export default FormPhonebook;
function FormPhonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // записываем значение инпута по name
  const handleChange = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // при сабмите отправляем в App данные для создания обьекта контакта
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {};
    formData.name = e.target.name.value;
    formData.number = e.target.number.value;
    onSubmit(formData);
    reset();
  };

  // очищаем инпуты
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input name="name" value={name} onChange={handleChange} />
      <InputNumber name="number" value={number} onChange={handleChange} />
      <Button />
    </Form>
  );
}

export default FormPhonebook;
