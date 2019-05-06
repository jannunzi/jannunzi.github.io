queryParams = () => {
    const search = window.location.search.replace('?', '').split('&')
    let parameters = {};
    search.forEach(s => {
        s = s.split('=')
        parameters[s[0]] = s[1]
    })
    return parameters
}