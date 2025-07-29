import InputNumberField from "@/components/ui/inputs/InputNumberField";
import AmountItemModel from "@/logic/models/row_item/AmountItemRowModel";
import UnitCostItemModel from "@/logic/models/row_item/UnitCostItemRowModel";
import CalculationService from "@/logic/services/CalculationService";
import ReadOnlyNumberField from "@/ui/common/ReadOnlyNumberField";
import { isValidNumber } from "@/utils/validators";
import { useEffect, useRef, useState } from "react";

interface AmountItemInputEditorProps {
    inData: AmountItemModel;
    inName: string;
    isReadOnly?: boolean;
    onChange: (inName: string, newItem: AmountItemModel) => void;
}

const AmountItemInputEditor = (props: AmountItemInputEditorProps) => {
    const [internalData, setInternalData] = useState<AmountItemModel>(props.inData);
    const debounceRef = useRef<number | null>(null);

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    const handleChange = (inName: string, inValue: number) => {
        if (isValidNumber(inValue)) {
            const output: AmountItemModel = {
                ...internalData,
                [inName]: inValue,
            };

            // Actualiza los totales dentro del objeto
            // CalculationService.ComputeUnitCostInput(output);

            setInternalData(output);

            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
            }

            debounceRef.current = setTimeout(() => {
                props.onChange(props.inName, output);
            }, 200);
        }
    }

    const getMainDivClassName = (): string => {
        const base = "flex flex-col md:flex-row md:items-start gap-4 bg-white";
        const over = "hover:bg-purple-50";
        const focus = "focus-within:bg-purple-50";
        const more = "transition-colors duration-300 p-2 border-b border-gray-200";

        return `${base} ${over} ${focus} ${more}`;
    }

    const isReadOnly = (): boolean => {
        if (props.isReadOnly === undefined || props.isReadOnly === null) {
            return false;
        }

        return props.isReadOnly;
    }

    return (
        <>
            <div className={getMainDivClassName()}>
                <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 w-full">
                    <div className="md:col-span-3 w-full text-left">
                        <div className="pt-2 text-sm text-gray-500 dark:text-white">
                            {internalData.label}
                        </div>
                    </div>

                    <div className="md:col-span-1 w-full">
                        {!isReadOnly() && (
                            <InputNumberField
                                label="value"
                                name="value"
                                value={internalData.value}
                                readOnly={false}
                                symbol="$"
                                onChange={handleChange}
                            />
                        )}
                        {isReadOnly() && (
                            <ReadOnlyNumberField
                                label="value"
                                name="value"
                                symbol="$"
                                value={internalData.value}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AmountItemInputEditor;