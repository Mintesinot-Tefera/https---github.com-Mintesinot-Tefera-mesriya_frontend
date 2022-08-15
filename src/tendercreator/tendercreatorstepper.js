import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TenderCreator1 from './tendercreator1';
import TenderCreator2 from './tendercreator2';
import { KeyboardReturnOutlined } from '@material-ui/icons';
import TenderCreatorOpen3 from './tendercreatoropen3';
import TenderCreatorOpen4 from './tendercreatoropen4';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad', 'mmm', 'abc'];

function getSteps() {
  return [<b style={{ color: 'purple' }}>'Enter Personal Details'</b>,
  <b style={{ color: 'purple' }}>'Enter Education Details'</b>,
  <b style={{ color: 'purple' }}>'Enter Address'</b>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <TenderCreator1 />
      );
    case 1:
      return (
        <TenderCreator2 />
      );
    case 2:
      return (
        <TenderCreatorOpen3 />
      );
    case 3:
      return (
        <TenderCreatorOpen4 />
      );


    case 4:
      return (

        <form className="form-group">
          <label>Permanent Address</label>
          <input type="text" placeholder="Permanent Address"></input>
          <br></br>
          <label>Temporary Address</label>
          <input type="text" placeholder="Temporary Address"></input>
        </form>
      );
    default:
      return 'Unknown step';
  }
}
export default function TenderCreatorStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="sm:px-10 lg:px-20  bg-gray-300 h-fit lg:h-screen xl:h-screen pt-8 pb-32" >
      <h5 className="text-gray-900 text-xl font-medium mb-2">
        ጨረታ መልቀቂያ
      </h5>
      <div sx={{ width: '100%' }} className="block rounded-lg shadow-lg bg-white text-center h-full grid grid-cols-2 divide-x-2 border-2 ">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} >
                {/* <StepLabel {...labelProps}>{label}</StepLabel> */}
                <StepLabel {...labelProps}></StepLabel>

              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <div>
              <Typography sx={{ mt: 2, mb: 1 }}>

                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {getStepContent(activeStep)}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="mb-6 mx-16">
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
