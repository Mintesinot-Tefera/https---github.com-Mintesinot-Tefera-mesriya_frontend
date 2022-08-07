import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { KeyboardReturnOutlined } from '@material-ui/icons';
import ProfileBuilderPage1 from './profilebuilderpage1';
import ProfileBuilderPage2 from './profilebuilderpage2';
import ProfileBuilderPage3 from './profilebuilderpage3';
import ProfileBuilderPage4 from './profilebuilderpage4';

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
                <ProfileBuilderPage1 />
            );
        case 1:
            return (
                <ProfileBuilderPage2 />
            );
        case 2:
            return (
                <ProfileBuilderPage3 />
            );
        case 3:
            return (
                <ProfileBuilderPage4 />
            );


        case 4:
            return (

                <form class="form-group">
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
export default function ProfileBuilderStepper() {
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
        <div className="mx-20 justify-center my-2" >

            <div sx={{ width: '100%' }} className="block bg-white text-center h-fit grid grid-cols-3 bg-gray-300">
                <div class="grid grid-rows-3">
                    <div class="flex flex-row items-center pb-10  gap-x-6">
                        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <div>
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h4 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">ስለ ድርጅታችሁ ይግለጹ</h4>
                        <h4 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">ይህ ገጽ የናንተን ማንነት የሚገልጹበት ድረ ገጽ ስለሆነ ተጠንቅቀው ይሙሉ</h4>
                    </div>
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
                </div>

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
                        <div class="block rounded-lg shadow-lg bg-white text-center h-fit border-2 col-span-2">
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
