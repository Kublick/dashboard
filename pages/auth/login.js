import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const schema = Yup.object().shape({
	email: Yup.string()
		.required("Email es un campo obligatorio")
		.email("Ingrese un correo valido"),
	password: Yup.string()
		.min(6, "Password mínimo de 6 caracteres")
		.required("El password es obligatorio"),
});

const Login = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
		mode: "onBlur",
	});

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen bg-gray-200">
				<div className="w-1/3 py-2 mx-auto">
					<h2 className="py-4 font-sans text-2xl font-thin text-center text-gray-800">
						Login
					</h2>
					<form
						className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="py-4">
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-bold text-black"
							>
								Email
							</label>
							<input
								type="email"
								className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="email"
								placeholder="Email Usuario"
								ref={register}
								name="email"
							/>
							<ErrorMessage
								errors={errors}
								name="email"
								render={({ message }) => <p className="error-box">{message}</p>}
							/>
						</div>
						<div className="py-4">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-bold text-black"
							>
								Password
							</label>
							<input
								type="text"
								className="input-box focus:outline-none focus:shadow-outline"
								id="password"
								placeholder="Password"
								ref={register}
								name="password"
							/>
							<ErrorMessage
								errors={errors}
								name="password"
								render={({ message }) => <p className="error-box">{message}</p>}
							/>
						</div>
						<input
							type="submit"
							className="mt-4 btn-blue focus:outline-none"
							value="Iniciar Sesión"
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
