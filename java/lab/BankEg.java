// Interface
interface BankOperations {
    double getBalance();
    void deposit(double amount);
    void withdraw(double amount);
}

// BankAccount class implementing the interface
class BankAccount implements BankOperations {
    public  String accountHolderName;
    public String bankName;
    public double accountBalance;

    // Constructor
    public BankAccount(String accountHolderName, String bankName, double initialBalance) {
        this.accountHolderName = accountHolderName;
        this.bankName = bankName;
        this.accountBalance = initialBalance;
    }

    // Implementation of interface methods
    @Override
    public double getBalance() {
        return accountBalance;
    }

    @Override
    public void deposit(double amount) {
        accountBalance += amount;
        System.out.println("Deposited " + amount + " into " + bankName + " account for " + accountHolderName);
    }

    @Override
    public void withdraw(double amount) {
        if (amount > accountBalance) {
            System.out.println("Insufficient funds for " + accountHolderName  + bankName + " account");
        } else {
            accountBalance -= amount;
            System.out.println("Withdrawn " + amount + " from " + bankName + " account for " + accountHolderName);
        }
    }
}

public class BankEg {
    public static void main(String[] args) {
        // Creating three BankAccount instances
        BankAccount account1 = new BankAccount("Krisha", "ICICI", 1000.0);
        BankAccount account2 = new BankAccount("anu", "HDFC", 2000.0);
        BankAccount account3 = new BankAccount("manu", "SBI", 1500.0);

        // Depositing and withdrawing money for each account
        account1.deposit(500.0);
        account2.withdraw(1000.0);
        account3.deposit(200.0);
        account1.withdraw(1500.0);

        // Displaying the account balances
        System.out.println("Account Balance for " + account1.accountHolderName  + account1.bankName + " account: " + account1.getBalance());
        System.out.println("Account Balance for " + account2.accountHolderName  + account2.bankName + " account: " + account2.getBalance());
        System.out.println("Account Balance for " + account3.accountHolderName  + account3.bankName + " account: " + account3.getBalance());
    }
}