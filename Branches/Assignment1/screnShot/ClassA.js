class shap{
    constructor (name,x,y){
        this.name=name;
        this.x=x;
        this.y=y;
    }
    move(){
        console.log(this.name+" "+this.x+" "+this.y);
    }
}
var objct=new shap("rectangle",4,5);
objct.move();