import React from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
  let Component: keyof JSX.IntrinsicElements = 'div';

  switch (variant) {
    case 'h1':
      Component = 'h1';
      break;
    case 'h2':
      Component = 'h2';
      break;
    case 'h3':
      Component = 'h3';
      break;
    case 'h4':
      Component = 'h4';
      break;
    case 'h5':
      Component = 'h5';
      break;
    case 'h6':
      Component = 'h6';
      break;
    case 'body':
      Component = 'p';
      break;
    case 'caption':
      Component = 'span';
      break;
    default:
      break;
  }

  return <Component className={className}>{children}</Component>;
};

export default Typography;
