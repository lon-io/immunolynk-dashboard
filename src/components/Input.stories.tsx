import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

export default {
  title: 'AppInput',
  component: Input,
};

export const AppInput = () => <Input placeholder="Email">Enter Text</Input>;
