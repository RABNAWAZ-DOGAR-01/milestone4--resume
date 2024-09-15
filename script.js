// Function to generate the resume output
function generateResume(resumeData) {
    var resumeOutput = document.getElementById("resumeOutput");
    // Adding the profile picture if it exists
    var profilePictureHTML = resumeData.profilePicture
        ? "<img src=\"".concat(resumeData.profilePicture, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%;\">")
        : '';
    resumeOutput.innerHTML = "\n        ".concat(profilePictureHTML, "\n        <p><strong>Name : </strong>").concat(resumeData.name, "</p>\n        <p><strong>Email : </strong> ").concat(resumeData.email, "</p>\n        <p><strong>Phone : </strong> ").concat(resumeData.phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(resumeData.education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(resumeData.experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(resumeData.skills, "</p>\n    ");
}
// Function to handle form submission
function handleFormSubmit(event) {
    var _a;
    event.preventDefault();
    // Getting data from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Phone").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // Getting the profile picture file
    var profilePictureInput = document.querySelector('input[name="profilepicture"]');
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePictureFile) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var resumeData = {
                name: name,
                email: email,
                phone: phone,
                education: education,
                experience: experience,
                skills: skills,
                profilePicture: reader_1.result // Store the base64 image data
            };
            generateResume(resumeData);
        };
        reader_1.readAsDataURL(profilePictureFile); // Read the file as a data URL (base64)
    }
    else {
        var resumeData = {
            name: name,
            email: email,
            phone: phone,
            education: education,
            experience: experience,
            skills: skills,
            profilePicture: ''
        };
        generateResume(resumeData);
    }
}
// Adding event listener to the form
var form = document.getElementById("resumeform");
form.addEventListener("submit", handleFormSubmit);
