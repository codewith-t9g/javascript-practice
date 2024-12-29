class BankAccount{
    #balance = 0;
e
    deposite(amount){
        this.#balance += amount;
        console.log(`Deposite ${amount}, new balance is ${this.#balance}`);
    }
    withdraw(amount){
        if(this.#balance >= amount){
            console.log(`Insufficient fund`);
        }
        else{
            this.#balance -= amount;
            console.log(`Withdraw ${amount}, new balance is ${this.#balance}`);
        }
    }
    fun(){
        console.log(this.#balance);
        
    }

}
let account = new BankAccount();
account.deposite(100);
account.withdraw(50);
account.fun()