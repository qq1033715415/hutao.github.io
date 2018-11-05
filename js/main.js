(function() {
	let $content = $(".content");
	let idx = 0;
	let lock = true;

	let $lis = $(".dots ol li");
	let $spans = $(".dots ol li span");

	$(document).ready(function() {

		/*页面滚动业务*/
		$(document).mousewheel(function(event, delta) {
			if($content.is(":animated")) return;
			//鼠标滚轮↓  信号量+1   deltaY -1
			//鼠标滚轮↑  信号量-1   deltaY +1
			if(!lock) return;
			
			event.preventDefault(); //阻止默认样式
			let oidx = idx;
			idx -= delta;

			if(idx < 0) {
				idx = $lis.length - 1;
			} else if(idx > $lis.length - 1) {
				idx = 0;
			}
			
			//鼠标滚动时动画入场出场逻辑
			if(idx != oidx) {
				outAnimateArr[oidx]();
				inAnimateArr[idx]();

				lock = false;

				setTimeout(function() {
					lock = true;
				}, 1100);
			}
			
			if(idx == 2) {
				$content.animate({
					'top': -100 * idx + '%',
					'left': -100 + '%'
				}, 600);
				$lis.eq(idx).addClass("active").siblings($lis).removeClass("active");
				return;

			};

			$content.animate({
				'top': -100 * idx + '%',
				'left': -100 * idx + '%'
			}, 600);

			$lis.eq(idx).addClass("active").siblings($lis).removeClass("active");
		});

		/*小圆点业务*/
		$lis.each(function(i) {
			$(this).mouseenter(function() {
				$spans.eq(i).stop().fadeIn();
			});

			$(this).mouseleave(function() {
				$spans.eq(i).stop().fadeOut();
			});

			$(this).click(function() {

				//备份老信号量
				var oldidx = idx;
				
				//点击时动画入场出场逻辑
				idx = parseInt($(this).attr("data-go"));

				if(idx != oldidx) {
					outAnimateArr[oldidx]();
					inAnimateArr[idx]();
				}else if(idx == oldidx){
					return;
				}

				lock = false;
				setTimeout(function() {
					lock = true;
				}, 500);

				if(i == 2) {
					$content.animate({
						'top': -100 * i + '%',
						'left': -100 + '%'
					}, 600);
					$lis.eq(i).addClass("active").siblings($lis).removeClass("active");

					return;
				};

				$content.animate({
					'top': -100 * i + '%',
					'left': -100 * i + '%'
				}, 600);
				$lis.eq(i).addClass("active").siblings($lis).removeClass("active");
			});
		});
	});

	console.log("%c 此页面由胡涛个人所设计，部分借鉴网络，需要模板请联系qq:1033715415\n(http://shang.qq.com/open_webaio.html?sigt=fb73900099a16c65dfcf7459b886f37d8d63665015240a584bc3de8195e102eaedc3fe09db8bfbdaa673219319c9c6c8&sigu=2f8a835844ece7316af6d47fe2c8007647dd052375a483e9e206744efd6f47818e445a777e296f2f&tuin=1033715415。)", "color:blue");
})();