import { Button } from '@mui/material';
import React from 'react';

const index = () => {
	return (
		<div className="flex justify-center items-center mt-4">
			{/* Back Button */}
			<Button
				style={{ marginRight: '350px' }}
				variant="contained"
				color="error"
			>
				Back
			</Button>
			{/* Next Button */}
			<Button variant="contained" color="success">
				Next
			</Button>
		</div>
	);
};

export default index;
