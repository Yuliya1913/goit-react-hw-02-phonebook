import css from 'components/Filter/Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="">
      <input
        className={css.filter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
