class BankAccount{
    balance = 0;

    deposite(amount){
        this.balance += amount;
        console.log(`Deposite ${amount}, new balance is ${this.balance}`);
        
    }
    withdraw(amount){
        if(this.balance >= amount){
            console.log(`Insuficient fund`);
        }
        else{
            this.balance -= amount;
            console.log(`Withdraw ${amount}, new balance is ${this.balance}`);
        }
    }
}

const amount = new BankAccount();
amount.deposite(1000);
amount.withdraw(100)