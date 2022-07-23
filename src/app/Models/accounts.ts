export class Accounts {
    studentID: string;
    bank: string;
    branch: string;
    accountNumber: Number;
    accountType: string;
    status: string;

    constructor(id?: string, bank?: string, branch?: string, accountNumber?: Number, accountType?: string, status?: string){
        this.studentID = id!;
        this.bank = bank!;
        this.branch = branch!;
        this.accountNumber = accountNumber!;
        this.accountType = accountType!;
        this.status = status!;
    }
}