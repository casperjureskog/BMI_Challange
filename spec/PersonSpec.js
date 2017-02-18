
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186, metric1: "Metric"});
    imp_person = new Person({weight: 198, height: 2, foot1: 6, metric1: "imperial"});
  });

  it("should have weight of 90kg", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 1.86m", function() {
    expect(person.height).toEqual(186);
  });

  it("should have height of 6 feet", function() {
    expect(imp_person.foot1).toEqual(6);
  });

  it("should calculate BMI value metric", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01);
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight");
  });

  it("should calculate BMI value imperial", function() {
    imp_person.calculate_bmi();
    expect(imp_person.bmiValue).toEqual(25.42);
  });

  it("checkbox should have value sett to false at start", function() {
    $('#calculate').click();
    expect(person.metric1).toEqual("Metric");
  });

});
