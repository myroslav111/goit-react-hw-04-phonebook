// import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';
import { MainBoxApp } from './App.styled';
import FormPhonebook from './components/FormPhonebook';
import ContainerContact from 'components/ContainerContact';
import FormFinde from 'components/FormFinde';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setfilter] = useState('');

  // берем дату с локалстореджа
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts([...parsedContacts]);
    }
  }, []);

  // создаем новый контакт по инпуту
  const addContact = dataPerson => {
    // проверяем на существование новый контакт в контактах
    const boolean = contacts.some(
      nameContact => dataPerson.name === nameContact.name
    );
    if (boolean) {
      toast.error('already has');
      return;
    }
    const contact = {
      id: nanoid(),
      // когда имя свойства и значения = тогда достаточно имя свойства
      name: dataPerson.name,
      number: dataPerson.number,
    };
    // распыляем новый обьект контакта в масив контактов
    setContacts([...contacts, contact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
  };

  // удаляем контакт
  const deleteContact = contactId => {
    const filteredObj = contacts.filter(contact => contact.id !== contactId);
    setContacts([...filteredObj]);
    localStorage.setItem('contacts', JSON.stringify([...filteredObj]));
  };

  // записываем велью инпута
  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    setfilter(filterValue);
  };

  // отфильтрованый масив контактов отвечающий поиску
  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  // отфильтрованый масив контактов отвечающий поиску
  const visibleTodos = getVisibleContact();
  return (
    <MainBoxApp>
      <h1>Phone book</h1>
      <FormPhonebook onSubmit={addContact} />
      <h1>Phon list</h1>
      <FormFinde onChange={changeFilter} value={filter} />
      <ContainerContact
        arrContacts={visibleTodos}
        onDeleteContact={deleteContact}
      />
      <ToastContainer autoClose={3000} />
    </MainBoxApp>
  );
}

export default App;
