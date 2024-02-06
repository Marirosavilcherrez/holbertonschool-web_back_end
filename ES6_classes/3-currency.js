class Currency {
    constructor(code, name){
        if (typeof code !== 'string' || typeof name !== 'string'){
            throw new Error('Invalid attribute types');
        }
        this._code = code;
        this._name = name;
    }
    //get for code
    get code(){
        return this._code
    }
    //set for code
    set code(newCode){
        this._code = newCode;
    }
    //get for name
    get name(){
        return this._name
    }
    //set for name
    set name(newName){
        this._name = newName;
    }
    displayFullCurrency(){
        return this.name + ' ' + '(' + this.code + ')';
    }
}

export default Currency;