class Person {
  name: String;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
  getGrade() {
    console.log(1111);
  }
}
class stu extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getGrade() {
    super.getGrade();
    console.log(this.name);
  }
}
let yy = new stu("yy", 12, "1班");
yy.getGrade();
export {};
