class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)){
            throw new Error('Invalid attribute types');
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }
    //getter for name
    get name() {
        return this._name;
    }
    //setter for name
    set name(newName){
        if(typeof newName !== 'string') {
            throw new Error ('Name must be a string');
        }
        this._name = newName;
    }
    //getter for length
    get length() {
         return this._length;
    }
    //setter for length
    set length(newLength){
        if(typeof newLength !== 'number') {
            throw new Error ('Length must be a number');
        }
        this._length = newLength;
    }
    //getter for students
    get students() {
        return this._students;
   }
   //setter for students
   set students(newStudents){
       if(!Array.isArray(newStudents)) {
        throw new Error ('Students must be an array');
       }
       this._students = newStudents;
   }    
}

export default HolbertonCourse;