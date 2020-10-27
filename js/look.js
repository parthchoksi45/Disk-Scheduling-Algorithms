function lookqueue(){
    var head=parseInt(start_track);
    var r=[];
    var l=[];
    for (var i = 0; i < request_queue.length; i++) {
            if (request_queue[i] < head)
                l.push(request_queue[i]);
            if (request_queue[i] > head)
                r.push(request_queue[i]);
        }    
        l.sort(function(a, b){return a - b});
        r.sort(function(a, b){return a - b});
        var run = 2;
	while (run--) {
		if (direction == "left") {
			for (var i = l.length - 1; i >= 0; i--) {
				var cur_track = l[i];

				// appending current track to seek sequence
				seek_queue.push(parseInt(cur_track));
                
			}
			direction = "right";
		}
		else if (direction == "right") {
			for (var i = 0; i < r.length; i++) {
				var cur_track = r[i];
				// appending current track to seek sequence
				seek_queue.push(parseInt(cur_track));
			}
			direction = "left";
		}
	}
}