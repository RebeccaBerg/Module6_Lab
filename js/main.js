
/**
 * This function opens an alert box with
 * the value of whatever radio button
 * is selected as the message.
 */
function submitClicked() {
    alert(document.querySelector('input[name="type"]:checked').value);
}
