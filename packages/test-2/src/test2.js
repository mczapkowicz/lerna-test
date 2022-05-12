import React from 'react';
import { Test1 } from '@keen.io/test-1';
var Test2 = function () {
  return React.createElement(
    'div',
    { style: { background: 'teal' } },
    'TEST:',
    React.createElement(Test1, null)
  );
};
export default Test2;
