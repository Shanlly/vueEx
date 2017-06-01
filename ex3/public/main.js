var app = new Vue({
	el: "#app",
	data:
	{
		colorOneA:'',
		colorOneB:'',
		colorOneC:'',
		colorTwoA:'',
		colorTwoB:'',
		colorTwoC:''
	},
	computed:
	{
		colorOne: function(){
			//console.log("one");
		return "rgb(" + this.colorOneA +"," + this.colorOneB + "," + this.colorOneC +")" ;
		},
		colorTwo: function(){
			//console.log("two");
		return "rgb(" + this.colorTwoA + "," + this.colorTwoB + ","+ this.colorTwoC + ")";
		},
		mergedColor: function(){
			console.log("three",parseInt(this.colorOneA) + parseInt(this.colorTwoA));
			var red = Math.floor((parseInt(this.colorOneA) + parseInt(this.colorTwoA))/2); 
			//console.log(red);
			var green =Math.floor((parseInt(this.colorOneB) + parseInt(this.colorTwoB))/2);
			//console.log(green);
			var blue = Math.floor((parseInt(this.colorOneC) + parseInt(this.colorTwoC))/2); 
			//console.log(blue);
			return "rgb("+ red + "," + green + ","+ blue + ")";
		}
	}
});