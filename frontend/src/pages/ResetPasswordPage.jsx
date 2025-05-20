import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPassword, error, isLoading, message } = useAuthStore();

	const { token } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Las contraseñas no coinciden");
			return;
		}
		try {
			await resetPassword(token, password);

			toast.success("Restablecimiento de contraseña exitoso, redireccionando a la página de inicio de sesión...");
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error) {
			console.error(error);
			toast.error(error.message || "Error al restablecer la contraseña");
		}
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
					Restablecer contraseña
				</h2>
				{error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
				{message && <p className='text-green-500 text-sm mb-4'>{message}</p>}

				<form onSubmit={handleSubmit}>
					<Input
						icon={Lock}
						type='password'
						placeholder='Nueva contraseña'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Confirmar nueva contraseña'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>

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
						{isLoading ? "Restableciendo..." : "Establecer nueva contraseña"}
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};
export default ResetPasswordPage;
