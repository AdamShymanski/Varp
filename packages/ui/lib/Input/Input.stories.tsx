import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Props, Input} from '.';

export default {
  title: 'General/Input',
  component: Input,
  args: {
    Input,
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  variant: 'regular',
};

export const WithButton = Template.bind({});
WithButton.args = {
  variant: 'withButton',
};
