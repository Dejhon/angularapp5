export class Students {
    _id: string;
    name: string;
    email: string;
    cohort: string;
    phoneNumber: number;

    constructor(id?: string, name?: string, email?: string, cohort?: string, phoneNumber?: number){
        this._id = id!;
        this.name = name!;
        this.email = email!;
        this.cohort = cohort!;
        this.phoneNumber = phoneNumber!;
    }
}