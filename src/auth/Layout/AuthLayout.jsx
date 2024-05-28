
export const AuthLayout = ({children, title=''}) => {

    return (
        <div className="h-screen w-full flex justify-center p-5 items-center bg-[#EAE21E]">
            <div className="bg-white text-neutral-700 rounded-md w-full p-6  shadow-[0px_px_5px_5px] shadow-[rgba(0,0,0,0.4)]">
                <h1 className="pb-4 text-2xl">{title}</h1>
                {children}
            </div>
        </div>
    );
};

