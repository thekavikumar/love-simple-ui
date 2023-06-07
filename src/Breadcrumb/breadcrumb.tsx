import React from 'react';

interface BreadcrumbsProps {
  paths: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumbs">
        {paths.map((path, index) => (
          <li key={index} className="breadcrumb-item">
            <a href="#">{path}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
