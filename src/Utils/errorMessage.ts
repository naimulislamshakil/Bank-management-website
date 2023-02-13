import { toast } from 'react-toastify';

const errorMessage = (message: string) => {
	toast.error(message);
};

export default errorMessage;
