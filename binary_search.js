// to run this code use https://www.jdoodle.com editor
// cause they support standard input/outpu for javascript
/* for using browser-console, please replace print with console.log()
   and provide the input array in the first line i.e variable named array */
   
var array = readline().split(' ').map(el => parseInt(el, 10));

function search(arr, el, low, high) {
    var presence = -1;
    var mid = Math.floor((low+high)/2);
    
    if(low <= high) {
        if(el === arr[mid]) {
            presence = mid;
        } else if(el > arr[mid]) {
            presence = search(arr, el, mid+1, high);
        } else {
            presence = search(arr, el, low, mid-1);
        }
    }
    
    return presence;
}

array.sort((x,y) => x-y);

print(search(array, 500, 0, array.length-1));