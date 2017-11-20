function loop_clicks() {
	count = $('button.search-result__actions--primary').not('button.message-anywhere-button').length;
	if (count === 0) {
		next();
	}
	else {
		$('button.search-result__actions--primary').not('button.message-anywhere-button').each( function() {
			click_connect($(this));
			if (!--count) {
				next();
			}
		});
	}
}


function click_connect($obj) {
	$obj.click();
	$('button.ml3').click();
}

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function next() {
	$('button.next').click();
	delay(function(){ loop_clicks(); }, 3500);
}

loop_clicks();
