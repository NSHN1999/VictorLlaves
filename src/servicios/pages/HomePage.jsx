import { Link } from "react-router-dom";

import { VictorLlavesLayout } from "../Layout";

export const HomePage = () => {

    return (
        <VictorLlavesLayout>
            <section className="h-auto w-full bg-[#EAE21E] rounded-xl p-[10px] pb-[20px]">
                <h2 className="text-1xl text-center font-extrabold font-orbitron">CERRAJERÍA</h2>
                <h1 className="text-4xl text-center font-semibold font-orbitron">VíctorLlaves</h1>
                <div className="p-[10px] text-center text-sm">
                    <p>
                        Cerrajería móvil, lectura pin code, llaves perdidas, 
                        carcasas todos los modelos, programación, cierre centralizado, 
                        llaves smart key, cambio de combinaciones y reparaciones.
                    </p>
                </div>
                <h2 className="text-1xl text-center font-semibold text-red-700 font-orbitron">Servicio a domicilio</h2>
                <div className="p-[10px] pb-[40px] mt-[40px] bg-white rounded-md shadow-[0px_px_5px_5px] shadow-[rgba(0,0,0,0.4)]">
                    <h2 className="1xl text-center h-auto py-[15px] text-neutral-700 font-medium">¿Tienes un problema con tu llave?</h2>
                    <p className="text-center p-[10px] font-poppins text-neutral-700">
                        Envíame una solicitud para mantener garantia de nuestro acuerdo.
                    </p>
                    <div className="flex justify-center content-center pt-[30px] font-light">
                        <Link 
                            className="px-4 py-2 bg-cyan-800 active:bg-cyan-700 text-white rounded-full"
                            to="/solicitud"    
                        >
                            Enviar solicitud
                        </Link>
                    </div>
                </div>
            </section>
        </VictorLlavesLayout>
    );
};
