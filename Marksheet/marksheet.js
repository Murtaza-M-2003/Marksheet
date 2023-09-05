// signup
var name = prompt("Enter Your Name");
var mail = prompt("Enter Your Email");
var pass = prompt("Enter Your Password");
var conpass = prompt("Confirm Your Password");

if (pass == conpass) {

    //login
    var logmail = prompt("Enter Your Email");
    var logpass = prompt("Enter Your Password");

    if ((mail == logmail) && (pass == logpass)) {

        document.write("WELCOME <br>");

        document.write("<br>")
        document.write("<br>")
        //name
        document.write(name)
        document.write("<br>")
        document.write("<br>")

        //subjects
        let eng = parseFloat(prompt("Enter your english marks"));
        let urd = parseFloat(prompt("Enter your urdu marks"));
        let mat = parseFloat(prompt("Enter your maths marks"));
        let pst = parseFloat(prompt("Enter your Pakistan studies marks"));
        let phy = parseFloat(prompt("Enter your physics marks"));
        let chem = parseFloat(prompt("Enter your chemistry marks"));
        let comp = parseFloat(prompt("Enter your computer marks"));
        let isl = parseFloat(prompt("Enter your islamiat marks"));
        //obtained marks
        let obtainedmarks = eng + urd + mat + pst + phy + chem + comp + isl
        //percentage
        let perc = (obtainedmarks / 800) * 100
        // subjects with marks
        document.write("English" + " " + "=" + " " + eng + "<br>");
        document.write("Urdu" + " " + "=" + " " + urd + "<br>");
        document.write("Maths" + " " + "=" + " " + mat + "<br>");
        document.write("Pakistan Studies" + " " + "=" + " " + pst + "<br>");
        document.write("Physics" + " " + "=" + " " + phy + "<br>");
        document.write("Chemistry" + " " + "=" + " " + chem + "<br>");
        document.write("Computer" + " " + "=" + " " + comp + "<br>");
        document.write("Islamiat" + " " + "=" + " " + isl + "<br>");

        document.write("<br>")

        //obtained marks
        document.write("Obtained Marks" + " " + "=" + obtainedmarks + "<br>");

        //percentage
        document.write("Percertage" + " " + "=" + perc.toFixed(2) + "%" + "<br>");

        //Grades
        if (perc <= 100 && perc >= 80) {

            document.write("Grade = <b>A+</b> Grade");

        } else if (perc < 80 && perc >= 70) {

            document.write("Grade = <b>A</b> Grade");

        } else if (perc < 70 && perc >= 60) {

            document.write("Grade = <b>B</b> Grade");

        } else if (perc < 60 && perc >= 50) {

            document.write("Grade = <b>C</b> Grade");

        } else if (perc < 50 && perc >= 40) {

            document.write("Grade = <b>D</b> Grade");

        } else {
            document.write("Grade = <h2><b>F</b></h2> Grade");
        }

        // Pass or Fail
        if (perc >= 40) {

            document.write("<h1>PASS</h1> <br>")

        } else {

            document.write("<h2>FAIL</h2> <br>")

        }

        //error
    } else {
        document.write("Invalid email or password");
    }

    //error
} else {

    document.write("Your Password doesn't match");

}


