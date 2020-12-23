/**
 * @description Generate a random password
 * @returns {string} Password generated
 */
exports.generatePassword = function() {
    let password = ``;
    for(let i = 0; i < 10; ++i) {
        const rndCode = Math.floor(Math.random() * 62);
        const rndChar = (rndCode < 26) ? String.fromCharCode(rndCode + 65)
        : (rndCode < 52) ? String.fromCharCode(rndCode + 97 - 26)
        : String.fromCharCode(rndCode + 48 - 52);

        password += `${rndChar}`;
    }
    return password;
}