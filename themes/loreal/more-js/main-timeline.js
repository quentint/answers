/* 
 * datagif
 * 
 */

/* 
 * TODO
 * 

- Resize en mediaqueries avec transform scale en css, et non avec les fonction resize (à virer ?)

- spotter les ########## à voir

*/

$(function() {
	
	/* Inits */
	
	// Global vars, functions & sets
	
	var $window = $(window),
		B = [],
		pos = $window.scrollLeft(),
		minWidths = {introduction: $('#introduction').width(), demain: $('#demain').width()},
		current = '#introduction',
		currentB = 0;
	$('nav .arrow.prev').hide();
	$(current).addClass('current');
	
	// Init Stellar function
	
	function initStellar() {
		$('.ground-1').attr('data-stellar-ratio', '1.5');
		$('.ground-2').attr('data-stellar-ratio', '1.3');
		$('.ground-3').attr('data-stellar-ratio', '1.1');
	
		$window.stellar({
			horizontalOffset: 30,
			hideDistantElements: true,
			verticalScrolling: false,
			parallaxBackgrounds: false
		});
	}
	
	/* Nav */
	
	// Direct access
	
	var hash = document.location.hash.substring(1);
	if (hash != '' && hash != undefined) {
		if ('pushState' in history)
			undefined;// history.pushState('', document.title, window.location.pathname); ##########
		else
			window.location.hash = '';
		$.doTimeout(200, function() {$('nav ul a[href="#'+hash+'"]').trigger('click');});
	}
	
	// Footer nav
	
	function getIndexOf(name) {
		for (var i = 0; i < B.length; i++) {
			if (B[i].boxName == name)
				return i;
		}
		return -1;
	}
	
	function navTo(targt) {
		
		if (targt == 'next' || targt == 'prev') {
			
			if ((targt == 'prev' && current == '#introduction') || (targt == 'next' && current == '#demain'))
				return false;
			
			var $target = $(current)[targt]();
			
		} else {
			var $target = $(targt);
		}
		
		if ($target.attr('id') === undefined)
			$target = $('#introduction');
		
		current = '#'+$target.attr('id');
		currentB = getIndexOf(current);
		
		// Scroll to box & animate it
		
		$.scrollTo.window().stop(1);
		$.scrollTo($target, 1000, {axis: 'x', easing: 'easeInOutQuad', offset: -30, onAfter: function() {
			if (!B[currentB].launchedAnim) {
				B[currentB].launchAnim();
				B[currentB].launchedAnim = true;
			}
		}});
		
		$('article').removeClass('current');
		$target.addClass('current');
		
		$('nav .current-indicator').stop(1).animate({'margin-left': Math.floor($('nav ul li a[href*="'+$target.attr('id')+'"]').position().left)}, 1000, 'easeInOutQuad');
		$('nav .arrow.prev')[current == '#introduction' ? 'fadeOut' : 'fadeIn'](400);
		$('nav .arrow.next')[current == '#demain' ? 'fadeOut' : 'fadeIn'](400);
		
	}
	
	$('nav .arrow').click(function(e) {
		if ($(this).hasClass('prev'))
			navTo('prev');
		if ($(this).hasClass('next'))
			navTo('next');
		e.preventDefault();
	});
	
	$('nav ul a').click(function(e) {
		navTo($(this).attr('href'));
		e.preventDefault();
	});
	
	// Keyboard nav & events
	
	$(document).keydown(function(e) {
		var k = e.keyCode;
		
		if (k == 37) {
			navTo('prev');
			e.preventDefault();
		} else if (k == 39) {
			navTo('next');
			e.preventDefault();
		}
	});
	
	// Menu effect
	
	$('#sidebar').hover(function() {
		// handler over
		$(this).stop(1).animate({left: '0px', 'padding-right': '35px'}, 300, 'easeOutQuart');
	}, function() {
		// handler out
		$(this).stop(1).animate({left: '-290px', 'padding-right': '65px'}, 400, 'easeInOutQuad');
	});
	
	/* Resize functions */
	
	$window.resize(function() {
		
		// Blocs width
		$('#introduction, #demain').each(function() {
			if ($window.width() > minWidths[$(this).attr('id')])
				$(this).css({width: $window.width()+'px'});
		});
		$('nav .current-indicator').css({width: ($('nav ul li:first').width()-0)+'px', 'margin-left': Math.floor($('nav ul li a[href*="'+$(current).attr('id')+'"]').position().left)});
		$('#main').css({width: (function() {
			var w = 0;
			$('article').each(function() {
				w += $(this).outerWidth();
			});
			return w+500;
		})()+'px'});
		$.scrollTo.window().stop(1);
		$.scrollTo($(current), 0, {axis: 'x', offset: -30});
		
		// ########## SI BESOIN, FONCTIONS À ACTIVER ?
		
		function scaleAllPapers() {
			for (var i = 0; i < 40; i++) {
				B[i].resize();
			}
		}
		
		function scalePaper(paper, ratio) {
			var w = paper.width*ratio, h = paper.height*ratio;
			paper.setSize(w, h);
			$(paper.canvas.parentElement).css({width: w, height: h});
		}
		
	});
	
	/* Init & anim functions per boxes */
	
	// Raphael constructors & customs
	
	function Raph(e, w, h) {
		var paper = Raphael(e, w, h);
		paper.setViewBox(0, 0, w, h, true);
		return paper;
	}
	
	var paramBlack = {fill: '#000', stroke: 'none'};
	
	$.fn.showAchiev = function(time) {
		var time = time == undefined ? 0 : time;
		this.each(function() {
			$(this).delay(time).animate({opacity: 1, 'margin-top': 0}, 600);
		});
	};
	
	// Intro
	
	B[0] = {
		boxName: '#introduction',
		launchedAnim: false,
		launchAnim: function() {
			$(B[0].boxName+' .details p').delay(1000).animate({opacity: 1}, 800);
		},
		resize: function() {
			
		}
	};
	
	// Date-1
	
	B[1] = {
		boxName: '#date-1',
		launchedAnim: false,
		launchAnim: function() {
			$(B[1].boxName+' .pict').pngif(1);
			$(B[1].boxName+' .achievement').showAchiev(4200);
		},
		resize: function() {
			
		}
	};
	
	// Date-2
	
	B[2] = {
		boxName: '#date-2',
		launchedAnim: false,
		launchAnim: function() {
			$(B[2].boxName+' .pict.ground-2 img').each(function(i) {
				$(this).delay(i*400).queue(function() {$(this).removeClass('idle');});
			});
			$(B[2].boxName+' .achievement').showAchiev(1600);
		},
		resize: function() {
			
		}
	};
	
	// Date-3
	
	B[3] = {
		boxName: '#date-3',
		launchedAnim: false,
		launchAnim: function() {
			$(B[3].boxName+' .achievement').showAchiev(0);
		},
		resize: function() {
			
		}
	};
	
	// Date-4
	
	B[4] = {
		boxName: '#date-4',
		illu: Raph($('#date-4 .pict.ground-2 .i2')[0], 108, 375),
		el: {},
		launchedAnim: false,
		launchAnim: function() {
			$(B[4].boxName+' .pict.ground-2 .img').animate({right: '+=162', bottom: '+=70'}, 800, 'easeInOutQuad').animate({bottom: '-=70'}, 800, 'easeInOutQuad', function() {
				B[4].el.pince.animate({path: B[4].v[1]}, 500, 'easeInOut');
				$(B[4].boxName+' .pict.ground-2 .i2').stop(1).animate({bottom: '+=30'}, 800, 'easeInOutQuad').animate({right: '-=100', bottom: '-=20'}, 800, 'easeInOutQuad');
			});
		},
		resize: function() {
			
		}
	};
	B[4].v = ['M86.8,338l-16-265.3l-1.9-62L52.6,0L36.1,10.6l-1.9,62L19.6,338.7c-1.1,4.2-1.2,10.9,3.6,14c3.7,2.3,23,20.6,23,20.6l1.4-4.1c0,0-16.9-20.5-19.1-22.5c-1.7-1.5-1.3-3.9-0.8-5.9l25.1-231.1l24.8,229.6c0.3,2.2,0.6,5.4-1.2,7.4c-2,2.2-19.1,22.5-19.1,22.5l1.4,4.1c0,0,19.7-17.8,23-20.6C86.9,348.3,87.2,345,86.8,338zM53.9,88.1c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3C59.2,85.7,56.8,88.1,53.9,88.1z', 'M107.8,338l-37-265.3l-1.9-62L52.6,0L36.1,10.6l-1.9,62L0.6,338.7c-1.1,4.2-1.2,10.9,3.6,14c3.7,2.3,23,20.6,23,20.6l1.4-4.1c0,0-16.9-20.5-19.1-22.5c-1.7-1.5-1.3-3.9-0.8-5.9l44.1-231.1l45.8,229.6c0.3,2.2,0.6,5.4-1.2,7.4c-2,2.2-19.1,22.5-19.1,22.5l1.4,4.1c0,0,19.7-17.8,23-20.6C107.9,348.3,108.2,345,107.8,338zM53.9,88.1c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3C59.2,85.7,56.8,88.1,53.9,88.1z'];
	B[4].el.pince = B[4].illu.path(B[4].v[0]).attr(paramBlack);
	
	// Date-5
	
	B[5] = {
		boxName: '#date-5',
		launchedAnim: false,
		launchAnim: function() {
			$(B[5].boxName+' .pict.ground-2 .i1').delay(800).queue(function() {$(this).removeClass('idle')});
			$(B[5].boxName+' .achievement').showAchiev(1600);
		},
		resize: function() {
			
		}
	};
	
	// Date-6
	
	B[6] = {
		boxName: '#date-6',
		launchedAnim: false,
		launchAnim: function() {
			$(B[6].boxName+' .pict .i2').removeClass('idle');
		},
		resize: function() {
			
		}
	};
	
	// Date-7
	
	B[7] = {
		boxName: '#date-7',
		launchedAnim: false,
		launchAnim: function() {
			$(B[7].boxName+' .pict .i2').removeClass('idle');
		},
		resize: function() {
			
		}
	};
	
	// Date-8
	
	B[8] = {
		boxName: '#date-8',
		launchedAnim: false,
		launchAnim: function() {
			$(B[8].boxName+' .pict.ground-2 img').each(function(i) {
				$(this).delay(i*200).queue(function() {$(this).removeClass('idle');});
			});
			$(B[8].boxName+' .pict .i2').delay(1200).queue(function() {$(this).pngif(1);});
			$(B[8].boxName+' .achievement').showAchiev(1800);
		},
		resize: function() {
			
		}
	};
	
	// Date-9
	
	B[9] = {
		boxName: '#date-9',
		launchedAnim: false,
		launchAnim: function() {
			$.doTimeout('date9OneZero', 1600, function() {
				$(B[9].boxName+' .pict.ground-2 .i'+Math.round(Math.random()*6+2)).pngif(1, 15);
				return true;
			});
			$.doTimeout('date9OneZero', true);
		},
		resize: function() {
			
		}
	};
	
	
	// Date-10
	
	B[10] = {
		boxName: '#date-10',
		launchedAnim: false,
		launchAnim: function() {
			$(B[10].boxName+' .pict.ground-2').pngif(1, 18);
			$(B[10].boxName+' .pict.ground-3 .i2').delay(800).animate({opacity: 1}, 500);
		},
		resize: function() {
			
		}
	};
	
	// Aujourd'hui
	
	B[11] = {
		boxName: '#aujourdhui',
		launchedAnim: false,
		launchAnim: function() {
			$(B[11].boxName+' .pict.ground-3').pngif(1);
			$(B[11].boxName+' .bubble').delay(2800).animate({opacity: 1, 'margin-top': 0}, 600);
			$(B[11].boxName+' .achievement').showAchiev(3600);
		},
		resize: function() {
			
		}
	};
	
	
	// Demain
	
	B[12] = {
		boxName: '#demain',
		illu: Raph($('#demain .pict.ground-3 .i6')[0], 600, 450),
		el: [],
		launchedAnim: false,
		launchAnim: function() {
			for (var i = 0; i < 8; i++) {
				B[12].el[i].animate(Raphael.animation({cx: B[12].v[i].x, cy: B[12].v[i].y, r: 184}, 1500, 'easeInOut').delay(80*i));
			}
			$(B[12].boxName+' .pict.ground-3 .img:not(.i6)').each(function(i) {
				$(this).delay(i*200+500).queue(function() {$(this).removeClass('idle')});
			});
			$(B[12].boxName+' .pict.ground-2 .img').each(function(i) {
				$(this).delay(i*200+2500).queue(function() {$(this).removeClass('idle')});
			});
			$(B[12].boxName+' .achievement').showAchiev(3600);
		},
		resize: function() {
			
		}
	};
	
	B[12].v = [
		{x: 280, y: 133},
		{x: 345, y: 160},
		{x: 372, y: 225},
		{x: 345, y: 290},
		{x: 280, y: 317},
		{x: 215, y: 290},
		{x: 188, y: 225},
		{x: 215, y: 160}
	];
	
	for (var i = 0; i < 8; i++) {
		B[12].el.push(B[12].illu.circle(280, 225, 58).attr({stroke: '#000', 'stroke-width': 1}));
	}
	
	
	// Here we go!
	
	
	$window.resize();
	initStellar();
	navTo(current);
	$('#sidebar').delay(1000).queue(function(){$(this).trigger('mouseout')});
	
});

/* pngif v0.1 - Didjo */
$.fn.pngif=function(loops,fps){var loops=loops==undefined?0:loops,fps=fps==undefined?25:fps;this.each(function(){var el=$(this),loop=loops,i=0,height=el.height(),frames;var animate=function(){var bgPos=0,bgPos='-'+i*height+'px';el.css('background-position',['0 ',bgPos].join(''));if(i<frames){i++}else{if(loops==0){i=0}else{loop--;if(loop==0){return}else{i=0}}}window.setTimeout(function(){(0,animate)()},1000/fps);};$('<img/>').attr('src',function(){var imgUrl=el.css('background-image');imgUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/.exec(imgUrl)[2];return imgUrl}).load(function(){frames=Math.floor($(this)[0].height/height)-1;animate()})});return this;};

