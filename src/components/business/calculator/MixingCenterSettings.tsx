import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import MixingCenterSet from "./mixing_center/MixingCenterSet";
import { useEffect, useRef, useState } from "react";
import { handleOnInternalModelChange, safeSetState } from "@/context/MixingCenterContext/MixingCenterUtils";
import useMixingCenterContext from "@/context/MixingCenterContext/useMixingCenterContext";


interface MixingCenterSettingsProps {
}

const MixingCenterSettings = (props: MixingCenterSettingsProps) => {
    const {
        activeSettings,
        setActiveSettings
    } = useMixingCenterContext();

    const [loaded, setLoaded] = useState<boolean>(false);
    const [internalMixingCenterSettings, setInternalMixingCenterSettings] = useState<MixingCenterSettingsModel | null>(null);

    const debounceRefByMixingCenter = useRef<number | null>(null);

    // Montaje inicial
    useEffect(() => {
        safeSetState(setInternalMixingCenterSettings, activeSettings);
        setLoaded(true);
    }, []);

    // Cambio en el contexto externo → actualizar interno
    useEffect(() => {
        safeSetState(setInternalMixingCenterSettings, activeSettings);
    }, [activeSettings]);

    useEffect(() => {
        if (internalMixingCenterSettings) {
            handleOnInternalModelChange(
                debounceRefByMixingCenter,
                internalMixingCenterSettings,
                activeSettings,
                setActiveSettings);
        };
    }, [internalMixingCenterSettings]);

    const handleOnMixingCenterSetChange = (inNewData: MixingCenterSettingsModel): void => {
        setInternalMixingCenterSettings(inNewData);
    }

    return (
        <>
            <MixingCenterSet
                inData={internalMixingCenterSettings ?? new MixingCenterSettingsModel()}
                onChange={handleOnMixingCenterSetChange} />
        </>
    );
}

export default MixingCenterSettings;