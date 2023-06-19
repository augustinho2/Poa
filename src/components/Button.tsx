import React, { FC, MouseEvent } from 'react';
import { IconType } from 'react-icons';
import { useRouter } from 'next/router';

interface ButtonProps {
  icon: IconType;
  route: string;
}

const Button: FC<ButtonProps> = ({ icon: Icon, route }) => {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(route);
  };

  return (
    <button onClick={handleClick}>
      <Icon size={24} />
    </button>
  );
};

export default Button;
