function akanNames(){
    var date=parseFloat(document.getElementById("days").value);
    var month=parseFloat(document.getElementById("months").value);
    var year=parseFloat(document.getElementById("years").value);
    var CC=(year-1)/100+1;
    var day = ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date )%7;
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('output').innerHTML =weekDays[ Math.round(day)];


    var male = ["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    var gender = document.querySelector('input[name="Gender"]:checked').value;
    console.log(gender);
    if (year == "" || gender=="")
        {
        alert("Please fill the form");
        }
    else if (month == "" || day=="")
        {
        alert("Please fill the boxes");
        }
    else if (date<=0 || date>31) {
        alert("enter a valid day");
      }
    else if (month<= 0 || month> 12)  {
        alert("enter a valid month");
      }
    else if (gender === "female") {
        document.getElementById('name').innerHTML = female[Math.round(day)];
      }
    else if (gender === "male"){
        document.getElementById('name').innerHTML = male[Math.round(day)];
        }
    else{
            alert(done);
        }
}
