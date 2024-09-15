// Interface defining the structure of resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
    profilePicture: string; // Store the base64 image data
}

// Function to generate the resume output
function generateResume(resumeData: ResumeData) {
    const resumeOutput = document.getElementById("resumeOutput")!;

    // Adding the profile picture if it exists
    const profilePictureHTML = resumeData.profilePicture
        ? `<img src="${resumeData.profilePicture}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%;">`
        : '';

    resumeOutput.innerHTML = `
        ${profilePictureHTML}
        <p><strong>Name : </strong>${resumeData.name}</p>
        <p><strong>Email : </strong> ${resumeData.email}</p>
        <p><strong>Phone : </strong> ${resumeData.phone}</p>
        <h3>Education</h3>
        <p>${resumeData.education}</p>
        <h3>Experience</h3>
        <p>${resumeData.experience}</p>
        <h3>Skills</h3>
        <p>${resumeData.skills}</p>
    `;
}

// Function to handle form submission
function handleFormSubmit(event: Event) {
    event.preventDefault();

    // Getting data from the form
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("Phone") as HTMLInputElement).value;
    const education = (document.getElementById("Education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("Experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("Skills") as HTMLTextAreaElement).value;

    // Getting the profile picture file
    const profilePictureInput = document.querySelector('input[name="profilepicture"]') as HTMLInputElement;
    const profilePictureFile = profilePictureInput.files?.[0];

    if (profilePictureFile) {
        const reader = new FileReader();
        reader.onload = function () {
            const resumeData: ResumeData = {
                name,
                email,
                phone,
                education,
                experience,
                skills,
                profilePicture: reader.result as string // Store the base64 image data
            };
            generateResume(resumeData);
        };
        reader.readAsDataURL(profilePictureFile); // Read the file as a data URL (base64)
    } else {
        const resumeData: ResumeData = {
            name,
            email,
            phone,
            education,
            experience,
            skills,
            profilePicture: ''
        };
        generateResume(resumeData);
    }
}

// Adding event listener to the form
const form = document.getElementById("resumeform") as HTMLFormElement;
form.addEventListener("submit", handleFormSubmit);










 