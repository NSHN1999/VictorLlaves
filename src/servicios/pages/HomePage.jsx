import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <>
        <section className="h-[600px] w-full bg-[#EAE21E] rounded-xl p-[10px]">
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
            <div className="p-[10px] pb-[40px] mt-[40px] bg-white rounded-xl shadow-lg">
                <h2 className="1xl text-center h-auto py-[15px] text-neutral-700">SERVICIOS</h2>
                <div className="grid grid-cols-2 gap-4 gap-y-5 text-sm font-extralight">
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                    <button className="px-4 py-[2px] rounded-full bg-green-900 text-white">
                        Cerrajeria
                    </button>
                </div>
                <div className="flex justify-center content-center pt-[40px] font-extralight">
                    <Link 
                        className="px-4 py-[2px] bg-cyan-900 active:bg-cyan-700 text-white rounded-full"
                        to="/solicitudes"    
                    >
                        Enviar solicitud
                    </Link>
                </div>
            </div>
        </section>
        </>
    );
};
