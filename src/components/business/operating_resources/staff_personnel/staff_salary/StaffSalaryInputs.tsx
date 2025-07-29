import AmountItemInputEditor from "@/components/business/editors/AmountItemInputEditor";
import JustValueInputEditor from "@/components/business/editors/JustValueInputEditor";
import PorcentajeItemInputEditor from "@/components/business/editors/PorcentajeItemInputEditor";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import AmountItemModel from "@/logic/models/row_item/AmountItemRowModel";
import JustValueItemModel from "@/logic/models/row_item/OneValueItemRowModel";
import PorcentajeItemModel from "@/logic/models/row_item/PorcentajeItemRowModel";
import StaffSalaryHeaders from "./StaffSalaryHeaders";


interface StaffSalaryInputsProps {
    title?: string;
    inData: StaffSalaryGroupModel;
    onAmountItemModelInputChange: (inPropertyName: string, inNewItem: AmountItemModel) => void;
    onPorcentajeInputChange: (inPropertyName: string, inNewItem: PorcentajeItemModel) => void;
    onJustValueInputChange: (inPropertyName: string, inNewItem: JustValueItemModel) => void;
}

const StaffSalaryInputs = (props: StaffSalaryInputsProps) => {

    return (
        <div>
            <div><h2>Costos de horas / persona</h2></div>
            <div>
                <JustValueInputEditor
                    inData={props.inData.horasTrabajoMensual}
                    inName="horasTrabajoMensual"
                    onChange={props.onJustValueInputChange}
                />
                <JustValueInputEditor
                    inData={props.inData.personalPreparacion}
                    inName="personalPreparacion"
                    onChange={props.onJustValueInputChange}
                />
                <JustValueInputEditor
                    inData={props.inData.horasPersonalFarmaceuticoPorNP}
                    inName="horasPersonalFarmaceuticoPorNP"
                    onChange={props.onJustValueInputChange}
                />
            </div>
            <StaffSalaryHeaders title={props.title} />
            <div>
                <AmountItemInputEditor
                    inData={props.inData.salarioBasico}
                    inName="salarioBasico"
                    onChange={props.onAmountItemModelInputChange}
                />
                <AmountItemInputEditor
                    inData={props.inData.costoEmpresa}
                    inName="costoEmpresa"
                    onChange={props.onAmountItemModelInputChange}
                />
                <AmountItemInputEditor
                    inData={props.inData.auxilioTransporte}
                    inName="auxilioTransporte"
                    onChange={props.onAmountItemModelInputChange}
                />
            </div>
            <div>
                <PorcentajeItemInputEditor
                    inData={props.inData.cesantias}
                    inName="cesantias"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.primas}
                    inName="primas"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.vacaciones}
                    inName="vacaciones"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.interesesCesantias}
                    inName="interesesCesantias"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.salud}
                    inName="salud"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.pension}
                    inName="pension"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.arlRiesgo1}
                    inName="arlRiesgo1"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.cajaCompensacion}
                    inName="cajaCompensacion"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.sena}
                    inName="sena"
                    onChange={props.onPorcentajeInputChange}
                />
                <PorcentajeItemInputEditor
                    inData={props.inData.icbf}
                    inName="icbf"
                    onChange={props.onPorcentajeInputChange}
                />
            </div>
            <div>
                <AmountItemInputEditor
                    inData={props.inData.subsidioTransporte}
                    inName="subsidioTransporte"
                    onChange={props.onAmountItemModelInputChange}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalParafiscales}
                    inName="totalParafiscales"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalCompensacionSalarial}
                    inName="totalCompensacionSalarial"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.totalValorHora}
                    inName="totalValorHora"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
                <AmountItemInputEditor
                    inData={props.inData.costoPersonalFarmaceuticoPorPreparacion}
                    inName="costoPersonalFarmaceuticoPorPreparacion"
                    isReadOnly={true}
                    onChange={(x, y) => (console.log("nothing"))}
                />
            </div>
        </div>
    );
}

export default StaffSalaryInputs;