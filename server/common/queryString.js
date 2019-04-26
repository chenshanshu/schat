module.exports = function (str) {
    let params = str.split("&"), paramsObj = {};
    params.forEach(item => {
        let i = item.split("=")
        paramsObj[i[0]] = i[1];
    })
    return paramsObj;
}