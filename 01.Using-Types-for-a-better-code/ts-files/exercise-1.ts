/*
 * Let's be excplicit regarding the types.
 */
type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sport", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
