function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;

    if (this.height < 3){

      bmi = this.weight/(this.height * this.height);
      }
      bmi = this.weight/(this.height * this.height);

}
person = new Person({weight: 90, height: 1.86})
