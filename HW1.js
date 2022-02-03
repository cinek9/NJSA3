zad.1

<script>

function isSubsting() {

var mainString = 'Lorem ipsum';
var subString = 'ipsum';
var result = mainString.includes(subString);

alert(result);

}

</script>

//zad.2

    const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const array2 = [5, 8];

    let max = array2[1], min = array2[0];
    for (let i = 0; i < array2.length; i++) {
  
        // If we get any element in array greater
        // than max, max takes value of that
        // larger number
        if (array1[i] > max) { max = array2[i]; }
  
        // If we get any element in array smaller
        // than min, min takes value of that
        // smaller number
        if (array1[i] < min) { min = array2[i]; }

        for(let i = min; i <= max; i++){
            console.log(i);
    }
}
