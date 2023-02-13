import { toast } from 'react-toastify';

const successMessage = (message: string) => {
	toast.success(message);
};

export default successMessage;
