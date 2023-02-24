import React, { useState } from 'react';
import Stepper from '../../Components/Stepper';
import Controller from '../../Components/Controll';
import Step1 from '../Step/Step1';
import Step2 from '../Step/Step2';
import Step3 from '../Step/Step3';
import Step4 from '../Step/Step4';

const index = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [currentStep, setCurrentStep] = useState(1);

	const steps = [1, 2, 3, 4, 5];

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
				break;
		}
	};
	return (
		<div>
			{/* Stepper */}
			<Stepper steps={steps} currentStep={currentStep} />
			{/* Navigation Controller */}
			<Controller />
		</div>
	);
};

export default index;
