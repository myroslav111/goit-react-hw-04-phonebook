// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { MainBoxApp } from './App.styled';
import FormPhonebook from './components/FormPhonebook';
import ContainerContact from 'components/ContainerContact';
import FormFinde from 'components/FormFinde';
import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Notify.failure('Qui timide rogat docet negare');

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  // создаем новый контакт по инпуту
  addContact = dataPerson => {
    // проверяем на существование новый контакт в контактах
    const boolean = this.state.contacts.some(
      nameContact => dataPerson.name === nameContact.name
    );
    if (boolean) {
      // Notify.failure('Qui timide rogat docet negare');
      return;
    }

    const contact = {
      id: nanoid(),
      // когда имя свойства и значения = тогда достаточно имя свойства
      name: dataPerson.name,
      number: dataPerson.number,
    };
    // распыляем новый обьект контакта в масив контактов
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  // удаляем контакт
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // записываем велью инпута
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // отфильтрованый масив контактов отвечающий поиску
  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    // console.log(prevProps);
    console.log(prevState);
    console.log(this.state);
    // обезательно проверить обновилось ли стейт иначе зациклим
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    // отфильтрованый масив контактов отвечающий поиску
    const visibleTodos = this.getVisibleContact();
    return (
      <MainBoxApp>
        <h1>Phone book</h1>
        <FormPhonebook onSubmit={this.addContact} />
        <h1>Phon list</h1>
        <FormFinde onChange={this.changeFilter} value={this.state.filter} />
        <ContainerContact
          arrContacts={visibleTodos}
          onDeleteContact={this.deleteContact}
        />
      </MainBoxApp>
    );
  }
}

export default App;
