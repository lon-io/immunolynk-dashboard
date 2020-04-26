import React from 'react';
import { action } from '@storybook/addon-actions';
import { BorderedButton, FilledButton } from './Button';

export default {
  title: 'AppButton',
  component: BorderedButton,
};

export const Bordered = () => <BorderedButton onClick={action('clicked')}>Button</BorderedButton>;
export const Filled = () => <FilledButton onClick={action('clicked')}>Button</FilledButton>;
