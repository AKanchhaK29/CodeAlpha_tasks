const enterdob = document.querySelector('.dob');
const calculatebtn = document.querySelector('.calculate_button');
const clearbtn = document.querySelector('.clear_button');
const age = document.querySelector('.age_output');

calculatebtn.addEventListener("click", (e) =>{
    if(enterdob.value=== ""){
        alert('Enter your date of birth!');
    }
    else{
        console.log('Enter DOB', enterdob.value);

        const dob = new Date(enterdob.value);
        console.log('dob',dob);

        const dob_year = dob.getFullYear();
        console.log(dob_year);

        const dob_month = dob.getMonth() + 1;
        console.log(dob_month);

        const dob_day = dob.getDate();
        console.log(dob_day);


        const today = new Date();  //Javascript method that collect time from device
        console.log('today date', today);

        if(dob>today){
            alert("Date of birth cannot be in future");
            return;
        }

        let year = today.getFullYear() - dob_year;
        let month = today.getMonth() + 1 - dob_month;
        let day = today.getDate() - dob_day;

        if(day<0){
            month--;

            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            day += prevMonth.getDate();
        }

        if(month<0){
            year--;
            month +=12;
        }

        console.log('year',year);
        console.log('month', month);
        console.log('day',day);


        age.innerHTML = `You are ${year} years, ${month} months, ${day} days old!`;
    }
});

clearbtn.addEventListener("click", (e) => {
    enterdob.value = '';
    age.innerHTML = '';
});