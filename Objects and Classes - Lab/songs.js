function solve(arr){
    class Song {
        constructor (typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    
    let songs = [];
    let typeOfSong = arr.pop();
    let num = arr.shift();

    for (const element of arr) {
        let [typeSong, songName, time] = element.split('_')
        let currentSong = new Song(typeSong, songName, time)
        songs.push(currentSong)
    }

    for (const currentClass of songs) {
        if (typeOfSong === 'all'){ 
            console.log(currentClass.name)
        }
        else if (currentClass.typeList === typeOfSong){
            console.log(currentClass.name)
        }
    }
}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)    