import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // contacts: [],
    filter: '',
  };

  formSubmit = dataForm => {
    console.log(dataForm);
    // записываем пришедшие данные в новый объект со свойствами
    let newData = {
      name: dataForm.name,
      number: dataForm.number,
      id: nanoid(),
    };

    // добавляем этот объект в массив контактов
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newData],
      };
    });
  };

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = event => {
    console.log(event.currentTarget.value);
    // в свойсво объекта filter добавляем значение введенное в инпут для фильтра
    this.setState({ filter: event.currentTarget.value });
  };

  // changeContacts = constactsName => {
  //   console.log(constactsName);

  // };

  render() {
    const visibleTelephone = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    console.log(visibleTelephone);
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilter} />
        <ContactsList
          contacts={visibleTelephone}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
