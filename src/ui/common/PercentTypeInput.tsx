import { useEffect, useState } from "react";

interface PercentTypeInputProps {
    label: string;
    name: string;
    value: number;
    labelPosition?: "top" | "left";
    labelAlways?: boolean;
    hasFailed?: boolean;
    onChange: (newValue: number) => void;
}

export const PercentTypeInput = (props: PercentTypeInputProps) => {
    const [localValue, setLocalValue] = useState<string>(props.value.toString());

    // const [error, setError] = useState<string | null>("algo");
    const labelPosition = props.labelPosition || "top";
    const labelAlways = props.labelAlways || false;

    // Si cambia el valor desde el padre, actualizamos el local
    useEffect(() => {
        setLocalValue(props.value.toString());
    }, [props.value]);

    const isRealNumber = (inValue: string | undefined | null): boolean => {
        if (inValue !== undefined && inValue !== null && inValue.trim() !== '') {
            const value: number | undefined | null = Number(inValue.replace(",", "."));
            if (!isNaN(value)) {
                if (value >= 0 && value <= 100) {
                    return true;
                }
            }
        }

        return false;
    }

    const handleInternalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;

        // Solo permitir números enteros del 0 al 100
        const numericValue = parseInt(input, 10);

        console.log(numericValue);

        props.onChange(numericValue);
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        let newValue: string = event.target.value;
        console.log(`handleChange: ${event.target.value}`);

        if (isRealNumber(newValue)) {
            // setError(null);
            newValue = newValue.replace(",", ".");
        } else {
            // setError("error");
            newValue = "";
        }

        setLocalValue(newValue);
    };

    const callOnChange = () => {
        let value: number = Number(localValue);
        if (value !== props.value) {
            console.log(`Input: ${props.name} changed to ${value}`);
            //props.name,
            props.onChange(value);
        }
    }

    const commitChange = () => {
        if (isRealNumber(localValue)) {
            callOnChange();
        } else {
            setLocalValue("0");
            // setError(null);
            callOnChange();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.currentTarget.blur(); // opcional: para disparar también onBlur
        }
    };

    const getValue = (): string => {
        //cleanUp(localValue)
        return localValue;
    }

    const getContainerClass = () => {
        const baseClass = "flex";
        const leftClass = "flex-row items-center justify-between gap-2";
        const topClass = "flex-col";

        return `${baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getLabelClass = () => {
        const baseClass = "block md:hidden"; /* Esto hace que cuando sea mayor o igual a md (el size) se oculte */
        const alwaysClass = "";
        const leftClass = "w-32 text-sm font-medium text-gray-700 dark:text-gray-300";
        const topClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

        return `${labelAlways === true ? alwaysClass : baseClass} ${labelPosition === "left" ? leftClass : topClass}`;
    };

    const getInputClass = () => {
        const baseClass = "border rounded-lg px-3 py-2 w-full text-left pr-7";
        const baseClassB = "text-gray-500 shadow-sm focus:outline-none focus:ring-1";
        const moreClass = "dark:bg-gray-800 dark:text-white";

        const borderClass = props.hasFailed
            ? "border-2 border-orange-500 focus:border-orange-500 focus:ring-orange-500"
            : "border border-gray-200 focus:border-purple-500 focus:ring-purple-500";

        return `${baseClass} ${baseClassB} ${borderClass} ${moreClass}`;
    };

    const percentSymbolClass =
        "absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none";

    const inputWrapperClass = "relative w-full";

    return (
        <div className={getContainerClass()} >
            <label htmlFor={props.name} className={getLabelClass()} >
                {props.label}
            </label>
            < div className={inputWrapperClass} >
                <input
                    type="number"
                    name={props.name}
                    value={getValue()}
                    onChange={handleChange}
                    onBlur={commitChange}
                    onKeyDown={handleKeyDown}

                    min={0}
                    max={100}
                    step={1}
                    className={getInputClass()}
                />
                <span className={percentSymbolClass}>%</span>
            </div>
        </div>
    );
};

export default PercentTypeInput;
