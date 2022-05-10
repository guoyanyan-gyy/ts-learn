class Animal {
  action() {
    console.log("actioing");
  }
}

class fish extends Animal {
  action(): void {
    console.log("swimming");
  }
}
class dog extends Animal {
  action(): void {
    console.log("running");
  }
}

function getAction(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}
getAction([new dog(), new fish()]);
