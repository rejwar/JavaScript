function cutFruitPieces(fruit)
{
    return fruit * 4;
}

function fruitProcessor(apples,orange)
{
    const applePices = cutFruitPieces(apples);
    const orangePices = cutFruitPieces(orange);

    const juice = `juice With ${applePices} piece of apple and ${orangePices} pieces of oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));
