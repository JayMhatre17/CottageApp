import React from 'react';
import { Alert } from 'flowbite-react';

export default function MessageBox({ color, text }) {
  return (
    <Alert color={color} withBorderAccent>
      <span className="font-medium">{text}</span>
    </Alert>
  );
}
