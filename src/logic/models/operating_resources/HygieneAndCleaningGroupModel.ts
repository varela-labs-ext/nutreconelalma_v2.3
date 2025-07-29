import CentralTypeIdEnum from "@/logic/enums/CentralTypeIdEnum";
import UnitCostItemModel from "../row_item/UnitCostItemRowModel";
import AmountItemModel from "../row_item/AmountItemRowModel";
import BaseModel from "../base/BaseModel";

class HygieneAndCleaningGroupModel extends BaseModel {
    public solucionAntisepticaManos: UnitCostItemModel;
    public panosEsterilesSuperficies: UnitCostItemModel;
    public alcohol70: UnitCostItemModel;

    // CALC MANUAL
    public detergentes: UnitCostItemModel;
    public desinfectantes: UnitCostItemModel;

    // CALC AUTO
    public peroxidoHidrogenoAcelerado: UnitCostItemModel;
    public cloruroBenzalconio: UnitCostItemModel;

    public total: AmountItemModel;

    constructor() {
        super("", CentralTypeIdEnum.None);

        this.solucionAntisepticaManos = new UnitCostItemModel("Solución antiséptica para lavado de manos (clorhexidina o alcohol al 70 %)");
        this.panosEsterilesSuperficies = new UnitCostItemModel("Paños estériles para limpieza de superficies");
        this.alcohol70 = new UnitCostItemModel("Alcohol al 70 %");

        // CALC MANUAL
        this.detergentes = new UnitCostItemModel("Detergentes", CentralTypeIdEnum.Manual);
        this.desinfectantes = new UnitCostItemModel("Desinfectantes", CentralTypeIdEnum.Manual);

        // CALC AUTO
        this.peroxidoHidrogenoAcelerado = new UnitCostItemModel("Peróxido de hidrógeno acelerado", CentralTypeIdEnum.Automatico);
        this.cloruroBenzalconio = new UnitCostItemModel("Cloruro de benzalconio", CentralTypeIdEnum.Automatico);

        this.total = new AmountItemModel("Total");
    }
}

export default HygieneAndCleaningGroupModel;