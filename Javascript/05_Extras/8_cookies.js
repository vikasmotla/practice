// saved in name=value pairs.

console.log(document.cookie);

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires="+date.toUTCString();
    console.log(expires);
    console.log(date);
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
    setCookie(name, null, null)
}

setCookie("email", "vikas.motla@gmail.com", 365);


console.log(document.cookie);
// deleteCookie("email", null, null);

