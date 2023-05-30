import React from "react";
import { styled,setup } from 'goober';

export interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

setup(React.createElement);

const AccordionContainer = styled('div')`
  .accordion {
    margin-bottom: 10px;
  }

  .accordion-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .accordion-title {
    margin-right: 10px;
    font-weight: bold;
  }

  .accordion-icon {
    width: 10px;
    height: 10px;
    border: solid 1px #000;
    transition: transform 0.3s;
  }

  .open .accordion-icon {
    transform: rotate(90deg);
  }

  .accordion-content {
    margin-top: 10px;
  }
`;

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <div className={`accordion ${isOpen ? 'open' : ''}`}>
        <div className="accordion-header" onClick={toggleAccordion}>
          <span className="accordion-title">{title}</span>
          <span className={`accordion-icon ${isOpen ? 'open' : ''}`} />
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    </AccordionContainer>
  );
};