/* Stellar.js v0.2.2 - Copyright 2012, Mark Dalgleish */
(function(a,b,c,d){function l(b,c){this.element=b,this.options=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}var e="stellar",f={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,viewportDetectionInterval:1e4,hideElement:function(a){a.hide()},showElement:function(a){a.show()}},g={scroll:{getTop:function(a){return a.scrollTop()},setTop:function(a,b){a.scrollTop(b)},getLeft:function(a){return a.scrollLeft()},setLeft:function(a,b){a.scrollLeft(b)}},position:{getTop:function(a){return parseInt(a.css("top"),10)*-1},setTop:function(a,b){a.css("top",b)},getLeft:function(a){return parseInt(a.css("left"),10)*-1},setLeft:function(a,b){a.css("left",b)}},margin:{getTop:function(a){return parseInt(a.css("margin-top"),10)*-1},setTop:function(a,b){a.css("margin-top",b)},getLeft:function(a){return parseInt(a.css("margin-left"),10)*-1},setLeft:function(a,b){a.css("margin-left",b)}},transform:{getTop:function(a){return a.css(i+"transform")!=="none"?parseInt(a.css(i+"transform").match(/(-?[0-9]+)/g)[5],10)*-1:0},setTop:function(a,b){j(a,b,"Y")},getLeft:function(a){return a.css(i+"transform")!=="none"?parseInt(a.css(i+"transform").match(/(-?[0-9]+)/g)[4],10)*-1:0},setLeft:function(a,b){j(a,b,"X")}}},h={position:{setTop:function(a,b){a.css("top",b)},setLeft:function(a,b){a.css("left",b)}},transform:{setTop:function(a,b,c){j(a,b-c,"Y")},setLeft:function(a,b,c){j(a,b-c,"X")}}},i=function(){var b="";return a.browser.webkit?b="-webkit-":a.browser.mozilla?b="-moz-":a.browser.opera?b="-o-":a.browser.msie&&(b="-ms-"),b}(),j=function(a,b,c){var d=a.css(i+"transform");d==="none"?a.css(i+"transform","translate"+c+"("+b+"px)"):a.css(i+"transform",k(d,/(-?[0-9]+[.]?[0-9]*)/g,c==="X"?5:6,b))},k=function(a,b,c,e){var f,g,h;return a.search(b)===-1?a:(f=a.split(b),h=c*2-1,f[h]===d?a:(f[h]=e,f.join("")))};l.prototype={init:function(){this.options.name=e+"_"+Math.floor(Math.random()*1e4),this._defineElements(),this._defineGetters(),this._defineSetters(),this.refresh(),this._startViewportDetectionLoop(),this._startAnimationLoop()},_defineElements:function(){this.element===c.body&&(this.element=b),this.$scrollElement=a(this.element),this.$element=this.element===b?a("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==d?a(this.options.viewportElement):this.$scrollElement[0]===b||this.options.scrollProperty.indexOf("scroll")===0?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var a=this;this._getScrollLeft=function(){return g[a.options.scrollProperty].getLeft(a.$scrollElement)},this._getScrollTop=function(){return g[a.options.scrollProperty].getTop(a.$scrollElement)}},_defineSetters:function(){var a=this;this._setScrollLeft=function(b){g[a.options.scrollProperty].setLeft(a.$scrollElement,b)},this._setScrollTop=function(b){g[a.options.scrollProperty].setTop(a.$scrollElement,b)},this._setLeft=function(b,c,d){h[a.options.positionProperty].setLeft(b,c,d)},this._setTop=function(b,c,d){h[a.options.positionProperty].setTop(b,c,d)}},refresh:function(){var c=this,d=c._getScrollLeft(),e=c._getScrollTop();this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),navigator.userAgent.indexOf("WebKit")>0&&a(b).load(function(){var a=c._getScrollLeft(),b=c._getScrollTop();c._setScrollLeft(a+1),c._setScrollTop(b+1),c._setScrollLeft(a),c._setScrollTop(b)}),c._setScrollLeft(d),c._setScrollTop(e)},_findParticles:function(){var b=this,c=this._getScrollLeft(),e=this._getScrollTop();if(this.particles!==d)for(var f=this.particles.length-1;f>=0;f--)this.particles[f].$element.data("stellar-elementIsActive",d);this.particles=[];if(!this.options.parallaxElements)return;this.$element.find("[data-stellar-ratio]").each(function(c){var e=a(this),f,g,h,i,j,k,l,m=0,n=0,o=0,p=0;if(!e.data("stellar-elementIsActive"))e.data("stellar-elementIsActive",this);else if(e.data("stellar-elementIsActive")!==this)return;b.options.showElement(e),e.data("stellar-startingLeft")?(e.css("left",e.data("stellar-startingLeft")),e.css("top",e.data("stellar-startingTop"))):(e.data("stellar-startingLeft",e.css("left")),e.data("stellar-startingTop",e.css("top"))),h=e.position().left,i=e.position().top,k=e.offset().left-parseInt(e.css("margin-left"),10),l=e.offset().top-parseInt(e.css("margin-top"),10),e.parents().each(function(){var b=a(this);if(b.data("stellar-offset-parent")===!0)return m=o,n=p,j=b,!1;o+=b.position().left,p+=b.position().top}),f=e.data("stellar-horizontal-offset")!==d?e.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,g=e.data("stellar-vertical-offset")!==d?e.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:e,$offsetParent:j,isFixed:e.css("position")==="fixed",horizontalOffset:f,verticalOffset:g,startingPositionLeft:h,startingPositionTop:i,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:m,parentOffsetTop:n,stellarRatio:e.data("stellar-ratio")!==d?e.data("stellar-ratio"):1,width:e.outerWidth(!0),height:e.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b=this,c=this._getScrollLeft(),e=this._getScrollTop(),f;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;f=this.$element.find("[data-stellar-background-ratio]"),this.$element.is("[data-stellar-background-ratio]")&&f.add(this.$element),f.each(function(){var f=a(this),g=f.css("background-position").split(" "),h,i,j,k,l,m;if(!f.data("stellar-backgroundIsActive"))f.data("stellar-backgroundIsActive",this);else if(f.data("stellar-backgroundIsActive")!==this)return;f.data("stellar-backgroundStartingLeft")?f.css("background-position",f.data("stellar-backgroundStartingLeft")+" "+f.data("stellar-backgroundStartingTop")):(f.data("stellar-backgroundStartingLeft",g[0]),f.data("stellar-backgroundStartingTop",g[1])),l=f.offset().left-parseInt(f.css("margin-left"),10)-c,m=f.offset().top-parseInt(f.css("margin-top"),10)-e,h=f.data("stellar-horizontal-offset")!==d?f.data("stellar-horizontal-offset"):b.horizontalOffset,i=f.data("stellar-vertical-offset")!==d?f.data("stellar-vertical-offset"):b.verticalOffset,b.backgrounds.push({$element:f,isFixed:f.css("background-attachment")==="fixed",horizontalOffset:h,verticalOffset:i,startingValueLeft:g[0],startingValueTop:g[1],startingBackgroundPositionLeft:isNaN(parseInt(g[0],10))?0:parseInt(g[0],10),startingBackgroundPositionTop:isNaN(parseInt(g[1],10))?0:parseInt(g[1],10),startingPositionLeft:f.position().left,startingPositionTop:f.position().top,startingOffsetLeft:l,startingOffsetTop:m,stellarRatio:f.data("stellar-background-ratio")===d?1:f.data("stellar-background-ratio")})})},destroy:function(){var b,c,d,e;for(var f=this.particles.length-1;f>=0;f--)b=this.particles[f],c=b.$element.data("stellar-startingLeft"),d=b.$element.data("stellar-startingTop"),this._setLeft(b.$element,c,c),this._setTop(b.$element,d,d),this.options.showElement(b.$element),b.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(var f=this.backgrounds.length-1;f>=0;f--)e=this.backgrounds[f],e.$element.css("background-position",e.startingValueLeft+" "+e.startingValueTop);this._animationLoop=a.noop,clearInterval(this._viewportDetectionInterval)},_setOffsets:function(){var c=this;a(b).unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),typeof this.options.horizontalOffset=="function"?(this.horizontalOffset=this.options.horizontalOffset(),a(b).bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,typeof this.options.verticalOffset=="function"?(this.verticalOffset=this.options.verticalOffset(),a(b).bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a=this._getScrollLeft(),b=this._getScrollTop(),c,d,e,f,g,h,i,j=!0,k=!0,l,m,n,o;if(this.currentScrollLeft===a&&this.currentScrollTop===b&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight)return;this.currentScrollLeft=a,this.currentScrollTop=b,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight;for(var p=this.particles.length-1;p>=0;p--)e=this.particles[p],f=e.isFixed?1:0,this.options.horizontalScrolling&&(l=(a+e.horizontalOffset+this.viewportOffsetLeft+e.startingPositionLeft-e.startingOffsetLeft+e.parentOffsetLeft)*-(e.stellarRatio+f-1)+e.startingPositionLeft,n=l-e.startingPositionLeft+e.startingOffsetLeft),this.options.verticalScrolling&&(m=(b+e.verticalOffset+this.viewportOffsetTop+e.startingPositionTop-e.startingOffsetTop+e.parentOffsetTop)*-(e.stellarRatio+f-1)+e.startingPositionTop,o=m-e.startingPositionTop+e.startingOffsetTop),this.options.hideDistantElements&&(k=!this.options.horizontalScrolling||n+e.width>(e.isFixed?0:a)&&n<(e.isFixed?0:a)+this.viewportWidth+this.viewportOffsetLeft,j=!this.options.verticalScrolling||o+e.height>(e.isFixed?0:b)&&o<(e.isFixed?0:b)+this.viewportHeight+this.viewportOffsetTop),k&&j?(e.isHidden&&(this.options.showElement(e.$element),e.isHidden=!1),this.options.horizontalScrolling&&this._setLeft(e.$element,l,e.startingPositionLeft),this.options.verticalScrolling&&this._setTop(e.$element,m,e.startingPositionTop)):e.isHidden||(this.options.hideElement(e.$element),e.isHidden=!0);for(var p=this.backgrounds.length-1;p>=0;p--)g=this.backgrounds[p],f=g.isFixed?0:1,h=this.options.horizontalScrolling?(a-g.horizontalOffset-this.viewportOffsetLeft-g.startingOffsetLeft-g.startingBackgroundPositionLeft)*(f-g.stellarRatio)+"px":g.startingValueLeft,i=this.options.verticalScrolling?(b-g.verticalOffset-this.viewportOffsetTop-g.startingOffsetTop-g.startingBackgroundPositionTop)*(f-g.stellarRatio)+"px":g.startingValueTop,g.$element.css("background-position",h+" "+i)},_startViewportDetectionLoop:function(){var a=this,b=function(){var b=a.$viewportElement.offset();a.viewportWidth=a.$viewportElement.width(),a.viewportHeight=a.$viewportElement.height(),a.viewportOffsetTop=b!==null?b.top:0,a.viewportOffsetLeft=b!==null?b.left:0};b(),this._viewportDetectionInterval=setInterval(b,this.options.viewportDetectionInterval)},_startAnimationLoop:function(){var a=this,c=function(){return b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||b.oRequestAnimationFrame||b.msRequestAnimationFrame||function(a,c){b.setTimeout(a,1e3/60)}}();this._animationLoop=function(){c(a._animationLoop),a._repositionElements()},this._animationLoop()}},a.fn[e]=function(b){var c=arguments;if(b===d||typeof b=="object")return this.each(function(){a.data(this,"plugin_"+e)||a.data(this,"plugin_"+e,new l(this,b))});if(typeof b=="string"&&b[0]!=="_"&&b!=="init")return this.each(function(){var d=a.data(this,"plugin_"+e);d instanceof l&&typeof d[b]=="function"&&d[b].apply(d,Array.prototype.slice.call(c,1)),b==="destroy"&&a.data(this,"plugin_"+e,null)})},a[e]=function(c){var d=a(b);return d.stellar.apply(d,Array.prototype.slice.call(arguments,0))},a[e].scrollProperty=g,a[e].positionProperty=h,b.Stellar=l})(jQuery,window,document);
/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});
/* jQuery Color Animations - http://plugins.jquery.com/project/color */
(function(jQuery){jQuery.each(['backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','color','outlineColor'],function(i,attr){jQuery.fx.step[attr]=function(fx){if(fx.state==0){fx.start=getColor(fx.elem,attr);fx.end=getRGB(fx.end);}
fx.elem.style[attr]="rgb("+[Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1]),255),0),Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2]),255),0)].join(",")+")";}});function getRGB(color){var result;if(color&&color.constructor==Array&&color.length==3)
return color;if(result=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
return[parseInt(result[1]),parseInt(result[2]),parseInt(result[3])];if(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55];if(result=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
return[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)];if(result=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
return[parseInt(result[1]+result[1],16),parseInt(result[2]+result[2],16),parseInt(result[3]+result[3],16)];return colors[jQuery.trim(color).toLowerCase()];}
function getColor(elem,attr){var color;do{color=jQuery.curCSS(elem,attr);if(color!=''&&color!='transparent'||jQuery.nodeName(elem,"body"))
break;attr="backgroundColor";}while(elem=elem.parentNode);return getRGB(color);};var colors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]};})(jQuery);
/* jQuery doTimeout - v1.0 - http://benalman.com/projects/jquery-dotimeout-plugin/ */
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);
/* jQuery.ScrollTo - v1.4.2 http://flesler.blogspot.com/2007/10/jqueryscrollto.html */
(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);