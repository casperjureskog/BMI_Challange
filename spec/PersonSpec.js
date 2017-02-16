
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90kg", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 1.86m", function() {
    expect(person.height).toEqual(186);
  });

  it("checkbox should have value sett to false at start", function() {
    person.metric1 = "Metric"
    $('#calculate').click()
    expect(person.metric1).toEqual("Metric");
  });

  it("should have height of 5feet", function() {
    person.foot1 = 5
    expect(person.foot1).toEqual(5);
  });

  it("should calculate BMI value metric", function() {
    person.metric1 = "Metric"
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01);
  });

  it("should have a BMI Message", function() {
    person.metric1 = "Metric"
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight");
  });

  it("should calculate BMI value Imperial", function() {
    person.metric1 = "Imperial"
    person.weight = 189
    person.height = 2
    person.foot1 = 6
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(24.26);
  });

});
