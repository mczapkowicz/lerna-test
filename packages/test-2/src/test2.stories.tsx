import React from 'react';
import Test2 from "./test2";

export default {
  title: 'Test2',
  component: Test2,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Test2 {...args} />;

export const Test2Component = Template.bind({});
