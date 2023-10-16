import GiffError from '../../icons/cat-farsi-sad.gif'
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ images }) => {
  return (
    <div className={css.containerError}>
      <h2 className={css.title}>No images found with name {images}</h2>
      <img src={GiffError} alt="Error" width="300" />
    </div>
  );
};

export default ErrorMessage;