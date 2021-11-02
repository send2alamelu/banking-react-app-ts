import React from 'react';

export default interface ActionButtonProps {
  label: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}