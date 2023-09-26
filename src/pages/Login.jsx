import React from "react";
import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <main className="flex w-full h-full items-center justify-between relative ">
      <img
            className="hidden md:block md:absolute md:top-0 md:left-0 h-screen w-[50%] object-cover   "
            src="https://img.freepik.com/vector-gratis/verificacion-usuario-prevencion-acceso-no-autorizado-autenticacion-cuenta-privada-ciberseguridad-personas-que-ingresan-nombre-usuario-contrasena-medidas-seguridad_335657-1592.jpg"
            alt="IMAGEN- LOGIN"
          />
      <div className="flex flex-col md:absolute md:top-0 md:left-[50%] justify-center items-center h-screen w-full md:w-[50%] ">
        <h1 className="font-roboto text-[39.6px] text-center mb-[55px]">
          Iniciar Sesión
        </h1>

        <form className="flex flex-col my-[2px] mt-5">
          <h2>Usuario Clinica</h2>
          <input
            className="border-b-2 border-t-0 border-l-0 border-r-0 border-[#1F1F1F] mt-2 mb-3"
            type="text"
            name=""
            id=""
          />
          <h2>Usuario </h2>
          <input
            className="border-b-2 border-t-0 border-l-0 border-r-0 border-[#1F1F1F] mt-2 mb-3"
            type="text"
            name=""
            id=""
          />
          <div className="relative">
          <h2>Contraseña</h2>
          <input
            className="border-b-2 border-t-0 border-l-0 border-r-0 border-[#1F1F1F] mt-2 w-[260px] xl:w-[440px] "
            type={passwordVisible ? "text" : "password"}
            name="password"
            id="password"
            // placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </div>
      </div>

          <input
            className="w-[260px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-[45px] p-2 my-[12px] text-xl text-white rounded-lg bg-gradient-to-r from-[#1B4D3E] to-[#1B4D3E]"
            type="button"
            value="Continuar"
          />
        </form>
        <p className="font-semibold text-[12px] mt-[12px] text-center p-2">
          Todavia no tienes una cuenta?{" "}
          <Anchor to="/" className="text-[#4338CA]">
            Registrate
          </Anchor>
          !
        </p>
      </div>
    </main>
  );
};

export default Login;
