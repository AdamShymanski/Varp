import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Props, Bottom} from '.';

export default {
  title: 'SideDrawer/Bottom',
  component: Bottom,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{name: 'black', value: '#121212'}],
    },
  },
} as Meta;

export const Basic: Story<Props> = (props) => {
  return <Bottom {...props} />;
};
