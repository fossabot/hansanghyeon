import React from 'react';
import { FaRegCheckCircle, FaTimes } from 'react-icons/fa';
// Components
import { AlertSuccess, Tada, Title, Blink, Wrap } from './style';

interface AlertProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
export const Alert: React.FC<AlertProps> = ({
  children,
  onClick,
}: AlertProps) => {
  return (
    <AlertSuccess>
      <Wrap.Root>
        <Wrap.Icon>
          <Tada>
            <FaRegCheckCircle />
          </Tada>
        </Wrap.Icon>
        <Wrap.Inner>
          <span>{children}</span>
        </Wrap.Inner>
        <Wrap.Times onClick={onClick}>
          <Blink>
            <FaTimes />
          </Blink>
        </Wrap.Times>
      </Wrap.Root>
    </AlertSuccess>
  );
};

export default Alert;
