function cscanqueue()
{
    var head=parseInt(start_track);
    var r=[];
    var l=[];
    l.push(0);
    r.push(parseInt(max_track_size-1));
    for (var i = 0; i < request_queue.length; i++) {
        if (request_queue[i] < head)
            l.push(request_queue[i]);
        if (request_queue[i] > head)
            r.push(request_queue[i]);
    }    
    l.sort(function(a, b){return a - b});
    r.sort(function(a, b){return a - b});
    if(direction=="right")
    {
        for (var i = 0; i < r.length; i++) { 
            var temp=r[i];
            seek_queue.push(temp);
        } 
        for (var i = 0; i < l.length; i++) { 
            var temp=l[i];
            seek_queue.push(temp);
        } 
    }
    else
    {
        for (var i = 0; i < l.length; i++) { 
            var temp=l[i];
            seek_queue.push(temp);
        } 
        for (var i = 0; i < r.length; i++) { 
            var temp=r[i];
            seek_queue.push(temp);
        } 
    }
}