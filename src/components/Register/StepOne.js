import { Input, Typography } from '@material-tailwind/react'
import React from 'react';
import logo from "./ot.webp";

function StepOneRegister({ handleEmailChange, email, setEmail, isValid}) {
    // Contact form - email, password, password repeat
    // Send generated verification code to email
    // check if email exists.

    

  return (
    <div className='bg-componentColor rounded-lg my-auto p-8 text-center sm:p-10 md:p-20 xl:px-32'>
        <div className="flex justify-center">
            <img className='rounded-full h-20 w-20 mb-5' src={logo} alt='logo' />
        </div>
        <Typography variant='h4' className='text-primaryText'>Join our community with ease!</Typography>
        <Typography variant='small' className='text-secondaryText mb-5'>You can start with your email.</Typography>
        <div className="mb-6">
            <label htmlFor="email">
                <Typography
                    variant="small"
                    className="flex justify-start mb-2 font-medium text-secondaryText"
                >
                    Your Email
                </Typography>
            </label>
            <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                value={email}
                placeholder=""
                onChange={(e) => {setEmail(e.target.value); handleEmailChange(e); }}    
                className="focus:!border-secondaryText text-secondaryText !placeholder:text-secondaryText"
                labelProps={{
                    className: "hidden",
                }}
            />
            {email && !isValid ? (
                <Typography
                    variant="small"
                    color="red"
                    className="mt-2 flex items-center gap-1 font-normal"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                    >
                    <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                    />
                    </svg>
                    Invalid email format.
                </Typography>
            ):(<div className='h-7'></div>)}
        </div>
    </div>

  )
}

export default StepOneRegister