function Point3D() {
  this.x = 0;
  this.y = 0;
  this.z = 0;
}

function Sphere3D(radius, pointQuotient) {
	this.point = new Array();
	this.color = "rgb(100,0,255)"
	this.radius = (typeof(radius) == "undefined") ? 20.0 : radius;
	this.radius = (typeof(radius) != "number") ? 20.0 : radius;
	this.numberOfVertexes = 0;

	// Loop from 0 to 360 degrees with a pitch of 10 degrees ... 
	for(alpha = 0; alpha <= 6.28; alpha += pointQuotient) {
		p = this.point[this.numberOfVertexes] = new Point3D();
		 
		p.x = Math.cos(alpha) * this.radius;
		p.y = 0;
		p.z = Math.sin(alpha) * this.radius;

		this.numberOfVertexes++;
	}

	// Loop from 0 to 90 degrees with a pitch of 10 degrees ... 
	// (direction = 1)
 
	// Loop from 0 to 90 degrees with a pitch of 10 degrees ...
	// (direction = -1)

 	for(var direction = 1; direction >= -1; direction -= 2) {
   		for(var beta = pointQuotient; beta < 1.445; beta += pointQuotient) {
       
    		var radius = Math.cos(beta) * this.radius;
    		var fixedY = Math.sin(beta) * this.radius * direction;
     
	    	for(var alpha = 0; alpha < 6.28; alpha += pointQuotient) {
	      		p = this.point[this.numberOfVertexes] = new Point3D();

				p.x = Math.cos(alpha) * radius;
	       		p.y = fixedY;
	       		p.z = Math.sin(alpha) * radius;

	       		this.numberOfVertexes++;
	     	}
   		}
 	}
}

function OrbitalPattern3D(radius, segmentQuotient) {
	this.point = new Array();
	this.color = "rgb(100,0,255)"
	this.radius = (typeof(radius) == "undefined") ? 20.0 : radius;
	this.radius = (typeof(radius) != "number") ? 20.0 : radius;
	this.numberOfVertexes = 0;

	// Loop from 0 to 360 degrees with a pitch of 10 degrees ... 
	for(alpha = 0; alpha <= 6.28; alpha += segmentQuotient) {
		p = this.point[this.numberOfVertexes] = new Point3D();
		 
		p.x = Math.cos(alpha) * this.radius;
		p.y = 0;
		p.z = Math.sin(alpha) * this.radius;

		this.numberOfVertexes++;
	}

	this.addVertex = function(alpha, radius, fixedY) {
 		p = this.point[this.numberOfVertexes] = new Point3D();

		p.x = Math.cos(alpha) * radius;
   		p.y = fixedY;
   		p.z = Math.sin(alpha) * radius;

   		this.numberOfVertexes++;
 	}

	// Loop from 0 to 90 degrees with a pitch of 10 degrees ... 
	// (direction = 1)
 
	// Loop from 0 to 90 degrees with a pitch of 10 degrees ...
	// (direction = -1)

 	//for(var direction = 1; direction >= -1; direction -= 2) {
 		var beta = 0;
   		//for(var beta = segmentQuotient; beta < 1.445; beta += segmentQuotient) {
       
    		var radius = Math.cos(beta) * this.radius;
    		var fixedY = Math.sin(beta) * this.radius;
     
	    	for(var alpha = 0; alpha < 6.28; alpha += segmentQuotient) {
	      		for (var i = 0; i < Math.random() * 100; i++) {
	      			this.addVertex(alpha, radius + (i / 5), fixedY);
	      		};
	     	}
   		//}
 	//}

 	
}

function rotateX(point, radians) {
   var y = point.y;
   point.y = (y * Math.cos(radians)) + (point.z * Math.sin(radians) * -1.0);
   point.z = (y * Math.sin(radians)) + (point.z * Math.cos(radians));
}

function rotateY(point, radians) {
   var x = point.x;
   point.x = (x * Math.cos(radians)) + (point.z * Math.sin(radians) * -1.0);
   point.z = (x * Math.sin(radians)) + (point.z * Math.cos(radians));
}

function rotateZ(point, radians) {
   var x = point.x;
   point.x = (x * Math.cos(radians)) + (point.y * Math.sin(radians) * -1.0);
   point.y = (x * Math.sin(radians)) + (point.y * Math.cos(radians));
}

function projection(xy, z, xyOffset, zOffset, distance) {
   return ((distance * xy) / (z - zOffset)) + xyOffset;
}