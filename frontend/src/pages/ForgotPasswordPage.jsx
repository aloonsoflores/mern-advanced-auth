import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-200 to-orange-300 dark:from-amber-400 dark:to-orange-500 text-transparent bg-clip-text'>
					Has olvidado tu contraseña
				</h2>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit}>
						<p className='text-gray-700 dark:text-gray-300 mb-6 text-center'>
							Ingrese su dirección de correo electrónico y le enviaremos un enlace para restablecer su contraseña.
						</p>
						<Input
							icon={Mail}
							type='email'
							placeholder='Dirección de correo electrónico'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full py-3 px-4 bg-gradient-to-r from-amber-300 to-orange-400 text-gray-900 dark:from-amber-500 dark:to-orange-600 dark:text-white font-bold rounded-lg shadow-lg hover:from-amber-400 hover:to-orange-500 dark:hover:from-amber-600 dark:hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-amber-300  dark:focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900 focus:ring-opacity-50 disabled:opacity-50 transition duration-200'
							type='submit'
						>
							{isLoading ? <Loader className='size-6 animate-spin mx-auto' /> : "Enviar enlace de reinicio"}
						</motion.button>
					</form>
				) : (
					<div className='text-center'>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", stiffness: 500, damping: 30 }}
							className='w-16 h-16 bg-amber-300 dark:bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4'
						>
							<Mail className='h-8 w-8 text-gray-900 dark:text-white' />
						</motion.div>
						<p className='text-gray-700 dark:text-gray-300 mb-6'>
							Si existe una cuenta para {email}, recibirá un enlace de restablecimiento de contraseña en breve.
						</p>
					</div>
				)}
			</div>

			<div className='px-8 py-4 bg-gray-50 dark:bg-gray-900 bg-opacity-50 flex justify-center'>
				<Link to={"/login"} className='text-sm text-amber-600 dark:text-amber-400 hover:underline flex items-center'>
					<ArrowLeft className='h-4 w-4 mr-2' /> Volver a iniciar sesión
				</Link>
			</div>
		</motion.div>
	);
};
export default ForgotPasswordPage;
