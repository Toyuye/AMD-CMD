
define(function(){

	function RandomColor(){
		this.res ="#";
		this.str = "0123456789ABCDEF";
	}
	RandomColor.prototype = {
		constructor:RandomColor,
		randomNum:function(min,max){
			return Math.round(Math.random()*(max-min)+min);
		},
		color:function(){
			this.res = "#";
			for(var i = 0 ; i < 6; i++){
				this.res += this.str[this.randomNum(0,15)];
			}
			return this.res;
		}
	}
	return new RandomColor();

})