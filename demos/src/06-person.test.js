import  { Person }  from './06-person';

describe('Person IMC', () => {
  let person;
  beforeAll(() => {
    person = new Person('Rodolfo', 60, 1.77);
  });
  /* beforeEach(() => {
    person = new Person('Rodolfo', 60, 1.77);
  }); */
  test('Person', () => {
    person.weight = 70;
    expect(person.calcIMC()).toBe('normal');
  });
  test('Person', () => {
    person.weight = 70;
    expect(person.calcIMC()).toBe('normal');
  });
  test('Person', () => {
    person.weight = 80;
    expect(person.calcIMC()).toBe('overweight');
  });
});
