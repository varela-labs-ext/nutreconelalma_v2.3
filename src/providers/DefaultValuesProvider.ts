import AutomatedEquipmentDefaults from "@/logic/defaults/AutomatedEquipmentDefaults";
import ChemistAssistantSalaryDefaults from "@/logic/defaults/ChemistAssistantSalaryDefaults";
import ChemistSalaryDefaults from "@/logic/defaults/ChemistSalaryDefaults";
import HygieneAndCleaningDefaults from "@/logic/defaults/HygieneAndCleaningDefaults";
import MaintenanceCostsDefaults from "@/logic/defaults/MaintenanceCostsDefaults";
import MixingCenterSettingsDefaults from "@/logic/defaults/MixingCenterSettingsDefaults";
import PersonalProtectionDefaults from "@/logic/defaults/PersonalProtectionDefaults";
import ProductionCostsDefaults from "@/logic/defaults/ProductionCostsDefaults";
import RawMaterialAdultDefaults from "@/logic/defaults/RawMaterialAdultDefaults";
import RawMaterialNeonatalDefaults from "@/logic/defaults/RawMaterialNeonatalDefaults";
import RawMaterialPediatricDefaults from "@/logic/defaults/RawMaterialPediatricDefaults";
import SterileWorkEquipmentDefaults from "@/logic/defaults/SterileWorkEquipmentDefaults";
import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import PopulationTypeIdEnum from "@/logic/enums/PopulationTypeIdEnum";
import MixingCenterSettingsModel from "@/logic/models/common/MixingCenterSettingsModel";
import AutomatedEquipmentGroupModel from "@/logic/models/operating_resources/AutomatedEquipmentGroupModel";
import HygieneAndCleaningGroupModel from "@/logic/models/operating_resources/HygieneAndCleaningGroupModel";
import MaintenanceCostsGroupModel from "@/logic/models/operating_resources/MaintenanceCostsGroupModel";
import PersonalProtectionGroupModel from "@/logic/models/operating_resources/PersonalProtectionGroupModel";
import ProductionCostsGroupModel from "@/logic/models/operating_resources/ProductionCostsGroupModel";
import StaffSalaryGroupModel from "@/logic/models/operating_resources/StaffSalaryGroupModel";
import SterileWorkEquipmentGroupModel from "@/logic/models/operating_resources/SterileWorkEquipmentGroupModel";
import RawMaterialGroupModel from "@/logic/models/RawMaterialGroupModel";
import CalculationService from "@/logic/services/CalculationService";

class DefaultValuesProvider {
    public static chemistSalaryDefaults(inCentralType: CentralTypeIdEnum): StaffSalaryGroupModel {
        const output: StaffSalaryGroupModel = new StaffSalaryGroupModel();
        const defaults = new ChemistSalaryDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computeChemistSalary(output);

        return output;
    }

    public static chemistAssistantSalaryDefaults(inCentralType: CentralTypeIdEnum): StaffSalaryGroupModel {
        const output: StaffSalaryGroupModel = new StaffSalaryGroupModel();
        const defaults = new ChemistAssistantSalaryDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computeChemistAssistantSalary(output);

        return output;
    }

    public static productionCostsDefaults(inCentralType: CentralTypeIdEnum, inProductionLines: number, inProductionPerMonth: number): ProductionCostsGroupModel {
        const output: ProductionCostsGroupModel = new ProductionCostsGroupModel();
        const defaults = new ProductionCostsDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computeProductionCosts(output, inProductionLines, inProductionPerMonth);

        return output;
    }

    public static maintenanceCostsDefaults(inCentralType: CentralTypeIdEnum, inProductionLines: number, inProductionPerMonth: number): MaintenanceCostsGroupModel {
        const output: MaintenanceCostsGroupModel = new MaintenanceCostsGroupModel();
        const defaults = new MaintenanceCostsDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computeMaintenanceCosts(output, inProductionLines, inProductionPerMonth);

        return output;
    }

    public static sterileWorkEquipmentDefaults(inCentralType: CentralTypeIdEnum): SterileWorkEquipmentGroupModel {
        const output: SterileWorkEquipmentGroupModel = new SterileWorkEquipmentGroupModel();
        const defaults = new SterileWorkEquipmentDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computeSterileWorkEquipment(output);

        return output;
    }

    public static hygieneAndCleaningDefaults(inCentralType: CentralTypeIdEnum): HygieneAndCleaningGroupModel {
        const output: HygieneAndCleaningGroupModel = new HygieneAndCleaningGroupModel();
        const defaults = new HygieneAndCleaningDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computeHygieneAndCleaning(output);

        return output;
    }

    public static personalProtectionDefaults(inCentralType: CentralTypeIdEnum): PersonalProtectionGroupModel {
        const output: PersonalProtectionGroupModel = new PersonalProtectionGroupModel();
        const defaults = new PersonalProtectionDefaults();

        defaults.setDefaultValues(output, inCentralType);

        CalculationService.computePersonalProtection(output);

        return output;
    }

    public static automatedEquipmentDefaults(): AutomatedEquipmentGroupModel {
        const output: AutomatedEquipmentGroupModel = new AutomatedEquipmentGroupModel();
        const defaults = new AutomatedEquipmentDefaults();

        defaults.setDefaultValues(output, CentralTypeIdEnum.Automatico);

        CalculationService.computeAutomatedEquipment(output);

        return output;
    }

    public static rawMaterialsDefaults(inCentralType: CentralTypeIdEnum, inPopulationType: PopulationTypeIdEnum): RawMaterialGroupModel {
        const output: RawMaterialGroupModel = new RawMaterialGroupModel();

        switch (inPopulationType) {
            case PopulationTypeIdEnum.Neonatal:
                const neonatalDefaults = new RawMaterialNeonatalDefaults();
                neonatalDefaults.setDefaultValues(output, inCentralType);
                break
            case PopulationTypeIdEnum.Pediatrica:
                const pediatricDefaults = new RawMaterialPediatricDefaults();
                pediatricDefaults.setDefaultValues(output, inCentralType);
                break
            case PopulationTypeIdEnum.Adulto:
                const adultDefaults = new RawMaterialAdultDefaults();
                adultDefaults.setDefaultValues(output, inCentralType);
                break;
            default:
                throw new Error("No implementado...");
        }

        CalculationService.computeRawMaterial(output);

        return output;
    }

    public static mixingCenterSettingsDefaults(): MixingCenterSettingsModel {
        const output: MixingCenterSettingsModel = new MixingCenterSettingsModel();
        const defaults = new MixingCenterSettingsDefaults();

        defaults.setDefaultValues(output, CentralTypeIdEnum.None);

        return output;
    }
}

export default DefaultValuesProvider;