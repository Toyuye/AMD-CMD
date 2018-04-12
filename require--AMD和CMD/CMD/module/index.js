
//define参数 无需依赖，依赖在 require 加载 
define(function(require,exports,module){  
	// require 是一个函数
	// exprots 是一个obj对象
	// module是一个t对象
	
	//1.注意 require 加载依赖的时候， ./的诡异，自己边测试，边用
	require("jquery");
	var color = require("./randomColor");

	console.log($);

	$("body").css({
		background:color.color()
	});

	//2. 输出的时候 可以使用下面的 module.exports =
	//   和return 基本一样
	//  module.exports = 10;
})