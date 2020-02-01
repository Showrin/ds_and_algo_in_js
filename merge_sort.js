// to run this code use https://www.jdoodle.com editor
// cause they support standard input/outpu for javascript
/* for using browser-console, please replace print with console.log()
   and provide the input array in the first line i.e variable named array */
   
var array = readline().split(' ').map(el => parseInt(el, 10));

function merge(arr, l, m, r) {
    var n1 = m-l+1;
    var n2 = r-m;
    var l_arr = [], r_arr = [];
    var i,j,k;
    
    for(i=0; i<n1; i++) {
        l_arr[i] = arr[l+i];
    }
    
    for(j=0; j<n2; j++) {
        r_arr[j] = arr[m+1+j];
    }
    
    i=0; 
    j=0;
    k=l;
    
    while(i<n1 && j<n2) {
        if(l_arr[i] <= r_arr[j]) {
            arr[k] = l_arr[i];
            i++;
        } else {
            arr[k] = r_arr[j];
            j++;
        }
        k++;
    }
    
    while(i<n1) {
        arr[k] = l_arr[i];
        i++;
        k++;
    }
    
    while(j<n2) {
        arr[k] = r_arr[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if(l < r) {
        var m = Math.floor((l+r-1)/2);
        
        mergeSort(arr, l, m);
        mergeSort(arr, m+1, r);
        
        merge(arr, l, m, r);
    }
}

mergeSort(array, 0, array.length-1);

print(array);