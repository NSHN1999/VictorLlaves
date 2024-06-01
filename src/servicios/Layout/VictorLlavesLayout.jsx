import { Footer, NavBar } from "../../ui";

export const VictorLlavesLayout = ({children}) => {
    return (
        <>
        <NavBar/>
        <section className="pt-16 px-5 pb-7 bg-gradient-to-b from-[#EAE21E] to-[#f5b700]">
                {children}
        </section>
        <Footer/>
        </>
    );
};
