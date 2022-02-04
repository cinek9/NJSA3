/* zad.1 - Napisać funkcję isSubsting, która sprawdza, czy dany string znajduje się w "glównym stringu". 
Pierwszy argument bedzie glówny, drugi substring. Przykład:
isSubsting("Lorem ipsum", "Hello"); // zwróci false, ponieważ "Lorem ipsum" nie zawiera "Hello"
isSubstring("chce kupic nowa koszulke", "pic") // zwróci true, ponieważ "pic" znajduje się w stringu "..ku*pic* nowa ...." */

function isSubstring(subString, mainString)
{
    var M = subString.length;
    var N = mainString.length;
 
    /* A loop to slide pat[] one by one */
    for (var i = 0; i <= N - M; i++) {
        var j;
 
        /* For current index i, check for
 pattern match */
        for (j = 0; j < M; j++)
            if (mainString[i + j] != subString[j])
                break;
 
        if (j == M)
            return i;
    }
 
    return -1;
}
 
/* Driver code */
var subString = "Lorem";
var smainString = "Lorem ipsum";
var result = isSubstring(subString, smainString);
if (result == -1)
    console.log( "Not present");
else
    console.log( "Present at index " + result);



function isSubsting2() {

    var mainString = 'Lorem ipsum';
    var subString = 'Lorem';
    
    return mainString.includes(subString);
}
      isSubsting2();

    /* zad.2 Napisać funkcję elementsInRage, która przyjmuje array liczb, min oraz max. Ma zwrócić array liczb, ktore są w zakresie [min, max] Przyklad:
elementsInRage([1,2,3,4,5,6,7,8,9,10,11] , 5, 8) // [5, 6, 7, 8] elementsInRage([1,2,2,3,3,8,8,3,3,1,1,4,3,2,10,2], 2, 3) // [2, 2,3,3,3,3,3,2,2] 
elementsInRage([1,2,3,4,5,6,7,8,9,10,11] , 100, 120) // [] Proszę wykorzystać do każdego zadania pętli, jeżeli znacie lepsze (estetycznie) rozwiązanie zróbcie 
to jako drugą wersję na przykład: elementsInRange2 */

    function elementsInRage(min, max) {
    
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    
    for (let i = min; i <= max; i++) {
        console.log(i);
        array.push(i);
    }
    return array;
}

elementsInRage(5, 8)
/* => [5, 6, 7, 8] */
