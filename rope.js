class Rope {
    constructor(body1,body2,OffsetX,OffsetY) {
        this.OffsetX = OffsetX;
        this.OffsetY = OffsetY;

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.OffsetX, y:this.OffsetY}
        }
        this.Rope=Constraint.create(options);
        World.add(world,this.Rope);
    }
}