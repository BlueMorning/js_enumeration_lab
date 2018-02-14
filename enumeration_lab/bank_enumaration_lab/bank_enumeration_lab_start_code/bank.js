var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function(ownerName){
  const accountArray = this.accounts.filter(function(currentAccount){
      return currentAccount.name === ownerName;
  });

  return accountArray[0];
}

Bank.prototype.largestAccount = function(){
  let highestAccount = null;
  const largestAccount = this.accounts.forEach(function(currentAccount){
    if (highestAccount == null){
      highestAccount = currentAccount;
    } else if (currentAccount.value > highestAccount.value){
      highestAccount = currentAccount;
    }
  });
  return highestAccount;
}

Bank.prototype.payInterest = function(){
  this.accounts.forEach(function(currentAccount){
    currentAccount.value *= 1.1;
  });
}

Bank.prototype.businessAccounts = function(){
  const businessAccounts = this.accounts.filter(function(currentAccount){
    return currentAccount.type == "business";
  });
  return businessAccounts;
}

Bank.prototype.totalValue = function(){
  const totalValue = this.accounts.reduce(function(totalAccountsValue, currentAcount){
    return totalAccountsValue + currentAcount.value;
  }, 0);

  return totalValue;
}

Bank.prototype.averageValue = function(){
  const totalValue = this.totalValue();
  if (this.accounts.length == 0){
    return 0;
  } else {
    return totalValue / this.accounts.length;
  }
}

module.exports = Bank;
