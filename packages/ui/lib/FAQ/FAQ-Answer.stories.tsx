import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import {Props, Answer} from '.';

export default {
  title: 'FAQ/AnswerCard',
  component: Answer,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{name: 'black', value: '#1b1b1b'}],
    },
  },
  args: {
    header: 'Is Varp free?',
    text: 'Yes, Varp is free forever. We run ads to make money',
  },
} as Meta;

export const Basic: Story<Props> = (props) => {
  return <Answer {...props} />;
};
