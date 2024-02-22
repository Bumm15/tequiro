import React, { useState } from 'react'
import { Stepper, Step, Button } from "@material-tailwind/react";
import StepOneRegister from "../../components/Register/StepOne";
import StepTwoRegister from "../../components/Register/StepTwo";
import StepThreeRegister from "../../components/Register/StepThree";
import { sendVerificationEmail } from '../../mocks/SendVerificationEmail';
 
export default function RegisterPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [successCode, setSuccessCode] = React.useState(false);
  const [fullCode, setFullCode] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /\S+@\S+\.\S+/; // Simple email regex

  const handleEmailChange = (event) => {
      const { value } = event.target;
      setEmail(value);
      setIsValid(emailRegex.test(value));
  };

  const handleSteps = () => {
    console.log(activeStep)
    if (activeStep === 0) {
      console.log("Posláno")
      sendVerificationEmail(email)
    }
  }
 
  return (
    <div className="w-full py-4 flex flex-col justify-center">
        <Stepper
          lineClassName="bg-hover"
          activeLineClassName="bg-blue-500"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step 
              //onClick={() => setActiveStep(0)}
              activeClassName="!bg-blue-500 text-primaryText"
              completedClassName="!bg-blue-500 text-primaryText"
          >
              1
          </Step>
          <Step 
              //onClick={() => setActiveStep(1)}
              className="bg-hover text-primaryText"
              activeClassName="!bg-blue-500 text-primaryText"
              completedClassName="!bg-blue-500 text-primaryText"
          >
              2
          </Step>
          <Step 
              //onClick={() => setActiveStep(2)}
              className="bg-hover text-primaryText"
              activeClassName="!bg-blue-500 text-primaryText"
              completedClassName="!bg-blue-500 text-primaryText"
          >
              3
          </Step>
        </Stepper>
      <section className="mt-16 flex justify-center text-primaryText">

        {activeStep === 0 && (
            <StepOneRegister email={email} setEmail={setEmail} isValid={isValid} handleEmailChange={handleEmailChange}/>
        )}
        {activeStep === 1 && (
            <StepTwoRegister setSuccessCode={setSuccessCode} handleNext={handleNext}/>
        )}
        {activeStep === 2 && (
            <StepThreeRegister email={email}/>
        )}

      </section>
      <div className="mt-16 flex justify-between">
        {isFirstStep ? (
          <div></div>
        ): (
          <Button onClick={handlePrev} disabled={isFirstStep} className="bg-componentColor hover:bg-hover">
            Back
          </Button>
        )}
        <Button onClick={() => {handleNext(); handleSteps()}} disabled={isLastStep || !isValid} className='bg-blue-500 hover:blue-300'>
          {isLastStep ? "Register" : "Next"}
        </Button>
      </div>
    </div>
  );
}