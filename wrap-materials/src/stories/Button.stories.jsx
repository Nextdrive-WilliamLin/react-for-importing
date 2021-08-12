import React from 'react';

import { Button } from './Button';
import {MoButton} from "../lib"

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MoButton {...args} >aa</MoButton>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
