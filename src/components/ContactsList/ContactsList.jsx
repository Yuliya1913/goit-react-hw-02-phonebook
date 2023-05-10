import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
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
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
