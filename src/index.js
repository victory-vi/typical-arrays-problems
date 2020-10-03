
exports.min = function min (array) {
if (Array.isArray(array)) {
        if (array.length == 0) {
            return 0;
        } else
        if (array.length > 0) {
            minElement = array[0];
            for (var i = 0; i < array.length; i++) {
                if (minElement > array[i]) {
                    minElement = array[i];
                }
            }
        }
        return minElement;
    } else return 0;
}

exports.max = function max (array) {
 if (Array.isArray(array)) {
        if (array.length == 0) {
            return 0;
        } else
        if (array.length > 0) {
            maxElement = array[0];
            for (var i = 0; i < array.length; i++) {
                if (maxElement < array[i]) {
                    maxElement = array[i];
                }
            }
        }
        return maxElement;
    } else return 0;
}

exports.avg = function avg (array) {
    if (Array.isArray(array)) {
        if (array.length == 0) {
            return 0;
        } else if (array.length > 0) {
            element = 0;
            for (var i = 0; i < array.length; i++) {
                element += array[i];
            }
            return element / (array.length);
        }

    } else return 0;
}
