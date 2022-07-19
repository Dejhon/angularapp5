export class Students {
    push(addedStudent: Students) {
      throw new Error('Method not implemented.');
    }
    id: number;
    name: string;
    email: string;
    cohort: string;
    phoneNumber: number;

    constructor(id?: number, name?: string, email?: string, cohort?: string, phoneNumber?: number){
        this.id = id!;
        this.name = name!;
        this.email = email!;
        this.cohort = cohort!;
        this.phoneNumber = phoneNumber!;
    }
}