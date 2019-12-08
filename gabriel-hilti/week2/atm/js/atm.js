const bank = {
  balance: {
    checking: 0,
    savings: 0
  },

  get checkingBalance() {
    return this.balance.checking;
  },

  get savingsBalance() {
    return this.balance.savings;
  },

  deposit: function(amount, account) {
    if (amount > 0) {
      this.balance[account] += amount;
    }
  },

  withdraw: function(amount, account) {
    let selectedAccountBalance = this.balance[account],
        otherAccountBalance = null,
        keyName = null;

    for (const key in this.balance) {
      if (key !== account) {
        otherAccountBalance = this.balance[key];
        keyName = key;
        break;
      }
    }

    if (amount <= 0) {
      return;
    } else if (amount <= selectedAccountBalance) {
      this.balance[account] -= amount;
    } else if (amount <= selectedAccountBalance + otherAccountBalance) {
      this.balance[keyName] -= amount - selectedAccountBalance;
      this.balance[account] = 0;
    }
  }

};
