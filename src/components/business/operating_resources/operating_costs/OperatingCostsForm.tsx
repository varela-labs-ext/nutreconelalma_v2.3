import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";

import { useEffect, useRef, useState } from "react";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";

import CalculationService from "@/logic/services/CalculationService";
import OperatingCostsAccourd from "./OperatingCostsAccourd";

import { getProductionPerMonth, handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";

interface OperatingCostsFormProps {
    inCentralTypeEdt: CentralTypeIdEnum;
}

const OperatingCostsForm = (props: OperatingCostsFormProps) => {
    const {
        activeSettings,
        activeMaintenanceCosts,
        activeProductionCosts,
        setActiveMaintenanceCosts,
        setActiveProductionCosts
    } = useMixingCenterContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalMaintenanceCosts, setInternalMaintenanceCosts] = useState<MaintenanceCostsGroupModel | null>(null);
    const [internalProductionCosts, setInternalProductionCosts] = useState<ProductionCostsGroupModel | null>(null);

    const debounceRefByMaintenanceCosts = useRef<number | null>(null);
    const debounceRefByProductionCosts = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalMaintenanceCosts, activeMaintenanceCosts);
        safeSetState(setInternalProductionCosts, activeProductionCosts);
        setLoaded(true);
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalMaintenanceCosts, activeMaintenanceCosts);
    }, [activeMaintenanceCosts]);

    useEffect(() => {
        safeSetState(setInternalProductionCosts, activeProductionCosts);
    }, [activeProductionCosts]);

    // Cambio en interno → actualizar contexto (con debounce)
    useEffect(() => {
        if (internalMaintenanceCosts) {
            handleOnInternalModelChange(
                debounceRefByMaintenanceCosts,
                internalMaintenanceCosts,
                activeMaintenanceCosts,
                setActiveMaintenanceCosts);
        };
    }, [internalMaintenanceCosts]);

    useEffect(() => {
        if (internalProductionCosts) {
            handleOnInternalModelChange(
                debounceRefByProductionCosts,
                internalProductionCosts,
                activeProductionCosts,
                setActiveProductionCosts);
        };
    }, [internalProductionCosts]);

    const handleOnMaintenanceCostsChange = (inNewItem: MaintenanceCostsGroupModel) => {
        CalculationService.computeMaintenanceCosts(inNewItem, activeSettings.productionLines, getProductionPerMonth(activeSettings));
        console.log("handleOnMaintenanceCostsChange....... CALCULADO....");
        console.log(inNewItem);
        setInternalMaintenanceCosts(inNewItem);
    }

    const handleOnProductionCostsChange = (inNewItem: ProductionCostsGroupModel) => {
        CalculationService.computeProductionCosts(inNewItem, activeSettings.productionLines, getProductionPerMonth(activeSettings));
        console.log("handleOnProductionCostsChange....... CALCULADO....");
        console.log(inNewItem);
        setInternalProductionCosts(inNewItem);
    }

    return (
        <OperatingCostsAccourd
            inCentralType={props.inCentralTypeEdt}
            inMaintenanceCostsData={internalMaintenanceCosts ?? new MaintenanceCostsGroupModel()}
            inProductionCostsData={internalProductionCosts ?? new ProductionCostsGroupModel()}
            inProductionLines={activeSettings.productionLines}
            inProductionPerMonth={getProductionPerMonth(activeSettings)}
            onMaintenanceCostsChange={handleOnMaintenanceCostsChange}
            onProductionCostsChange={handleOnProductionCostsChange}
        />
    );
}

export default OperatingCostsForm;