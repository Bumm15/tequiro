import { Input, Typography, Button, Spinner } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext';

function StepThreeRegister({ email }) {

  const { userNameIsNotTaken, signUp } = useAuth()

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    element: "",
    errorMessage: ""
  })

  const handleRegister = async () => {
    setLoading(true);
    if (password !== repeatPassword) {
      console.log("psswd do not match")
      setErrorMessage({
        element: "password2",
        errorMessage: "Passwords do not match"
      })
      setLoading(false)
      return;
    }

    if (password === "" || repeatPassword === "") {
      console.log("Privide psswd")
      setErrorMessage({
        element: "password",
        errorMessage: "Please provide password"
      })
      setLoading(false)
      return;
    }

    if (!userNameIsNotTaken()) {
      console.log("username is already taken")
      setErrorMessage({
        element: "username",
        errorMessage: "Username is already taken"
      })
      setLoading(false)
      return;
    }

    console.log(await signUp(email, password, username));
    console.log("success")

    setLoading(false)
    //window.location.href = "/"
  }

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
          error={errorMessage.element === "username" ? true : false}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="focus:!border-secondaryText text-primaryText placeholder:opacity-100 !placeholder:text-secondaryText w-full border-none !bg-componentColor"
          labelProps={{
            className: "hidden",
          }}
        />
        <Input
          id="password"
          color="gray"
          size="lg"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="focus:!border-secondaryText !text-primaryText placeholder:opacity-100 !placeholder:text-secondaryText w-full border-none !bg-componentColor"
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
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat password"
          className="focus:!border-secondaryText text-primaryText placeholder:opacity-100 !placeholder-secondaryText w-full border-none !bg-componentColor"
          labelProps={{
            className: "hidden",
          }}
        />
        <Button color="blue" fullWidth disabled={loading} onClick={handleRegister}> {loading ? (<Spinner />) : "Register"}</Button>
      </div>
    </div>
  )
}

export default StepThreeRegister