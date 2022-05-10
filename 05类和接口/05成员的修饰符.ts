class person {
  name: string;
  readonly people?: person;
  constructor(name: string, people?: person) {
    this.name = name;
    this.people = people;
  }
}

let yy = new person("yy", new person("huhu"));
if (yy.people) {
  yy.people.name = "11122";
}
console.log(yy);
export {};
