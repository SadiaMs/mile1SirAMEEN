// Function to handle form submission
var handleFormSubmit = function (event) {
    var _a;
    event.preventDefault(); // Prevent form from submitting the traditional way
    // Get form elements
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var profilePicture = ((_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    // Get education elements
    var schoolName = document.getElementById("schoolName").value;
    var degree = document.getElementById("degree").value;
    var major = document.getElementById("major").value;
    var graduationDate = document.getElementById("graduationDate").value;
    // Get work experience elements
    var companyName = document.getElementById("companyName").value;
    var position = document.getElementById("position").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var description = document.getElementById("description").value;
    // Get skills elements
    var skill = document.getElementById("skill").value;
    var years = parseInt(document.getElementById("years").value, 10) || 0;
    var additionalSkills = document.getElementById("additionalSkills").value;
    // Construct data objects
    var personalInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        dob: dob,
        address: address,
        city: city,
        state: state,
        profilePicture: profilePicture
    };
    var education = {
        schoolName: schoolName,
        degree: degree,
        major: major,
        graduationDate: graduationDate
    };
    var workExperience = {
        companyName: companyName,
        position: position,
        startDate: startDate,
        endDate: endDate,
        description: description
    };
    var skills = {
        skill: skill,
        years: years,
        additionalSkills: additionalSkills
    };
    // Log data (this is where you could pass the data to a backend or generate a PDF)
    console.log('Personal Information:', personalInfo);
    console.log('Education:', education);
    console.log('Work Experience:', workExperience);
    console.log('Skills:', skills);
    alert("Resume generated! Check the console for details.");
};
// Add event listener to the form submit button
var form = document.getElementById("resumeForm");
form.addEventListener("submit", handleFormSubmit);
