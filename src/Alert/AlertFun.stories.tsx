import React from 'react';
import { Alert } from './index';

export const AlertFun = () => {
  return (
    <>
    <div>
      <Alert type="success" message="Success alert" />
      <Alert type="warning" message="Warning alert" />
      <Alert type="error" message="Error alert" />
      <Alert message="Default alert" />
    </div>
    </>
  );
};

