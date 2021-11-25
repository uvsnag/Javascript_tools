function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function formatDate(date) {
    var formatDate = document.getElementById("formatDate").value;
    const d = new Date(date)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    switch(formatDate){
        case 'yyyy-mm-dd':
            return `${ye}-${mo}-${da}`;
        case 'yyyy/mm/dd':
            return `${ye}/${mo}/${da}`;
        case 'yyyymmdd':
            return `${ye}${mo}${da}`;
        case 'dd-mm-yyyy':
            return `${da}-${mo}-${ye}`;
        case 'dd/mm/yyyy':
            return `${da}/${mo}/${ye}`;
        case 'ddmmyyyy':
            return `${da}${mo}${ye}`;
    }
    return `${ye}${formatDate}${mo}${formatDate}${da}`;
}
function checkType(line, arrayType) {
    for (i = 0; i < arrayType.length; i++) {
        if (line.includes(`${arrayType[i]}`)) {
            return true
        }
    }
    return false
}
function replaceArr(line, arrayType, valRpl) {
    for (i = 0; i < arrayType.length; i++) {
        line = line.replaceAll(`${arrayType[i]}`, valRpl);

    }
    return line;
}