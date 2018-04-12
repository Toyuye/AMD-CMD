
define(function(require,exports,module){

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
	};
	//2. 输出的时候 可以使用下面的 module.exports =
	//   和return 基本一样
	//return new RandomColor();
	module.exports = new RandomColor();

})