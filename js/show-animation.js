//入场动画数组
let inAnimateArr = [function() {}, function() {}, function() {}];
//出场动画数组
let outAnimateArr = [function() {}, function() {}, function() {}];

//第一屏入场
inAnimateArr[0] = function() {

	$(".page0 .content-intr>h1").show().velocity({
			rotateY: "180deg",
			rotateX: "360deg",
			translateZ: "500px"
		}, 0)
		.velocity({
			rotateY: 0,
			rotateX: 0,
			translateZ: 0,
			opacity: 1
		}, 1000);

	$(".page0 .content-intr>h2").show().velocity({
			translateZ: "500px"
		}, 0)
		.delay(400).velocity("reverse", 1000);

	$(".page0 .content-intr>h2>em").velocity({
		opacity: 1
	}, 0);

	$(".page0 .content-intr>hr").show().velocity({
			translateZ: "500px"
		}, 0)
		.delay(500).velocity("reverse", 1000);

	$(".page0 .content-intr>h3").show().velocity({
			translateZ: "500px"
		}, 0)
		.delay(600).velocity({
			translateZ: 0
		}, 1000);

	$(".page0 ul.content-label").show().velocity({
			translateZ: "500px"
		}, 0)
		.delay(700).velocity("reverse", 1000);

	$(".page0 ul.content-label>li").velocity({
		opacity: 1
	}, 0);

};

//第一屏出场
outAnimateArr[0] = function() {

	$(".page0 .content-intr>h1").velocity({
			rotateX: "180deg",
			rotateY: "180deg"
		}, 600)
		.velocity({
			rotateX: 0,
			rotateY: 0,
			opacity: 0
		}, 0);

	$(".page0 .content-intr>h2 em").each(function(i) {
		$(this).delay(i * 50).velocity({
				translateZ: "500px"
			}, 400)
			.velocity({
				translateZ: 0,
				opacity: 0
			}, 0);
	});

	$(".page0 .content-intr>hr").fadeOut();

	$(".page0 .content-intr>h3").fadeOut();

	$(".page0 ul.content-label>li").each(function(i) {
		$(this).delay(i * 50).velocity({
				translateZ: "500px"
			}, 400)
			.velocity({
				translateZ: 0,
				opacity: 0
			}, 0);
	});

};

inAnimateArr[1] = function() {
	$(".skills").show().velocity({
			translateY: "-1500px"
		}, 0)
		.delay(400).velocity("reverse", 750);
}

outAnimateArr[1] = function() {
	$(".skills").fadeOut();
}

inAnimateArr[0]();