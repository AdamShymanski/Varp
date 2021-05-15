import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';

import {Props, MessageBox} from '.';

export default {
  title: 'General/MessageBox',
  component: MessageBox,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [{name: 'black', value: '#1b1b1b'}],
    },
  },
} as Meta;

export const Basic: Story<Props> = (props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const messageBoxProps = {
    toggle: toggle,
    message: 'It is StoryBook view',
    setToggle: setToggle,
  };

  return <MessageBox {...messageBoxProps} />;
};
