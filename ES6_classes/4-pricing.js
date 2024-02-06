import Currency from './3-currency.js';

class Pricing {
    
    constructor(amount, currency){
        if (typeof amount !== 'number' || !(currency instanceof Currency)){
            throw new Error('Invalid attribute types');
        }
        this._amount = amount;
        this._currency = currency;
    }
    //get for amount
    get amount(){
        return this._amount;
    }
    //set for amount
    set amount(newAmount){
        this._amount = newAmount;
    }
    //get for currency
    get currency(){
        return this._currency;
    }
    //set for currency
    set currency(newCurrency){
        this._currency = newCurrency;
    }
    displayFullPrice(){
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }
    static convertPrice(amount, conversionRate){
        if (typeof amount !== 'number' || typeof conversionRate !== 'number'){
            throw new Error('Invalid attribute types');
        }
        return amount * conversionRate;
    }    
}

export default Pricing;