import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { signup, error, isLoading } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			await signup(email, password, name);
			navigate("/verify-email");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text'>
					Crear una cuenta
				</h2>

				<form onSubmit={handleSignUp}>
					<Input
						icon={User}
						type='text'
						placeholder='Nombre completo'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
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
					{error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
					<PasswordStrengthMeter password={password} />

					<motion.button
						className='mt-5 w-full py-3 px-4 
						bg-gradient-to-r from-amber-300 to-orange-400 text-gray-900 dark:from-amber-500 dark:to-orange-600 dark:text-white 
						font-bold rounded-lg shadow-lg 
						enabled:hover:from-amber-400 enabled:hover:to-orange-500 enabled:dark:hover:from-amber-600 enabled:dark:hover:to-orange-700 
						enabled:focus:outline-none enabled:focus:ring-2 enabled:focus:ring-amber-300 enabled:dark:focus:ring-amber-500 
						enabled:focus:ring-offset-2 enabled:focus:ring-offset-gray-100 enabled:dark:focus:ring-offset-gray-900 
						focus:ring-opacity-50 
						disabled:opacity-50 disabled:cursor-not-allowed
						transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Inscribirse"}
					</motion.button>
				</form>
			</div>
			<div className='px-8 py-4 bg-gray-50 dark:bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-600 dark:text-gray-400'>
					¿Ya tienes una cuenta?{" "}
					<Link to={"/login"} className='text-amber-600 dark:text-amber-400 hover:underline'>
						Acceso
					</Link>
				</p>
			</div>
		</motion.div>
	);
};
export default SignUpPage;
