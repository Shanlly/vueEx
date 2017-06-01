var app = new Vue({
	el: "#app",
	data:
	{
		coffeeTime: "2017-05-30T21:11",
		now: new Date()
	},
	computed:
	{
		realCoffeeTime: function(){
			return new Date(this.coffeeTime);
		},
		realTimeCoffeeTime : function(){
			return this.now- this.realCoffeeTime;
		},
		caffeineInBody: function(){
			return Math.pow(0.5,((this.realCoffeeTime/1000/60/60)/10));
		},
	},
	methods:
	{

		},
		created: function(){
			var thatVm = this;
			setInterval(function(){
				thatVm.now = new Date();
			}, 777);
	}
});
