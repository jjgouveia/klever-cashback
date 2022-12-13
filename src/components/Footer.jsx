import React from 'react';
import SocialMedias from './SocialMedias';

export default function Footer() {
  return (
    <footer className='text-center bg-klever-footer text-white p-2'>
      <div
        className='w-full md:w-auto flex-col flex gap-3'
      >
        <div className='flex flex-col'>
          <h2>Klever Cashback</h2>
          <p>
            Swap your Klever Cashback instantly. Get rewards for referring your
            friends. And much more.
          </p>
        </div>
        <div className='flex p-3 justify-center'>
          <SocialMedias />
        </div>
      </div>
    </footer>
  );
}
