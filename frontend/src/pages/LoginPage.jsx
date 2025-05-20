import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { login, isLoading, error } = useAuthStore();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text'>
					Bienvenido de nuevo
				</h2>

				<form onSubmit={handleLogin}>
					<Input
						icon={Mail}
						type='email'
						placeholder='Dirección de correo electrónico'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Contraseña'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className='flex items-center mb-6'>
						<Link to='/forgot-password' className='text-sm text-amber-600 dark:text-amber-400 hover:underline'>
							¿Has olvidado tu contraseña?
						</Link>
					</div>
					{error && <p className='text-red-500 font-semibold mb-2'>{error}</p>}

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-3 px-4 
						bg-gradient-to-r from-amber-300 to-orange-400 text-gray-900 dark:from-amber-500 dark:to-orange-600 dark:text-white 
						font-bold rounded-lg shadow-lg 
						enabled:hover:from-amber-400 enabled:hover:to-orange-500 enabled:dark:hover:from-amber-600 enabled:dark:hover:to-orange-700 
						enabled:focus:outline-none enabled:focus:ring-2 enabled:focus:ring-amber-300 enabled:dark:focus:ring-amber-500 
						enabled:focus:ring-offset-2 enabled:focus:ring-offset-gray-100 enabled:dark:focus:ring-offset-gray-900 
						focus:ring-opacity-50 
						disabled:opacity-50 disabled:cursor-not-allowed
						transition duration-200'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className='w-6 h-6 animate-spin  mx-auto' /> : "Acceso"}
					</motion.button>
				</form>
			</div>
			<div className='px-8 py-4 bg-gray-50 dark:bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-600 dark:text-gray-400'>
					¿No tienes una cuenta?{" "}
					<Link to='/signup' className='text-amber-600 dark:text-amber-400 hover:underline'>
						Inscribirse
					</Link>
				</p>
			</div>
		</motion.div>
	);
};
export default LoginPage;
