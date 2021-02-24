class Rope{
	constructor(bodyA,bodyB, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:bodyA,
			bodyB:bodyB,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		this.rope=Matter.Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var AnchorX=pointB.x+this.offsetX
		var AnchorY=pointB.y+this.offsetY

		line(pointA.x,pointA.y,AnchorX,AnchorY);
	}

}