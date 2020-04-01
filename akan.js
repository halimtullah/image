function readData() {
    var dd = document.getElementById("dd").value; //get value date input
    var dd = document.getElementById("mm").value; //get value month input
    var dd = document.getElementById("yy").value; //get value year input
    var male = document.getElementById("male").checked; //return true if male button selected and false if unselected
    var female = document.getElementById("female").checked; //return true if female button selected and false if unselected
    var days = document.getElementById["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] //array for days
    var maleNames = document.getElementById["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yao", "Kofi", "Kwame"] //array for maleNames
    var femaleNames = document.getElementById["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] //array for femaleNames
    var birthDate = new Date(mm + '/' + dd + '/' + yy);

    var daysOfTheWeek = birthDate.getDate(); //calculation of days of the week. 



}
