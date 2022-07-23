export class Accounts {
    _id: string;
    studentID: string;
    bank: string;
    branch: string;
    accountNumber: Number;
    accountType: string;
    status: string;

    constructor(id?: string, studentID?: string, bank?: string, branch?: string, accountNumber?: Number, accountType?: string, status?: string){
        this._id = id!;
        this.studentID = studentID!;
        this.bank = bank!;
        this.branch = branch!;
        this.accountNumber = accountNumber!;
        this.accountType = accountType!;
        this.status = status!;
    }
}