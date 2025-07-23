import { useState } from "react";
import RawMaterialsOverview from "./RawMaterialsOverview";
import RawMaterialsOtherCosts from "./RawMaterialsOtherCosts";
import AdditionalCostsTotalsModel from "@/logic/models/AdditionalCostsTotalsModel";
import RawMaterialsAccourd from "./RawMaterialsAccourd";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";


interface RawMaterialsSetProps {
    inData: RawMaterialGroupModel;
    inAdditionalCosts: AdditionalCostsTotalsModel;
    inCentralType: CentralTypeIdEnum;
    onChange: (inNewData: RawMaterialGroupModel) => void;
}

const RawMaterialsSet = (props: RawMaterialsSetProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const [showPresentation, setShowPresentation] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <RawMaterialsOverview
                inTotalPerNpt={props.inData.total}
                inShowDetails={showDetails}
                inShowPresentation={showPresentation}
                onShowDetailsChange={setShowDetails}
                onShowPresentation={setShowPresentation}
            />
            {showDetails && (
                <RawMaterialsAccourd
                    inData={props.inData}
                    inShowPresentation={showPresentation}
                    onChange={props.onChange}
                />
            )}
            <RawMaterialsOtherCosts
                inData={props.inAdditionalCosts}
                inCentralType={props.inCentralType}
            />
        </div>
    );
}

export default RawMaterialsSet;