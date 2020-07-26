function selectionSort(list){
    // Getting the set length
    let length = list.length;
    
    // Main loop to iterate over all set elements
    for(var i = 0; i < length; i++) {
        // Min is the part that we are not going to loop again
        var min = i;
        for(var j = i + 1; j < length; j++) {
            // Executing statement comparison
            if(list[min] > list[j]) {
                // Updating our current min index to iterate
                min = j;
            }
        }
        
        // Swaping values
        if(min !== i) {
            algorithms.SelectionSortData.push([min, i])
            let temp = list[i];
            list[i] = list[min];
            list[min] = temp;
        }
    }
    
    return list;
  }