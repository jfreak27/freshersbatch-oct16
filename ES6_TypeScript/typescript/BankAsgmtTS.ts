class Account {

    id: number;
    name: string;
    bal: number;
    constructor(id : number, name :string,bal:number){

        this.id = id;
        this.name = name;
        this.bal = bal;
    }

    getBalance(): number{

        return this.bal;

    }

    }

class SavingAcc extends Account{

    int : number;
    constructor(id,name,bal,int){

        super(id,name,bal);

        this.int = int;
        

    }

    getBalance(): number{

        return super.getBalance() + this.int;

    }
    }   


class CurrentAcc extends Account{

        credit : number;
    constructor(id,name,bal,credit){

        super(id,name,bal);

        this.credit =credit;
        

    }

     getBalance() : number{

        return super.getBalance() + this.credit;

    }
    }


let AllAccounts : Array<any> = [];

let saving1 = new SavingAcc(1,'adi',1000,1000);
AllAccounts.push(saving1);

let saving2 = new SavingAcc(2,'rajo',1000,1000);
AllAccounts.push(saving1);

let current1 = new CurrentAcc(5,'navi',1000,1000);
AllAccounts.push(current1);

let current2 = new CurrentAcc(5,'navi',1000,1000);
AllAccounts.push(current2);



getTotalBalance(AllAccounts);




function getTotalBalance(AllAccounts){

    let total:number=0;
    AllAccounts.forEach(function (acc){

            total = total + acc.getBalance();



    });

    console.log(`Total Balance in Bank : ${total}`);





}