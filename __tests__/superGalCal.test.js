import { ageCalculator } from "./../src/superGalCal.js";

describe('ageCalulator', () => {

  test('should correctly create an age Calulator class and constructor',() => {
    let newAge = new ageCalculator (34);
    expect(newAge.age).toEqual(34);
  });

  test("should correctly return a user's age in Mercury years", ()=> {
    let newAge = new ageCalculator(34);
    var mercAge = newAge.mercCalc();
    expect(mercAge).toEqual(141);
  })

  test("should correctly return a user's age in Venus years", () => {
    let newAge = new ageCalculator(34);
    var venusAge = newAge.venusCalc();
    expect(venusAge).toEqual(54);
  });

  test("should correctly return a user's age in Mars years", () => {
    let newAge = new ageCalculator(34);
    let marsAge = newAge.marsCalc();
    expect(marsAge).toEqual(18);
  })

  test("should correctly return a user's age in Jupiter years", ()=>{
    let newAge = new ageCalculator(34);
    let jupAge = newAge.jupCalc();
    expect(jupAge).toEqual(2);
  })

  test("should correctly return the user's remaining years on earth.", () => {
    let newAge = new ageCalculator(34);
    let yearsLeft = newAge.lifeLeft();
    expect(yearsLeft).toEqual(44);
  })

  test("should correctly deterimine how many years a user has left to live on Mercury", () => {
    let newAge = new ageCalculator(34);
    let mercTime = newAge.mercYears();
    expect(mercTime).toEqual(183);
  })

  test("should correctly deterimine how many years a user has left to live on Venus", () => {
    let newAge = new ageCalculator(34);
    let venusTime = newAge.venusYears();
    expect(venusTime).toEqual(70);
  })

  test("should correctly deterimine how many years a user has left to live on Mars", () => {
    let newAge = new ageCalculator(34);
    let marsTime = newAge.marsYears();
    expect(marsTime).toEqual(23);
  });

  test("should correctly deterimine how many years a user has left to live on Jupiter", () => {
    let newAge = new ageCalculator(34);
    let jupTime = newAge.jupYears();
    expect(jupTime).toEqual(3);
  });

});

