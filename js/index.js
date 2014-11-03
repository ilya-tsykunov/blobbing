$(function() {
	blobbing();
	radials();
});

var blobbing = function() {
	$(".checkpoint").hover(function() {
    var $cur = $(this);
    var dest = $cur.position().left - 30;
    var t = 0.9;
    TweenMax.to($(".blob"),t,{x:dest,ease:Back.easeOut});
  });
};

var radials = function() {
	var $blob = $('.blob');
	var blobWidth = $blob.width();
	var blobHeight = $blob.height();
	var extra = 20;
	var duration = 1;

	var $radialPattern = $("<div class='radial'></div>");
	
	var $west = $radialPattern.clone();
	$blob.append($west);
	$west.offset({
		top: $west.offset().top + blobHeight/2 - $west.height()/2, 
		left: $west.offset().left - extra
	});
	TweenMax.to($west, duration, {
		left: blobWidth - $west.width() + extra + 'px', 
		ease: Power0.easeInOut, 
		repeat: -1,
		yoyo: true
	});

	var $east = $radialPattern.clone();
	$blob.append($east);
	$east.offset({
		top: $east.offset().top + blobHeight/2 - $east.height()/2, 
		left: $east.offset().left + blobWidth - $east.width() + extra
	});
	TweenMax.to($east, duration, {
		left: -extra + 'px', 
		ease: Power0.easeInOut, 
		repeat: -1,
		yoyo: true
	});

	var $north = $radialPattern.clone();
	$blob.append($north);
	$north.offset({
		top: $north.offset().top - extra,
		left: $north.offset().left + blobWidth/2 - $north.width()/2,
	});
	TweenMax.to($north, duration, {
		top: blobHeight - $north.height() + extra + 'px', 
		ease: Power0.easeInOut, 
		repeat: -1,
		yoyo: true
	});

	var $south = $radialPattern.clone();
	$blob.append($south);
	$south.offset({
		top: $south.offset().top + blobHeight - $south.height() + extra,
		left: $south.offset().left + blobWidth/2 - $south.width()/2,
	});
	TweenMax.to($south, duration, {
		top: -extra + 'px', 
		ease: Power0.easeInOut, 
		repeat: -1,
		yoyo: true
	});
}