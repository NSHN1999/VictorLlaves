import { useNavigate } from "react-router-dom";

export const Solicitud = () => {

    const navigate = useNavigate();

    const onNewSolicitud = ( event) => {
        event.preventDefault();
        navigate('/servicios');
    }

    return (
        <div className="flex justify-center h-[600px] w-full bg-[#EAE21E] py-7">
            <div className="bg-white w-[85%] h-max p-[10px] rounded-md shadow-[0px_px_5px_5px] shadow-[rgba(0,0,0,0.4)]">
                <h1 className="font-poppins text-4xl text-center text-neutral-700 font-light pb-[30px]">Solicitud</h1>
                <form className="grid grid-cols-5 gap-4">
                    <input
                        className="form-input w-full bg-[rgba(0,0,0,0.0)] border-black col-span-6"
                        type="text"
                        placeholder="N° Teléfono"
                        name="numero"
                    />
                    <input
                        className="form-input w-full bg-[rgba(0,0,0,0.0)] border-black col-span-6"
                        type="text"
                        placeholder="Marca Vehiculo"
                        name="marca"
                    />
                    <input
                        className="form-input w-full bg-[rgba(0,0,0,0.0)] border-black col-span-6"
                        type="text"
                        placeholder="Año Vehículo"
                        name="año"
                        maxLength={4}
                    />
                    <input
                        className="form-input w-full bg-[rgba(0,0,0,0.0)] border-black col-span-6"
                        type="text"
                        placeholder="Marca Vehiculo"
                        name="marca"
                    />

                    <button 
                        className="text-xs col-start-2 col-end-4 px-4 py-1 bg-cyan-800 active:bg-cyan-700 text-white rounded-full"
                        onClick={() => navigate('/')}    
                    >
                        Volver
                    </button>

                    <button 
                        className="text-xs col-start-4 col-end-6 px-4 py-1 bg-cyan-800 active:bg-cyan-700 text-white rounded-full"
                        onClick={onNewSolicitud}    
                    >
                        Crear Solicitud
                    </button>
                </form>
            </div>
        </div>
    );
};
