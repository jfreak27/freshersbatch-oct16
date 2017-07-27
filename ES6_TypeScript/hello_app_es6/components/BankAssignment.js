export function BankAssignment(){


class Account {

    constructor(id, name,bal){

        this.id = id;
        this.name = name;
        this.bal = bal;
    }

    getBalance(){

        return this.bal;

    }

    }

class SavingAcc extends Account{

    constructor(id,name,bal,int){

        super(id,name,bal);

        this.int = int;
        

    }

    getBalance(){

        return super.getBalance() + this.int;

    }
    }   


class CurrentAcc extends Account{

    constructor(id,name,bal,credit){

        super(id,name,bal);

        this.credit =credit;
        

    }

     getBalance(){

        return super.getBalance() + this.credit;

    }
    }


let AllAccounts = [];

let saving1 = new SavingAcc(1,'adi',2000,1000);
AllAccounts.push(saving1);

let saving2 = new SavingAcc(2,'rajo',1000,2000);
AllAccounts.push(saving1);

let current1 = new CurrentAcc(5,'navi',1000,1000);
AllAccounts.push(current1);

let current2 = new CurrentAcc(5,'navi',1000,5000);
AllAccounts.push(current2);



getTotalBalance(AllAccounts);

}


function getTotalBalance(AllAccounts){

    let total=0;
    AllAccounts.forEach(function (acc){

            total = total + acc.getBalance();



    });

    console.log(`Total Balance in Bank : ${total}`);





}