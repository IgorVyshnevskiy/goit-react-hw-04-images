import { useState } from 'react';

const useToggle = (modalOpen = false) => {
  const [isOpen, setIsOpen] = useState(modalOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
};
export default useToggle;