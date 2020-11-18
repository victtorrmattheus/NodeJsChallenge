/**1) Crie uma função chamada sort que ordene o array 
 * abaixo do menor para o maior e retorne um novo array ordenado.
 *  var array_to_sort = [9,3,2,19,3,4,10,34,-99,99] 
 * Não utilize a função sort nativa do ordenamento de arrays
 * */

function sort(array_to_sort) {

    var aux = null;


    for (i = 0; i < array_to_sort.length; i++) {
        if (i < (array_to_sort.length - 1)) {
            count = i + 1
        }
        for (j = 0; j < array_to_sort.length; j++) {
            if (array_to_sort[j] > array_to_sort[count]) {
                aux = array_to_sort[j]
                array_to_sort[j] = array_to_sort[count]
                array_to_sort[count] = aux

            }
        }
    }

    return array_to_sort

}

var array_to_sort = [9, 3, 2, 19, 3, 4, 10, 34, -99, 99]

//console.log(sort(array_to_sort))

/**2) Crie uma função que calcule qualquer o fatorial
 *  de um número natural e retorne o resultado 
 * */

function fatorial(number) {
    var fat = number
    for (i = number - 1; i > 1; i--) {
        fat *= i

    }
    return fat
}

var number = 7
//console.log(fatorial(number))


/** 3) Crie uma função que calcule a sequencia de Fibonacci 
 * */

function fibo(qtd) {

    var ulti = 1
    var penul = 0
    var result = null
    console.log(0)
    console.log(1)
    if(qtd <= 2){
        result = qtd - 1
        console.log(result)
    } else{
        var count = 3

        while(count <= qtd){
            result = penul + ulti
            penul = ulti
            ulti = result
            count++
            console.log(result)
        }
        
    }
    
    

}

var qtd = 20
//fibo(qtd)
