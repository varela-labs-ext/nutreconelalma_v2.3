import ClinicalInputCategoryEnumId from "@/logic/enums/ClinicalInputCategoryEnumId";

class ClinicaInputRowModel {
    public presentacionMl: number; // Editable
    public cantidadMl: number; // Editable
    public cantidadUnidad: number; // Editable
    public costoPorMl: number; // Calculado
    public costoPorUnidad: number; // Editable
    public costoTotalPorUnidad: number; // Calculado
    public label: string;
    public exclude: boolean;
    public category: ClinicalInputCategoryEnumId;

    constructor(inLabel: string, inCategory: ClinicalInputCategoryEnumId) {
        this.exclude = true; // La idea es que todos se excluyan por defecto. Y al momento de usar el factory, justo ahí se definen los que estaran dentro del calculo final.
        this.label = inLabel;
        this.presentacionMl = 0;
        this.cantidadMl = 0;
        this.cantidadUnidad = 0;
        this.costoPorMl = 0;
        this.costoPorUnidad = 0;
        this.costoTotalPorUnidad = 0;
        this.category = inCategory;
    }
}

export default ClinicaInputRowModel;