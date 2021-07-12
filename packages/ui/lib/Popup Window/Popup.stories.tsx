import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Props, Popup} from '.';

export default {
  title: 'General/Popup Window',
  component: Popup,
  args: {
    Popup,
  },
} as Meta;

const Template: Story<Props> = (args) => <Popup {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  variant: 'regular',
};
