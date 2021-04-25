import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Props, Input} from '.';

export default {
  title: 'General/Input',
  component: Input,
  args: {
    size: 'medium',
  },
} as Meta;

export const Basic: Story<Props> = (props) => {
  return <Input {...props} />;
};
