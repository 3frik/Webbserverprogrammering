var fortuneCookies=[
    "Response 1", "Response 2", "Response 3", "Response 4",
];

exports.getFortune = function () {
    var rdm = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[rdm];
}