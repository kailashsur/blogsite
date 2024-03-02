// MyComponent.js
import React, { useEffect } from 'react';

const TableOfContent = () => {
  useEffect(() => {
    // Client-side logic to execute
    console.log('Client-side component executed');
  }, []);

  return <div>This is a client-side component</div>;
};

export default TableOfContent;

