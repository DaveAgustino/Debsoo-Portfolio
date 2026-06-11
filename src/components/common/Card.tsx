import React, { useRef } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: string;
  label?: string;
  tiltEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  index,
  label,
  tiltEffect = false,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };

  const handleMouseLeave = () => {
    if (!tiltEffect || !cardRef.current) return;
    
    cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transition: tiltEffect ? 'transform 0.1s ease-out' : undefined }}
    >
      {(index || label) && (
        <div className="service-card-header">
          {label && <span className="mono service-card-label">{label}</span>}
          {index && <span className="mono service-card-number">{index}</span>}
        </div>
      )}
      {children}
    </div>
  );
};
export default Card;
