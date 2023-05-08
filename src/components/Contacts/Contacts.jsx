// import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = ({ contacts }) => {
  console.log(contacts);
  <ul>
    {contacts.map(contact => {
      return (
        <li key={contact.id}>
          {contact.name}:{contact.number}
        </li>
      );
    })}
  </ul>;
};
