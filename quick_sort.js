// to run this code use https://www.jdoodle.com editor
// cause they support standard input/outpu for javascript
/* for using browser-console, please replace print with console.log()
   and provide the input array in the first line i.e variable named array */
   
var array = readline().split(' ').map(el => parseInt(el, 10));

function partition(arr, low, high) {
    
    var pivot = arr[high];
    
    for(var i=low-1, j=low; j<high; j++) {
        if(arr[j] < pivot) {
            
            i++;
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    
    temp = arr[i+1];
    arr[i+1] = pivot;
    arr[high] = temp;
    
    return i+1;
}

function quickSort(arr, low, high) {
    
    if(low < high) {
        var pi = partition(arr, low, high);
        
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
}

quickSort(array, 0, array.length-1);

print(array);