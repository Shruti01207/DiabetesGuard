export interface medicineData{
    id:string
    patientId:string;
    brandName: string[];
    substances: string[];
    route:string[];
    frequency:string;
    startDate: Date;
    endDate: Date;
}