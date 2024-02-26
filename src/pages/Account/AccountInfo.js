import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Spinner, Typography } from '@material-tailwind/react';
import { PencilIcon } from '@heroicons/react/24/outline';

function AccountInfo() {
  const { user } = useAuth();

  const profileStyle = { backgroundImage: `url('${user.photoURL}')`, backgroundSize: 'cover', backgroundPosition: 'center' };

  return (
    <div className='text-primaryText'>
      {user ? (
        <>
          <div className='inline-flex gap-3 rounded-full'>
            <div className="group rounded-full" style={profileStyle}>
              <div className="w-20 h-20 flex  justify-center items-center 
             group-hover:bg-black/60 cursor-pointer backdrop-brightness-75 rounded-full">
                <span class="text-white text-4xl w-1/2 text-center hidden group-hover:block"><PencilIcon className='cursor-pointer' /></span>
              </div>
            </div>
            <div>
              <Typography variant='h3'>{user.displayName}</Typography>
              <p className='text-secondaryText'>{user.email}</p>
            </div>
          </div>
        </>
      ) : (
        <><Spinner /></>
      )}
    </div>
  )
}

export default AccountInfo