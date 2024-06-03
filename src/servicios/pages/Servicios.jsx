
export const Servicios = () => {
    let activado = true;
    const handleColorButton = () => {
        
        
        activado ? !activado : activado;
    };

    return (
        <section className="h-[600px] w-full bg-[#EAE21E] rounded-xl p-[10px] overflow-hidden">
            <h1 className="text-4xl text-center font-orbitron mb-6">Servicios</h1>
            <nav className="flex flex-row">
                <button 
                    className={`text-center px-2 py-1 rounded-t-md basis-1/3 ${activado ? 'bg-white': 'bg-[rgba(0,0,0,0.5)]'}`}
                    onClick={handleColorButton}
                >
                    Proceso
                </button>
                <button 
                    className={`text-center px-2 py-1 rounded-t-md basis-1/3 ${activado ? 'bg-white': 'bg-[rgba(0,0,0,0.5)]'}`}
                >
                    Resueltas
                </button>
                <button 
                    className={`text-center px-2 py-1 rounded-t-md basis-1/3 ${activado ? 'bg-white': 'bg-[rgba(0,0,0,0.5)]'}`}
                >
                    Anuladas
                </button>
            </nav>
            <div className="flex flex-col h-[70%] w-full rounded-b-md bg-white shadow-inner shadow-[rgba(0,0,0,0.5)] overflow-y-scroll">

            </div>
        </section>
    );
};
