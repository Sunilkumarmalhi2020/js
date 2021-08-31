class A{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
     display() {
        return this.x+this.y;
    }
     z=()=>{return this.x;}
}
var obj=new A(3,4);
console.log(obj.z);