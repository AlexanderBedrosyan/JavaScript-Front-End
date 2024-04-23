function solve(arr){
    let n = arr.shift();
    let pianoDetails = {};
    
    while (n > 0){
        n -= 1;
        let details = arr.shift();
        let [piece, composer, key] = details.split('|');
        pianoDetails[piece] = {composer, key}
    }
    
    arr.pop();

    arr.forEach(element => {
        let details = element.split('|');
        let command = details.shift();

        if (command === 'Add') {
                let [piece, composer, key] = details;
                if (pianoDetails.hasOwnProperty(piece)){
                    console.log(`${piece} is already in the collection!`)
                } else {
                    pianoDetails[piece] = {composer, key}
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
        } else if (command === 'Remove') {
            let piece = details[0];
            if (pianoDetails.hasOwnProperty(piece)){
                delete pianoDetails[piece];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {
                let [piece, newKey] = details;
                if (pianoDetails.hasOwnProperty(piece)) {
                    pianoDetails[piece]["key"] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
        } 
    });

    for (const piece in pianoDetails) {
        let details = pianoDetails[piece];
        console.log(`${piece} -> Composer: ${details.composer}, Key: ${details.key}`)
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )

// solve(
//     [
//         '4',
//         'Eine kleine Nachtmusik|Mozart|G Major',
//         'La Campanella|Liszt|G# Minor',
//         'The Marriage of Figaro|Mozart|G Major',
//         'Hungarian Dance No.5|Brahms|G Minor',
//         'Add|Spring|Vivaldi|E Major',
//         'Remove|The Marriage of Figaro',
//         'Remove|Turkish March',
//         'ChangeKey|Spring|C Major',
//         'Add|Nocturne|Chopin|C# Minor',
//         'Stop'
//       ]
      
// )