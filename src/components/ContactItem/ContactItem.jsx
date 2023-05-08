import css from 'components/ContactItem/ContactItem.module.css';

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
