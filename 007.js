function checkLength(path) {
    if (path.length >= 2 && path.length <= 12)
        return true;
    return false;
}

function checkSpecialChars(path) {
    if (path.indexOf("&") > -1 ||
        path.indexOf("$") > -1 ||
        path.indexOf("%") > -1 ||
        path.indexOf("*") > -1)
        return true;
    return false;
}

function checkStartAndEndChars(path) {
    if (path.indexOf("q") == 0 || path.lastIndexOf("z") == path.length - 1)
        return true;
    return false;
}

function checkPassword(path) {
    if (checkLength(path) && checkSpecialChars(path) && checkStartAndEndChars(path))
        return "Корректный пароль";
    return "Некорректный пароль";
}