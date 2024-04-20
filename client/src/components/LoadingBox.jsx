import { Spinner } from 'flowbite-react';
import React from 'react';

export default function LoadingBox() {
  return (
    <div className="text-center mt-5 mb-2">
      <span className="pl-3">Loading... </span>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  );
}
