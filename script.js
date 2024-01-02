function Date_of_Birth() {
    document.getElementById("calculateage").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let month = document.getElementById("month").value;
        let days = document.getElementById("days").value;

        if (days === '') {
            alert("Enter a date");
        } else if (month === '') {
            alert("Enter Month");
        } else if (year >= 2024 || year === '') {
            alert("Please enter a recent date");
        } else {
            let birthdate = new Date(year, month - 1, days);
            console.log(birthdate);
            let currentDate = new Date();
            let ageInMilliseconds = currentDate - birthdate;
            let c_years = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
            let years = Math.floor(c_years);
            let c_month = (c_years - years) * 12;
            let months = Math.floor(c_month);
            let c_days = Math.floor((c_years * 365.25 - years * 365.25 - months * (365.25 / 12)));
            document.getElementById("set_years").innerHTML = years;
            document.getElementById("set_months").innerHTML = months;
            document.getElementById("set_days").innerHTML = c_days;
        }
    });
}

Date_of_Birth();
