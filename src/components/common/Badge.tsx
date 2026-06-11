import React from 'react';

interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  icon,
  className = ''
}) => {
  return (
    <div className={`badge ${className}`.trim()}>
      {icon && <span style={{ display: 'inline-flex', alignSelf: 'center' }}>{icon}</span>}
      {label}
    </div>
  );
};
export default Badge;
