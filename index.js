var password = "pass1";

function passcheck() {

    if(document.getElementById('pass1').value != password) {
        alert('Wrong ID Key, Try a Valid ID key');

    return false;
    }

    if(document.getElementById('pass1').value == password) {
        alert('Correct ID Key!. Click OK to enter TrapHouse');
    }
}