describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {

    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    person = new Person({weight: 90, height: 186, metric1: "Metric"});
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    person = new Person({weight: 182, height: 70, metric1: "Imperial"});
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(26.11);
  });

});
