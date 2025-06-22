import { Button } from './ui/button.jsx';
import { Input } from './ui/input.jsx';
import React from 'react';

export function Header() {
  const handleRun = (e) => {
    alert('Run button clicked')
  };

  return (
    <header className="flex justify-between items-center box-border px-3 py-[8px] font-[500] ">
      <div>
        Some Content
      </div>
      <Input className="bg-background-2" className_2="w-[300px]"  variant="search" placeholder="Search..." icon="search"/>
      <div className='flex items-center gap-2 h-full'>
        <Button className="relative" variant="blue" size="md" icon="dollar" icon_position_initial={true}>
          <p>Buy</p>
          {/* <Ping /> */}
        </Button>
        <hr className='bg-gray-100/15 w-[0.2px] h-4 rounded-full border-0 mx-[0.5px]' />
        <Button variant='primary' size="md" icon='share'>Share</Button>
        <Button variant="green" size="md" icon='play'
          onClick={handleRun}>Run</Button>
      </div>
    </header>
  )
}

