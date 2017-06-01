var app = new Vue({
	el: "#app",
	data: {
		color: "black",
	},
	methods:{
		enterPara: function(){
			this.color= "red";
		}
	}
});
