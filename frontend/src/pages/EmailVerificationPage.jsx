import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
	const [code, setCode] = useState(["", "", "", "", "", ""]);
	const inputRefs = useRef([]);
	const navigate = useNavigate();

	const { error, isLoading, verifyEmail } = useAuthStore();

	const handleChange = (index, value) => {
		const newCode = [...code];

		// Handle pasted content
		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
			setCode(newCode);

			// Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRefs.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);

			// Move focus to the next input field if value is entered
			if (value && index < 5) {
				inputRefs.current[index + 1].focus();
			}
		}
	};

	const handleKeyDown = (index, e) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1].focus();
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const verificationCode = code.join("");
		try {
			await verifyEmail(verificationCode);
			navigate("/");
			toast.success("Correo electrónico verificado exitosamente");
		} catch (error) {
			console.log(error);
		}
	};

	// Auto submit when all fields are filled
	useEffect(() => {
		if (code.every((digit) => digit !== "")) {
			handleSubmit(new Event("submit"));
		}
	}, [code]);

	return (
		<div className='max-w-md w-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md'
			>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text'>
					Verifique su correo electrónico
				</h2>
				<p className='text-center text-gray-700 dark:text-gray-300 mb-6'>Introduzca el código de 6 dígitos enviado a su dirección de correo electrónico.</p>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='flex justify-between'>
						{code.map((digit, index) => (
							<input
								key={index}
								ref={(el) => (inputRefs.current[index] = el)}
								type='text'
								maxLength='6'
								value={digit}
								onChange={(e) => handleChange(index, e.target.value)}
								onKeyDown={(e) => handleKeyDown(index, e)}
								className='w-12 h-12 text-center text-2xl font-bold bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white border-2 border-gray-400 dark:border-gray-600 rounded-lg focus:border-amber-300 dark:focus:border-amber-500 focus:outline-none'
							/>
						))}
					</div>
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type='submit'
						disabled={isLoading || code.some((digit) => !digit)}
						className='w-full py-3 px-4
						bg-gradient-to-r from-amber-300 to-orange-400 text-gray-900 dark:from-amber-500 dark:to-orange-600 dark:text-white 
						font-bold rounded-lg shadow-lg 
						enabled:hover:from-amber-400 enabled:hover:to-orange-500 enabled:dark:hover:from-amber-600 enabled:dark:hover:to-orange-700 
						enabled:focus:outline-none enabled:focus:ring-2 enabled:focus:ring-amber-300 enabled:dark:focus:ring-amber-500 
						enabled:focus:ring-offset-2 enabled:focus:ring-offset-gray-100 enabled:dark:focus:ring-offset-gray-900 
						focus:ring-opacity-50 
						disabled:opacity-50 disabled:cursor-not-allowed
						transition duration-200'
					>
						{isLoading ? "Verificando..." : "Verificar correo electrónico"}
					</motion.button>
				</form>
			</motion.div>
		</div>
	);
};
export default EmailVerificationPage;
