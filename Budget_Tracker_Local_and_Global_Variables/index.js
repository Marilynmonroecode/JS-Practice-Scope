// Global variable to track total budget
let totalBudget = 0;

// Function to add an expense to the total budget
function addExpense(expense) {
    if (typeof expense !== 'number' || expense < 0) {
        console.error("Please enter a valid expense amount.");
        return;
    }
    totalBudget += expense; // Update the global budget
    console.log(`Expense of $${expense} added. Total budget is now $${totalBudget}.`);
}

// Function to log individual expense details
function getExpenseDetails(description, cost) {
    if (typeof cost !== 'number' || cost < 0) {
        console.error("Please enter a valid cost amount.");
        return;
    }

    // Variables scoped within getExpenseDetails
    const expenseDescription = description;
    const expenseCost = cost;

    console.log(`Expense Description: ${expenseDescription}, Cost: $${expenseCost}`);
}

// Function to reset the total budget to zero
function resetBudget() {
    totalBudget = 0; // Set the global budget to zero
    console.log("Total budget has been reset to $0.");
}

// Example usage
addExpense(50); // Adds $50 to the total budget
getExpenseDetails("Groceries", 50); // Logs expense details
addExpense(20); // Adds $20 to the total budget
getExpenseDetails("Utilities", 75); // Logs expense details
console.log(`Current total budget: $${totalBudget}`); // Logs the total budget

resetBudget(); // Resets the budget to $0
console.log(`Current total budget: $${totalBudget}`); // Logs the total budget after reset
