
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90kg", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 1.86m", function() {
    expect(person.height).toEqual(1.86);
  });

  it ("control for height input format", function() {
    expect(person.height).toEqual(1.86);
  });

  it("should hav a kalkylator for bmi", function() {
    expect(bmi).toEqual(90/(1.86*1.86));
  });

});
