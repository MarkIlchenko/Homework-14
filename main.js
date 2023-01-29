

function makeNumbers() {
    let count = 0;

    return function(inner) {
        return count += inner;
    };
}

let numbers = makeNumbers();

alert( numbers(3) );
alert( numbers(5) );
alert( numbers(20) );

