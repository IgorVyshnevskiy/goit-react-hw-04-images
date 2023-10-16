
import css from './Button.module.css';

const Button = ({ onLoadMoreButtonClick }) => {
  return (
    <div className={css.containerBtn}>
      <button
        className={css.Button}
        type="button"
        onClick={onLoadMoreButtonClick}
      >
        loade More
      </button>
    </div>
  );
};

export default Button;