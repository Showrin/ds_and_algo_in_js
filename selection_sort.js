// to run this code use https://www.jdoodle.com editor
// cause they support standard input/outpu for javascript
/* for using browser-console, please replace print with console.log()
   and provide the input array in the first line i.e variable named array */
   
var array = readline().split(' ').map(el => parseInt(el, 10));

function selectionSort(arr, j=0) {
    var n = arr.length;
    
    if(j===n-1) return;
    else {
        for(i=j; i<=n-1; i++) {
            if(arr[i]<arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        
        selectionSort(arr, ++j);
    }
}

selectionSort(array);

print(array);