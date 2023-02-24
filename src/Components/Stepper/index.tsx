import React, { useState, useEffect, useRef } from 'react';
import { boolean, number } from 'yup';

type props = {
	steps: number[];
	currentStep: number;
};

const index = ({ steps, currentStep }: props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [newStep, setNewStep] = useState([
		{
			description: number,
			completed: boolean,
			highlighted: boolean,
			selected: boolean,
		},
	]);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const stepRef = useRef<HTMLDivElement | any>(null);

	const displayStep = newStep.map((step, index) => {
		return (
			<div
				key={index}
				className={
					index !== newStep.length - 1
						? 'w-full flex items-center'
						: 'flex  items-center'
				}
			>
				<div className="relative flex flex-col items-center text-teal-600">
					<div
						className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex justify-center items-center py-3 `}
					>
						{/* Display Number */}1
					</div>
				</div>

				<div className="flex-auto border-t-2 transition duration-500 ease-in-out">
					{/* Display line */}
				</div>
			</div>
		);
	});

	const updateStep = (nextStep: any, step: any) => {
		const newSteps = [...step];
		let count = 0;

		while (count < newSteps.length) {
			//current step
			if (count === nextStep) {
				newSteps[count] = {
					...newSteps[count],
					highlighted: true,
					selected: true,
					completed: true,
				};
				count++;
			}
			//step complete
			else if (count < nextStep) {
				newSteps[count] = {
					...newSteps[count],
					highlighted: false,
					selected: true,
					completed: true,
				};
				count++;
			}
			// step pending
			else {
				newSteps[count] = {
					...newSteps[count],
					highlighted: false,
					selected: false,
					completed: false,
				};
				count++;
			}
		}

		return newSteps;
	};
	//  Add useEffect
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		// Create a object
		const stepsState = steps.map((step, index) =>
			Object.assign(
				{},
				{
					description: step,
					completed: false,
					highlighted: index === 0 ? true : false,
					selected: index === 0 ? true : false,
				}
			)
		);

		stepRef.current = stepsState;
		const current: any = updateStep(currentStep - 1, stepRef.current);
		setNewStep(current);
	}, [steps, currentStep]);
	return (
		<div className="flex justify-center items-center mx-4 p-4">
			{displayStep}
		</div>
	);
};

export default index;
