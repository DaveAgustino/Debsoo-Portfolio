import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'red' | 'dark' | 'outline' | 'red-solid';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'dark',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  id
}) => {
  const baseClass = 'btn-chamfer';
  let variantClass = '';

  switch (variant) {
    case 'red':
      variantClass = 'btn-red';
      break;
    case 'dark':
      variantClass = 'btn-dark';
      break;
    case 'outline':
      variantClass = 'btn-outline';
      break;
    case 'red-solid':
      variantClass = 'btn-red-solid';
      break;
  }

  const combinedClasses = `${baseClass} ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick as any}
        className={combinedClasses}
        target={target}
        rel={rel}
        id={id}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};
export default Button;
