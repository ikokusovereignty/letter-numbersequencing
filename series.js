export function generateSeries(length) {
    let series = []

    while (series.length < length) {
        let character
        if (series.length == 0 || series.length % 2 == 0) {
            character = String.fromCharCode(65 + Math.floor(Math.random() * 26))
            if (series.indexOf(character) < 0) { 
                series.push(character)
            }
        } else {
            character = String.fromCharCode(48 + Math.floor(Math.random() * 10))
            if (series.indexOf(character) < 0) { 
                series.push(character)
            }
        }
    }

    return series
}

export function reorderSeries(series) {
    return [...series].sort()
}