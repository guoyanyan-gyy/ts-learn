interface Iswim{
  swimming:()=>void
}
interface Ifly{
  flying:()=>void
}
interface Imy extends Iswim,Ifly{
}
let p:Imy ={
  swimming(){
  },
  flying(){
  }
}
export{}