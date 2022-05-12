import React from 'react';
import Test1 from './test1';

export default {
  title: 'Test1',
  component: Test1,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Test1 {...args} />;

export const Test1Component = Template.bind({});
