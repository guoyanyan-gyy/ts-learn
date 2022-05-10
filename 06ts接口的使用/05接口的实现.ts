interface Iswim {
  swimming: () => void;
}
interface Iswim {
  flying: () => void;
}
class myL implements Iswim {
  swimming() {
    console.log(222);
  }
  flying() {
    console.log(1111);
  }
}
function find(objct: Iswim) {
  objct.swimming();
}
find(new myL());
// find({ swimming() {} });

export {};
