// to run this code use https://www.jdoodle.com editor
// cause they support standard input/outpu for javascript
/* for using browser-console, please replace print with console.log()
   and provide the input array in the first line i.e variable named array */
   
var array = readline().split(' ').map(el => parseInt(el, 10));

function bubbleSort(arr, n) {
    if(n===1) return;
    else {
        for(i=0; i<=n-1; i++) {
            if(arr[i]>arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        
        bubbleSort(arr, n-1);
    }
}

bubbleSort(array, array.length-1);

print(array);