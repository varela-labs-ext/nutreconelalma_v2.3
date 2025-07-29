import { useEffect, useRef, useState } from "react";
import { isValidNumber } from "@/utils/validators";
import ClinicaInputRowModel from "@/logic/models/row_item/ClinicaInputRowModel";
import InputNumberField from "../../ui/inputs/InputNumberField";
import ReadOnlyNumberField from "../../../ui/common/ReadOnlyNumberField";
import CalculationService from "@/logic/services/CalculationService";

interface ClinicaInputEditorProps {
    inData: ClinicaInputRowModel;
    inName: string;
    inShowPresentation: boolean;
    onChange: (inName: string, newItem: ClinicaInputRowModel) => void;
}

const ClinicaInputEditor = (props: ClinicaInputEditorProps) => {
    const [internalData, setInternalData] = useState<ClinicaInputRowModel>(props.inData);
    const debounceRef = useRef<number | null>(null); // Ref para manejar el debounce

    useEffect(() => {
        setInternalData(props.inData);
    }, [props.inData]);

    const handleChange = (inName: string, inValue: number) => {
        if (isValidNumber(inValue)) {
            console.debug(`InsomoEditor. Value: ${inValue}, Name: ${inName}`);

            const output: ClinicaInputRowModel = {
                ...internalData,
                [inName]: inValue,
            };

            // Actualiza los totales dentro del objeto
            CalculationService.computeClinicalInput(output);

            setInternalData(output);

            // Limpiar debounce anterior. Esto es para evitar múltiples llamadas rápidas
            // que puedan generar múltiples actualizaciones innecesarias.
            // Si ya hay un debounce activo, lo cancelamos.
            if (debounceRef.current !== null) {
                clearTimeout(debounceRef.current);
            }

            // Agendar nueva ejecución. Esto es útil para evitar que se llame a onChange demasiadas veces
            // cuando el usuario está escribiendo rápidamente.
            debounceRef.current = setTimeout(() => {
                console.log("ClinicaInputEditor.handleChange() - Debounced call to onChange");
                props.onChange(props.inName, output);
            }, 200);
        }
    };

    const getMainDivClassName = (): string => {
        const base = "flex flex-col md:flex-row md:items-start gap-4 bg-white";
        const over = "hover:bg-purple-50";
        const focus = "focus-within:bg-purple-50";
        const more = "transition-colors duration-300 p-2 border-b border-gray-200";

        return `${base} ${over} ${focus} ${more}`;
    }

    return (
        <div className={getMainDivClassName()}>
            <div className="pt-2 pb-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-7 gap-2 w-full">
                {/* <input type="number" className="w-full sm:w-auto text-left border max-w-full sm:max-w-[110px]" /> */}

                <div className="md:col-span-2 w-full text-left">
                    <div className="pt-2 text-sm text-gray-500 dark:text-white">
                        {internalData.label}
                    </div>
                </div>
                {/* Presentacion (mL) - EDITABLE */}
                <div className="md:col-span-1 w-full ">
                    {props.inShowPresentation && (
                        <InputNumberField
                            label="Presentacion (Ml)"
                            name="presentacionMl"
                            value={internalData.presentacionMl}
                            readOnly={internalData.presentacionMlReadOnly}
                            onChange={handleChange}
                        />
                    )}
                </div>

                {/* Cantidad (ml) - EDITABLE */}
                <div id="cantidadMlDiv" className="md:col-span-1 w-full ">
                    <InputNumberField
                        label="Cantidad (ml)"
                        name="cantidadMl"
                        value={internalData.cantidadMl}
                        readOnly={internalData.cantidadMlReadOnly}
                        onChange={handleChange}
                    />
                </div>

                {/* Cantidad (unidad) - EDITABLE */}
                <div className="md:col-span-1 w-full">
                    <InputNumberField
                        label="Cantidad (unidad)"
                        name="cantidadUnidad"
                        value={internalData.cantidadUnidad}
                        readOnly={internalData.cantidadUnidadReadOnly}
                        onChange={handleChange}
                    />
                </div>

                {/* Costo x mL - CALCULADO - POR AHORA NO AGREGAR */}

                {/* Costo x unidad - EDITABLE */}
                <div className="md:col-span-1 w-full">
                    <InputNumberField
                        label="Costo x unidad"
                        name="costoPorUnidad"
                        value={internalData.costoPorUnidad}
                        readOnly={false}
                        symbol="$"
                        onChange={handleChange}
                    />
                </div>
                {/* Costo Total x Unidad - CALCULADO */}
                <div className="md:col-span-1 w-full">
                    <ReadOnlyNumberField
                        label="Costo Total x Unidad"
                        name="costoTotalPorUnidad"
                        symbol="$"
                        value={internalData.costoTotalPorUnidad}
                    />
                </div>
            </div>
        </div>
    );
}

export default ClinicaInputEditor;