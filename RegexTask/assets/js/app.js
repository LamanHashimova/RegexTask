let submit = document.querySelector('.submit');
submit.onclick = function () {
    let usrnm = document.querySelector('.username').value;
    let pssword = document.querySelector('.password').value;
    let email = document.querySelector('.email').value;
    if (usrnm === "" || pssword === "" || email === "") {
        alert('butun xanalari doldur')
    } else {
        if (usrnm[0].toUpperCase() !== usrnm[0]) {
            alert('birinci herf boyukle yazilmalidir')
        } else {
            if (usrnm.length < 6) {
                alert("usrna    me minimum 6 simvol olmalidir")
            }
            else {
                if (!pssword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{6,10}$/)) {
                    alert('pasword min 6 ve mx 10 olmalidir ve icinde bir simvol olmalidir')
                }
                else {
                    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                        alert('email sehvdir')
                    }


                }
            }
        }

    }
}
