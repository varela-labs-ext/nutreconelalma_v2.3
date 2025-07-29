import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import UnitCostItemModel from "../row_item/UnitCostItemRowModel";
import BaseModel from "../base/BaseModel";
import AmountItemModel from "../row_item/AmountItemRowModel";

class AutomatedEquipmentGroupModel extends BaseModel {
    public tamperResistantClamps: UnitCostItemModel;
    public setsTransferenciaX6: UnitCostItemModel;
    public setsTransferenciaX9: UnitCostItemModel;
    public total: AmountItemModel;

    constructor() {
        super("", CentralTypeIdEnum.None);

        this.tamperResistantClamps = new UnitCostItemModel("Tamper-Resistant Clamps");
        this.setsTransferenciaX6 = new UnitCostItemModel("Sets de transferencia universales (x6)");
        this.setsTransferenciaX9 = new UnitCostItemModel("Sets de transferencia universales (x9)");
        this.total = new AmountItemModel("Total");
    }
}

export default AutomatedEquipmentGroupModel;