function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.metric1 = attr.metric1;
    this.foot1 = attr.foot1;

    if (this.foot1 > 0){
      this.height = this.height + (this.foot1 * 12);
    } else {
      this.height
    }

}

  Person.prototype.calculate_bmi = function() {
    calculator = new BMICalculator();
    if (this.metric1 == "Metric"){
      calculator.metric_bmi(this);
  } else {
      calculator.imperial_bmi(this);
    }
};
