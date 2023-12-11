//Initialisg DOM elements
let step = document.getElementsByClassName('step');
let btn = document.getElementsByClassName("btn");
let bar = document.getElementsByClassName("bar");
let valid = true;
let u_name = document.getElementById("name");
let dob = document.getElementById("dob");
let number = document.getElementById("number");
let email = document.getElementById("email");
let city = document.getElementById("city");
let street = document.getElementById("street");
let occupation = document.getElementById("occupation");
let type = document.getElementById("type");
let duration = document.getElementById("duration");
let checkboxes = document.querySelectorAll('input[name="genre"]');
let format = document.querySelectorAll('input[name="format"]');
let e_name = document.getElementById("e-name");
let e_num = document.getElementById('e-num');
let request = document.getElementsByTagName('textarea').value;
let genre = [];
let materail_selected = [];
let selected_notification = "";
let not = document.querySelectorAll('input[name="notif"]')
let currentTab = 0;
step[0].classList.add('active')
bar[0].classList.add('bar_active')

//this function implements the navigation between multiple step of the form
function next(a) {
    currentstep = a;
    if (currentstep == 0) {

        if (validate_step1()) {
            step[a].classList.remove('active');
            step[a + 1].classList.add('active');
            bar[a].classList.remove('bar_active');
            bar[a + 1].classList.add('bar_active');
        }

    }
    if (currentstep == 1) {
        if (validate_step2()) {
            step[a].classList.remove('active');
            step[a + 1].classList.add('active');
            bar[a].classList.remove('bar_active');
            bar[a + 1].classList.add('bar_active');
        }
    }
    if (currentstep == 2) {
        if (validate_step3()) {
            console.log("hello")
            details();
            step[a].classList.remove('active');
            step[a + 1].classList.add('active');
            bar[a].classList.remove('bar_active');
            bar[a + 1].classList.add('bar_active');
        }
    }

}


function previous(b) {
    step[b].classList.remove('active');
    step[b - 1].classList.add('active');
    bar[b].classList.remove('bar_active');
    bar[b - 1].classList.add('bar_active');
}

//This function validates the step 1 of the form
function validate_step1() {

    var name_error = document.getElementById("error1");
    let date_error = document.getElementById("error2");
    let gender_error = document.getElementById("error3");
    let contact_error = document.getElementById("error4_1");
    let email_error = document.getElementById("error4_2");
    let address_city_error = document.getElementById("error5_1");
    let address_street_error = document.getElementById("error5_2");
    let occupation_error = document.getElementById("error6");
    let gender = document.querySelectorAll('input[name="gender"]')

    if (u_name.value == "") {
        name_error.innerText = "User name can't be empty."
        valid = false;
    } else {
        if (u_name.value.length < 3 || u_name.value.length > 35) {
            name_error.innerText = "Username should be of length more than 3 and less than 20";
            valid = false;
        }
    }

    if (dob.value == "") {
        date_error.innerText = "Date of birth can't be empty."
        valid = false;
    }
    let check = false;
    for (let i = 0; i < gender.length; i++) {

        if (gender[i].checked) {
            check = true;
            break;
        }
    }
    if (check == false) {
        gender_error.innerText = "Please select your gender."
        valid = false;
    }

    if (number.value == "") {
        contact_error.innerText = "Please fill your contact info."
        valid = false;
    }
    if (email.value == "") {
        email_error.innerText = "Please fill your contact info."
        valid = false;
    }
    else {
        let at = email.value.indexOf("@");
        let dot = email.value.indexOf(".");
        if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
            email_error.innerText = "invalid email format";
            valid = false;
        } if (email.value.includes('..')) {
            email_error.innerText = "No consecutive dots allowed."
        } if (email.value.includes(" ")) {
            email_error.innerText = "No space allowed."
        }
    }

    if (city.value == "") {
        address_city_error.innerText = "Please fill your address.";
        valid = false;
    }
    if (street.value == "") {
        address_street_error.innerText = "Please fill your address.";
        valid = false;
    }
    if (occupation.value == "") {
        occupation_error.innerText = "Please fill your occupation.";
        valid = false;
    }


    u_name.addEventListener('input', function () {
        name_error.innerText = " ";
        var name_text = u_name.value;
    })

    dob.addEventListener('input', function () {
        date_error.innerText = " ";
    })

    for (let i = 0; i < gender.length; i++) {
        gender[i].addEventListener('input', function () {
            gender_error.innerText = "";
        })
    }

    number.addEventListener('input', function () {
        contact_error.innerText = ""
    })

    email.addEventListener('input', function () {
        email_error.innerText = ""
    })

    city.addEventListener('input', function () {
        address_city_error.innerText = "";
    })

    street.addEventListener('input', function () {
        address_street_error.innerText = "";
    })

    occupation.addEventListener('input', function () {
        occupation_error.innerText = " ";
    })


    return valid;
}

function validate_step2() {
    valid = true;

    let type_error = document.getElementById('error7');
    let duration_error = document.getElementById('error8');
    let resident_error = document.getElementById('error9');
    let e_contact_error = document.getElementById('error10.1');
    let e_mail_error = document.getElementById('error10.2');
    let resident = document.querySelectorAll('input[name="resident"]')

    if (type.value == "") {
        type_error.innerText = "Please select one."
        valid = false;
    } if (duration.value == "") {
        duration_error.innerText = "Please select one."
        valid = false;
    }
    let check = false;
    for (let i = 0; i < resident.length; i++) {
        if (resident[i].checked) {
            check = true;
            break;
        }
    }
    if (check == false) {
        resident_error.innerText = "Please choose one."
        valid = false;
    }
    if (e_name.value == "") {
        e_contact_error.innerText = "Please enter your emergency contact details."
        valid = false;
    }
    if (e_num.value == "") {
        e_mail_error.innerText = "Please enter your emergency contact details."
        valid = false;
    }

    type.addEventListener('change', function () {
        type_error.innerText = " ";
    })

    duration.addEventListener('input', function () {
        duration_error.innerText = "";
    })

    for (let i = 0; i < resident.length; i++) {
        resident[i].addEventListener('input', function () {
            resident_error.innerText = "";
        })
    }

    e_name.addEventListener('input', function () {
        e_contact_error.innerText = "";
    })

    e_num.addEventListener('input', function () {
        e_mail_error.innerText = "";
    })
    return valid;

}

function validate_step3() {
    valid = true;
    var checked = 0;

    let format_error = document.getElementById('error12');
    let genre_error = document.getElementById('error11');
    let notification_error = document.getElementById('error13');

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {

            checked = 1;
            genre.push(checkboxes[i].value);
        }
        if (checked == 1) {
            checkboxes[i].addEventListener('input', function () {
                genre_error.innerText = " "
            })
        }
    }
    if (checked == 0) {
        genre_error.innerText = "select atleast choose one genre.";
        valid = false;
    }

    for (i = 0; i < format.length; i++) {
        if (format[i].checked) {

            checked = 1;
            materail_selected.push(format[i].value);
        }
        if (checked == 1) {
            format[i].addEventListener('input', function () {
                format_error.innerText = "";
            })
        }

    }
    if (checked == 0) {
        format_error.innerText = "Select atleast one format type."
        valid = false;
    }

    for (i = 0; i < not.length; i++) {
        if (not[i].checked) {
            checked = 1;
            selected_notification = not[i].value;
        }
        if (checked == 1) {
            not[i].addEventListener('input', function () {
                notification_error.innerText = "";
            })

        }
    }
    if (checked == 0) {
        notification_error.innerText = "Select atleast one notification format type."
        valid = false;
    }
    return valid;

}

function submit() {
    document.getElementById('submitted').innerText = "Your request has been submitted!";
}

//This function display the summary of ser input in the confirmation page.
function details() {
    console.log("i m working.")
    let name = document.getElementById('summary_name');
    let num = document.getElementById('summary_number');
    let emailid = document.getElementById('summary_email');
    let address = document.getElementById('summary_address');
    let job = document.getElementById('summary_occupation')
    let membership = document.getElementById('summary_membership');
    let emergency = document.getElementById('summary_emergency');
    let genres = document.getElementById('summary_genres');
    let material = document.getElementById('summary_material');
    let notification = document.getElementById('summary_notification');
    let accomodation = document.getElementsByTagName('summary_textarea');


    name.innerText += u_name.value;
    num.innerText += number.value;
    emailid.innerText += email.value;
    address.innerText += city.value + ", " + street.value;
    job.innerText += occupation.value;

    membership.innerText += type.value + "-" + duration.value;
    emergency.innerText += e_name.value + "," + e_num.value;

    genres.innerText += genre;
    material.innerText += materail_selected;

    notification.innerText += selected_notification;

    accomodation.innerText += request;



}




