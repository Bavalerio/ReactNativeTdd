const esMayor = (a, b) => {
    if (a > b) {
        return true;
    }
	return false;
}

const esIgual = (a, b) => {
    if (a === b) {
        return true;
    }
	return false;
}

export { esMayor, esIgual };