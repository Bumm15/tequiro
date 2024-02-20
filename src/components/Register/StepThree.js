import { Input, Typography } from '@material-tailwind/react'
import React from 'react'

function StepThreeRegister({ email }) {
  return (
    <div className='rounded-lg my-auto p-8 text-center sm:p-10 md:p-10 xl:px-32 min-w-[50%]'>
      <Typography variant='h5' className='text-primaryText mb-5'>Almost there..</Typography>
      <div className='grid grid-cols-1 gap-5'>

          <Input
            id="email"
            color="gray"
            size="lg"
            type="email"
            name="email"
            value={email}
            placeholder=""
            className="focus:!border-secondaryText text-secondaryText !placeholder:text-secondaryText w-full border-none !bg-componentColor cursor-not-allowed"
            readOnly
            labelProps={{
              className: "hidden",
            }}
            />
        <Input
            id="username"
            color="gray"
            size="lg"
            type="text"
            name="username"
            placeholder="username"
            className="focus:!border-secondaryText !text-secondaryText !placeholder:text-secondaryText w-full border-none !bg-componentColor"
            labelProps={{
              className: "hidden",
            }}
            />
        <Input
            id="password"
            color="gray"
            size="lg"
            type="password"
            name="password2"
            placeholder="Password"
            className="focus:!border-secondaryText !text-secondaryText !placeholder:text-secondaryText w-full border-none !bg-componentColor"
            labelProps={{
              className: "hidden",
            }}
            />
        <Input
            id="password2"
            color="gray"
            size="lg"
            type="password"
            name="password2"
            placeholder=""
            className="focus:!border-secondaryText text-secondaryText !placeholder:text-secondaryText w-full border-none !bg-componentColor"
            labelProps={{
              className: "hidden",
            }}
            />
      </div>
    </div>
  )
}

export default StepThreeRegister