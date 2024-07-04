
export const Tab = () => {


    return (
        <div
            role="tablist"
            aria-label="tabs" 
            className="z-0 relative grid grid-cols-3 h-12 rounded-full bg-gray-900/20 items-center overflow-hidden shadow-2xl shadow-900/20 transition"
        >
            <div className="absolute indicator my-auto h-10 top-0 bottom-0 left-0 w-[100px] rounded-full bg-white shadow-md"></div>
            <button
                role="tab"
                aria-selected="true"
                aria-controls="panel-1"
                id="tab-1"
                tabIndex="0"
                className="relative block h-10 tab rounded-full text-center"
            >
                Pendientes
            </button>
            <button
                role="tab"
                aria-selected="true"
                aria-controls="panel-2"
                id="tab-2"
                tabIndex="-1"
                className="relative block h-10 tab rounded-full text-center"
            >
                Resueltas
            </button>
            <button
                role="tab"
                aria-selected="true"
                aria-controls="panel-3"
                id="tab-3"
                tabIndex="-1"
                className="relative block h-10 tab rounded-full text-center"
            >
                Anuladas
            </button>
        </div>
    );
};
