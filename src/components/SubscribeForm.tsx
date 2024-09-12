// components/SubscribeForm.tsx
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const SubscribeForm = () => {
  return (
    <div className="flex flex-col items-center justify-center py-44 bg-primary/10">
      <h2 className="text-2xl font-semibold mb-10 text-center">
        Lorem Ipsum is simply dummy <br /> text of the printing.
      </h2>
      <div className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0">
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-72 md:w-80 lg:w-96"
        />
        <Button size="lg" >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscribeForm;
