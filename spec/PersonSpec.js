
describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it ("control for height input format" function(){
    expect(person.height.ctrl).toEqual(1.86)
  });


  it("should hav a kalkylator for bmi", function() {
    expect(bmi).toEqual(90/(1.86*1.86))
  });

});
