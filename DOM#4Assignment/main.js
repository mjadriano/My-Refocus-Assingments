const form = document.forms.signup;
const fname = form.Fname;
const mname = form.Mname;
const lname = form.Lname;
const bday = form.bday;
const email = form.email;
const region = form.selectRegion;
const province = form.province;
const street = form.street;
const gender = form.gender;
const selectDose1 = form.selectDose1;
const dateDose1 = form.dateDose1;
const siteDose1 = form.siteDose1;
const secondVac = form.secondVac;
const selectDose2 = form.selectDose2;
const dateDose2 = form.dateDose2;
const siteDose2 = form.siteDose2;

document.getElementById('selectDose2').setAttribute('hidden', 'hidden');
document.getElementById('siteDose2').setAttribute('hidden', 'hidden');
document.getElementById('dateDose2').setAttribute('hidden', 'hidden');

secondVac[0].addEventListener('change', function(){
    document.getElementById('selectDose2').removeAttribute('hidden');
    document.getElementById('siteDose2').removeAttribute('hidden');
    document.getElementById('dateDose2').removeAttribute('hidden');
    form.addEventListener('submit', function(){
        if(!selectDose2.value){
            setError(selectDose2, 'Select Vaccination Brand Dose 2!');
        }

        if(!dateDose2.value){
            setError(dateDose2, 'Date for Dose 2 is required!');
        }

        if(!siteDose2.value){
            setError(siteDose2, 'Select Vaccination Brand Dose 2!');
        }
        
        document.getElementById('infoDose2').innerHTML = `Vaccination Brand Dose 2: ${selectDose2.value}`;
        document.getElementById('infoDateDose2').innerHTML = `Vaccination Date Dose 2: ${dateDose2.value}`;
        document.getElementById('infoSite2').innerHTML = `Vaccination Site Dose 2: ${siteDose2.value}`;

    })
})

secondVac[1].addEventListener('change', function(){
    document.getElementById('selectDose2').setAttribute('hidden', 'hidden');
    document.getElementById('siteDose2').setAttribute('hidden', 'hidden');
    document.getElementById('dateDose2').setAttribute('hidden', 'hidden');
})

form.addEventListener('submit', function(event){
    event.preventDefault();

    if(!fname.value){
            setError(fname, 'First Name is required!');
    }

    if(!mname.value){
        setError(mname, 'Middle Name is required!');
    }

    if(!lname.value){
        setError(lname, 'Last Name is required!');
    }

    if(!bday.value){
        setError(bday, 'Please Enter your Birthday!');
    }

    if(!email.value){
        setError(email, 'Please Enter your Email!');
    }

    if(!province.value){
        setError(province, 'Please Enter your Province!');
    }

    if(!street.value){
        setError(street, 'Please Enter your Street!');
    }

    if(!gender.value){
        setError2('gender', 'Please Enter your Gender!');
    }

    if(!dateDose1.value){
        setError(dateDose1, 'Please Enter the date of the dose 1!'); 
    }


    if(!siteDose1.value){
        setError(siteDose1, 'Please Enter your Vaccination dose 1 site!');
    }

    
    document.getElementById('name').innerHTML = `Name: ${fname.value} ${mname.value} ${lname.value}`;
    document.getElementById('infoBday').innerHTML = `Birthday: ${bday.value}`;
    document.getElementById('infoEmail').innerHTML = `Email: ${email.value}`;
    document.getElementById('infoAdd').innerHTML = `Address: ${street.value} ${province.value} ${region.value}`;
    document.getElementById('infoGender').innerHTML = `Gender: ${gender.value}`;
    document.getElementById('infoBrand').innerHTML = `Vaccination Brand Dose 1: ${selectDose1.value}`;
    document.getElementById('infoDateDose1').innerHTML = `Date of Vaccination for Dose 1: ${dateDose1.value}`;
    document.getElementById('infoSite1').innerHTML = `Vaccination Site Dose 1: ${siteDose1.value}`
})

function setError(field, errorMsg){
    field.style.borderColor = 'red'
    document.getElementById('error-' + field.name).innerText = errorMsg;
}

function setError2(field, errorMsg){
    document.getElementById('error-' + field).innerText = errorMsg;
}




// For quiz

const quiz = document.forms.quiz;
const question1 = quiz.question1;
const question2 = quiz.question2;
const question3 = quiz.question3;

quiz.addEventListener('submit', function(event){
    event.preventDefault();

    // Question 1
    if(!question1.value){
        setError(question1, 'Please answer the first question!');
    } else if(question1.value.toLowerCase() == 'manila'){
        console.log('true');
        correct(question1, 'Correct!')
    } else {
        setError(question1, 'Incorrect!');
        correct(question1, 'The correct answer is Manila!')

    }

    // Question 2
    if(!question2.value){
        setError2('question2', 'Please answer the second question!');
    } else if(question2.value == 'x13'){
        correct2('question2', 'Correct!');
    } else {
        setError2('question2', 'Incorrect!');
        correct2('question2', 'The correct answer is x = 13!')
    }

    // Question 3
    var answer3 = []
    for(let i = 0; i < question3.length; i++)
    {
        if(question3[i].checked){
            answer3.push(question3[i].value);
        }

    }
    
    if(answer3.length == 0 || answer3.length == 1 || answer3.length == 2){
        setError2('question3', 'Please select 3 answers!');
    } else {
        if(answer3.some(wrongAnswer)){
            setError2('question3', 'Incorrect!');
            correct2('question3', 'The correct answer is Parrot, Eagle and Crow');
        } else {
            correct2('question3', 'Correct!');
        }
    }

    function wrongAnswer(ans){
        return (ans == 'penguin');
    }


    

    
})


function correct(field, msg){
    document.getElementById('answer-' + field.name).innerHTML = msg;
    document.getElementById('answer-' + field.name).style.color = 'green';
}

function correct2(field, msg){
    document.getElementById('answer-' + field).innerHTML = msg;
    document.getElementById('answer-' + field).style.color = 'green';
}
