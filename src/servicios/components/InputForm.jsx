
export const InputForm = ( {type= '', placeHolder='', name= ''}) => {
    
    return (
        <input
            className="form-input w-full bg-[rgba(0,0,0,0.0)] border-black col-span-3"
            type={type}
            placeholder={placeHolder}
            name={name}
        />
    );
};
