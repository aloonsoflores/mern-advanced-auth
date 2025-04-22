import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-gray-50 dark:from-gray-900 via-amber-50 dark:via-amber-900 to-orange-50 dark:to-orange-900 flex items-center justify-center relative overflow-hidden'>
			{/* Simple Loading Spinner */}
			<motion.div
				className='w-16 h-16 border-4 border-t-4 border-t-amber-300 dark:border-t-amber-500 border-amber-800 dark:border-amber-200 rounded-full'
				animate={{ rotate: 360 }}
				transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
			/>
		</div>
	);
};

export default LoadingSpinner;
