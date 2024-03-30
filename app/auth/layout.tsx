import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
    return  <div>
    <div className='text-center p-4'>
        discount section is here
    </div>
    {children}
</div>
  }