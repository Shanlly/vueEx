var app = new Vue ({
	el: "#app",
	data: {
		a:'',
		b:''
	},
	computed: {
		plus: function(){
			return parseInt(this.a)+parseInt(this.b);
		},
		multiple: function () {
			return  parseInt(this.a)*parseInt(this.b);
		}
	}
});