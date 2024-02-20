import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Typography } from '@material-tailwind/react';

function StepTwoRegister({ setSuccessCode, handleNext }) {
    const inputRefs = useRef(Array.from({ length: 6 }, () => React.createRef())); // Adjusted to use useRef correctly
    const [values, setValues] = useState(Array(6).fill(''));
    const [error, setError] = useState(false);
  
    const { verifyCode } = useAuth()
    const handleChange = (index, event) => {
      const newValues = [...values];
      newValues[index] = event.target.value;
      setValues(newValues);

  
      // Move focus forward on input
      if (event.target.value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
  
      // Move focus backward on delete if current input is empty
      if (!event.target.value && index > 0 && event.key === 'Backspace') {
        inputRefs.current[index - 1].focus();
      }
  
      // If it's the last input and all inputs are filled, call the verifyHandler
      if (index === 5 && newValues.every(value => value !== '')) {
        verifyHandler(newValues.join(''));
      }
    };
  
    const handleKeyDown = (index, event) => {
      // Move focus backward on delete if current input is empty
      if (index > 0 && event.key === 'Backspace' && !values[index]) {
        inputRefs.current[index - 1].focus();
        setError(false)
      }
    };
  
    const verifyHandler = async (code) => {
      const verify = await verifyCode(parseInt(code))

      console.log(verify)
      if (verify?.success) {
        setSuccessCode(true)
        handleNext()
      } else {
        setSuccessCode(false)
        setError(true)
      }
    };
  
    return (
      <div>
        <div className="flex mb-2 space-x-2 justify-center rtl:space-x-reverse">
          {values.map((value, index) => (
            <div key={index}>
              <label htmlFor={`code-${index + 1}`} className="sr-only">Code {index + 1}</label>
              <input
                type="text"
                maxLength="1"
                id={`code-${index + 1}`}
                ref={el => inputRefs.current[index] = el} // Assign ref
                value={value}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={"block w-9 h-9 md:w-20 md:h-20 py-3 font-extrabold text-center text-primaryText bg-componentColor rounded-lg focus:border-hover " + (error ? " border-red-700 border-2" : "")}
                required
              />
            </div>
          ))}
        </div>
        {error && (
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
                      Invalid code.
                  </Typography>
        )}
        <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500">
          Please introduce the 6 digit code we sent via email.
        </p>
      </div>
    );
  }
  
  export default StepTwoRegister;