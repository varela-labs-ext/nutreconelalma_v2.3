import PanelView from "@/components/ui/tabs/panel_views/PanelView";
import PanelViewsSelector from "@/components/ui/tabs/panel_views/PanelViewsSelector";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import { Settings, Users, PackageOpen } from "lucide-react";
import OperatingCostsForm from "./operating_costs/OperatingCostsForm";
import StaffPersonnelCostsForm from "./staff_personnel/StaffPersonnelCostsForm";
import MaterialsAndSuppliesCostsForm from "./materials_and_supplies/MaterialsAndSuppliesCostsForm";

interface OperatingResourcesByMixingCentralProps {
    inCentralTypeEdt: CentralTypeIdEnum;
}

const OperatingResourcesByMixingCentral = (props: OperatingResourcesByMixingCentralProps) => {

    const getMixingCentralName = (): string => {
        let name = "Central de Mezclas Manual";

        if (props.inCentralTypeEdt === CentralTypeIdEnum.Automatico) {
            name = "Central de Mezclas Automática";
        }

        return `Parámetros de Operación - ${name}`;
    }

    return (
        <>
            <h3 className="text-lg font-semibold text-green-600 mb-4">{getMixingCentralName()}</h3>
            <PanelViewsSelector defaultIndex={0}>
                <PanelView label="Costos Operativos" icon={<Settings />} status="none">
                    <OperatingCostsForm
                        inCentralTypeEdt={props.inCentralTypeEdt}
                    />
                </PanelView>
                <PanelView label="Staff / Personal" icon={<Users />} status="none">
                    <StaffPersonnelCostsForm
                    // inCentralType={props.inCentralType}
                    />
                </PanelView>
                <PanelView label="Materiales e Insumos" icon={<PackageOpen />} status="none">
                    <MaterialsAndSuppliesCostsForm
                    // inCentralType={props.inCentralType}
                    />
                </PanelView>
            </PanelViewsSelector>
        </>
    );
}

export default OperatingResourcesByMixingCentral;