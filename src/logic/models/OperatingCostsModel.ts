import MaintenanceCostsGroupModel from "./operating_resources/MaintenanceCostsGroupModel";
import ProductionCostsGroupModel from "./operating_resources/ProductionCostsGroupModel";

class OperatingCostsModel {
    public maintenanceCosts: MaintenanceCostsGroupModel;
    public productionCosts: ProductionCostsGroupModel;

    constructor() {
        this.maintenanceCosts = new MaintenanceCostsGroupModel();
        this.productionCosts = new ProductionCostsGroupModel();
    }
}

export default OperatingCostsModel;