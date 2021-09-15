function increment(array){
    id = 0;
    array.forEach(object => {
        object.id = id;
        id ++;
    });
}

module.exports = increment;