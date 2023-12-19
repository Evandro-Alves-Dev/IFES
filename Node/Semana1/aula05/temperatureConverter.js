function celsiusToF(celsius) {
    return (celsius * 1.8) + 32;
}

function FToCelsius(F) {
    return (F - 32) / 1.8;
}

module.exports = {
    celsiusToF, FToCelsius
}