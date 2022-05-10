enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTON,
}
function turnDirection(dierction: Direction) {
  switch (dierction) {
    case Direction.LEFT:
      console.log("left");
      break;
    case Direction.RIGHT:
      console.log("right");
      break;
    case Direction.TOP:
      console.log("TOP");
      break;
    case Direction.BOTTON:
      console.log("BOTTON");
      break;
    default:
      const foo: never = dierction;
      break;
  }
}
turnDirection(Direction.RIGHT);
export {};
