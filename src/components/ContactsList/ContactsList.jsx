import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        );
      })}
    </ul>
  );
};
