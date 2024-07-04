import { Tab, TabPanelUno} from "../components";

export const Servicios = () => {
    
    return (
        <section className="h-[600px] w-full bg-[#EAE21E] rounded-xl p-[10px] overflow-hidden">
            <h1 className="text-4xl text-center font-orbitron mb-6">Servicios</h1>
            <Tab/>
            <TabPanelUno/>
        </section>
    );
};
