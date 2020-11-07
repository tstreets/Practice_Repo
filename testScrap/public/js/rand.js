/**
 * @namespace rand
 */


/**
 * @member {String} rand.grass Grass is green.
 */
const grass = "green";

/**
 * @member {Object} rand.myObj
 */
const myObj = {
    name: "Ty"
}

document.body.onload = function() {
    const form = document.querySelector('form');
    form.onsubmit = submitForm;
}

/**
 * @function rand.submitForm
 * @param {Event} e 
 */
function submitForm(e) {
    e.preventDefault();
    validateFormData({name: 'Hello', age: 44})
}


/**
 * @method rand.validateFormData 
 * @description Validates the data from the new person form.
 * @param {Object} formData Data from add person form.
 * @param {String} formData.name Person's name.
 * @param {Number} formData.age Person's current age.
 */
function validateFormData(formData) {
    formData.name.length;
    formData.age.toString();
}