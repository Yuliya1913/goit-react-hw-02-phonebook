import css from 'components/ContactItem/ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <div className={css.wrapper}>
      <li className={css.item} key={contact.id}>
        {contact.name}: {contact.number}
      </li>
      <button
        className={css.button}
        onClick={() => {
          onDeleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
