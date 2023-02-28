import React, { useState } from 'react';
import Step1 from '../Step/Step1';
import Step2 from '../Step/Step2';
import Step3 from '../Step/Step3';
import Step4 from '../Step/Step4';
import {
	Box,
	Button,
	Container,
	Paper,
	Step,
	StepLabel,
	Stepper,
	Typography,
} from '@mui/material';

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [currentStep, setCurrentStep] = useState(1);

	const steps = [1, 2, 3, 4, 5];

	const handleNext = () => {
		setCurrentStep(currentStep + 1);
	};

	const handleBack = () => {
		setCurrentStep(currentStep - 1);
	};

	const displayStep = (step: number) => {
		switch (step) {
			case 1:
				return <Step1 />;
			case 2:
				return <Step2 />;
			case 3:
				return <Step3 />;
			case 4:
				return <Step4 />;

			default:
				throw new Error('Unknown step');
		}
	};
	return (
		<Box>
			<Container maxWidth="sm" component="main" sx={{ mb: 4 }}>
				<Paper
					variant="outlined"
					sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
				>
					<Typography variant="h5" align="center">
						Create a account
					</Typography>

					<Stepper activeStep={currentStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((step, index) => (
							<Step key={index}>
								<StepLabel></StepLabel>
							</Step>
						))}
					</Stepper>
					{currentStep === steps.length ? (
						<React.Fragment>
							<Typography variant="h5" gutterBottom>
								Thank you for your order.
							</Typography>
							<Typography variant="subtitle1">
								Your order number is #2001539. We have emailed your order
								confirmation, and will send you an update when your order has
								shipped.
							</Typography>
						</React.Fragment>
					) : (
						<React.Fragment>
							{displayStep(currentStep)}
							<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								{currentStep !== 1 && (
									<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
										Back
									</Button>
								)}
								<Button
									variant="contained"
									onClick={handleNext}
									sx={{ mt: 3, ml: 1 }}
								>
									{currentStep === steps.length - 1 ? 'Place order' : 'Next'}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</Paper>
			</Container>
		</Box>
	);
};

export default index;
