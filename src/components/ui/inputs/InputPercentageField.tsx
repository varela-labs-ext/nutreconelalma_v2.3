import { useState } from "react";
interface InputPercentageFieldProps {
    label: string;
    name: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
    hayError?: boolean;
}

export const InputPercentageField = (props: InputPercentageFieldProps) => {
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    const handleInternalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        // Solo permitir números enteros del 0 al 100
        const numericValue = parseInt(input, 10);

        console.log(numericValue);

        props.onChange(e);
    };

    const getContainerClass = () => {
        const baseClass = "flex";
        const leftClass = "flex-row items-center justify-between gap-2";
        const topClass = "flex-col";

        return `${baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-500 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-500 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getInputClass = () => {
        const baseClass = "border rounded-xl px-3 py-2 w-full text-left pr-7";
        const baseClassB = "shadow-sm focus:outline-none focus:ring-1";
        const moreClass = "dark:bg-gray-800 dark:text-white text-red-500";

        const borderClass = props.hayError
            ? "border-2 border-orange-500 focus:border-orange-500 focus:ring-orange-500"
            : "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";

        return `${baseClass} ${baseClassB} ${borderClass} ${moreClass}`;
    };

    const percentSymbolClass =
        "absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none";

    const inputWrapperClass = "relative w-full"; // relative max-w-[200px]

    return (
        <div className={getContainerClass()} >
            <label htmlFor={props.name} className={getLabelClass()} >
                {props.label}
            </label>
            < div className={inputWrapperClass} >
                <input
                    type="number"
                    inputMode="numeric"
                    name={props.name}
                    value={props.value}
                    onChange={handleInternalChange}
                    className={getInputClass()}
                    min={0}
                    max={100}
                    step={1}
                />
                <span className={percentSymbolClass}>%</span>
            </div>
        </div>
    );
};

export default InputPercentageField;
