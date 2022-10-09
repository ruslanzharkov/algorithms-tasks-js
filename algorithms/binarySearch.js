function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (list[middle] === item) {
            return middle;
        }
        if (list[middle] > item) {
            high = middle - 1;
        }

        if (list[middle] < item) {
            low = middle + 1
        }
    }
    return null;
}
