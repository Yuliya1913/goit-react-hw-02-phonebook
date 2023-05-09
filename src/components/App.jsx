import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import css from 'components/App.module.css';

export class App extends Component {
  state = {
    contacts: [],
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

    // если вводим имя контакта, какое уже есть в телеф.книге, выводим сообщение, что имя такое есть такое и выходим
    if (this.state.contacts.find(contact => contact.name === dataForm.name)) {
      alert(`${dataForm.name} is already in contacts.`);
      return;
    }
    // добавляем этот объект нового контакта в массив контактов
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newData],
      };
    });
  };

  // удаляем  контакт из списка контактов
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = event => {
    console.log(event.currentTarget.value);
    // в свойсво filter объекта контакта добавляем значение введенное в инпут для фильтра
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    // записываем в отдельный массив контакты, которые отфильтровали для поиска из всех контактов по условию в инпуте
    //  и записываем в качестве пропса для рендера списков контакта по условию, чтобы не менять исходный массив контактов
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
