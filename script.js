let balance = 0;
let totalExpense = 0;

function addBalance() {
  let amount = Number(document.getElementById("balanceInput").value);

  if (amount <= 0) {
    alert("Enter a valid balance amount");
    return;
  }

  balance += amount;
  document.getElementById("balance").innerText = balance;
  document.getElementById("balanceInput").value = "";
}

function addExpense() {
  let amount = Number(document.getElementById("amount").value);
  let category = document.getElementById("category").value;
  let note = document.getElementById("note").value;

  if (amount <= 0) {
    alert("Enter a valid expense amount");
    return;
  }

  if (amount > balance) {
    alert("Not enough balance!");
    return;
  }

  balance -= amount;
  totalExpense += amount;

  document.getElementById("balance").innerText = balance;
  document.getElementById("totalExpense").innerText = totalExpense;

  let li = document.createElement("li");
  li.innerHTML = `
    <strong>${category}</strong> - ₹${amount}
    ${note ? `<div class="note">Note: ${note}</div>` : ""}
  `;

  document.getElementById("expenseList").appendChild(li);

  document.getElementById("amount").value = "";
  document.getElementById("note").value = "";
}
