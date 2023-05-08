import { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <div>
          <h2>Contacts</h2>

          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}:{contact.number}
                </li>
              );
            })}
          </ul>

          <Contacts contacts={this.state.contacts} />
        </div>
      </>
    );
  }
}
