import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

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
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
