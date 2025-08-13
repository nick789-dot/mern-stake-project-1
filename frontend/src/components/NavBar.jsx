import { PlusIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
  <header className='bg-base-300 border-b border-base-content/10'>
    <div className='mx-auto max-w-6xl px-4 py-4 '>
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-primary font-mono tracking-tighter'>
        thinkboard
      </h1>
      <div className='flex items-center gap-4'>
        <Link to={"/create"} className='btn btn-primary '>
        <PlusIcon className='w-4 h-4 mr-2' />
        <span>New Note</span>
        </Link>
        </div>
    </div>
    </div>
    </header>
  );
};

export default NavBar