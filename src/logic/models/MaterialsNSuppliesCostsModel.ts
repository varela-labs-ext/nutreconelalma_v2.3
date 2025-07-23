import AutomatedEquipmentGroupModel from "./operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "./operating_resources/HygieneAndCleaningGroupModel";
import PersonalProtectionModel from "./operating_resources/PersonalProtectionGroupModel";
import SterileWorkEquipmentGroupModel from "./operating_resources/SterileWorkEquipmentGroupModel";


class MaterialsNSuppliesCostsModel {
    public sterileWorkEquipment: SterileWorkEquipmentGroupModel;
    public hygieneAndCleaning: HygieneAndCleaningGroupModel;
    public personalProtection: PersonalProtectionModel;
    public automatedEquipment: AutomatedEquipmentGroupModel;

    constructor() {
        this.sterileWorkEquipment = new SterileWorkEquipmentGroupModel();
        this.hygieneAndCleaning = new HygieneAndCleaningGroupModel();
        this.personalProtection = new PersonalProtectionModel();
        this.automatedEquipment = new AutomatedEquipmentGroupModel();
    }
}

export default MaterialsNSuppliesCostsModel;