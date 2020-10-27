function sstfqueue()
{
    var head=parseInt(start_track);
    while(request_queue.length!=0)
    {
        var difference_array=[];
        var difference_index = new Map();
        for(var i=0;i<request_queue.length;i++)
        {
            var temp=Math.abs(head-request_queue[i]);
            difference_array.push([temp,parseInt(request_queue[i])]);

        }
        difference_array.sort(function(a,b){
            return a[0]-b[0];
        })
        var ans;
        console.log(difference_array);
        if(difference_array.length!=1 && difference_array[0][0]==difference_array[1][0])
        {
            if(direction=="left")
            {
                if(difference_array[0][1]<head)
                ans=difference_array[0][1];
                else
                ans=difference_array[1][1];
            }
            else{
                if(difference_array[0][1]>head)
                ans=difference_array[0][1];
                else
                ans=difference_array[1][1];
            }
        }
        else{
            ans=difference_array[0][1];
            if(ans>head)
            direction="right";
            else
            direction="left";
        }
        console.log(ans);
        var j=parseInt(request_queue.indexOf(ans));
        console.log(j);
        request_queue.splice(j,1);
        head=ans;
        seek_queue.push(ans);
    }
}