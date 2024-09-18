// Define the types for the form data
interface PersonalInformation {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    profilePicture: File | null;
}

interface Education {
    schoolName: string;
    degree: string;
    major: string;
    graduationDate: string;
}

interface WorkExperience {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Skills {
    skill: string;
    years: number;
    additionalSkills: string;
}

// Function to handle form submission
const handleFormSubmit = (event: Event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form elements
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const dob = (document.getElementById("dob") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const city = (document.getElementById("city") as HTMLInputElement).value;
    const state = (document.getElementById("state") as HTMLInputElement).value;
    const profilePicture = (document.getElementById("profilePicture") as HTMLInputElement).files?.[0] || null;

    // Get education elements
    const schoolName = (document.getElementById("schoolName") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const major = (document.getElementById("major") as HTMLInputElement).value;
    const graduationDate = (document.getElementById("graduationDate") as HTMLInputElement).value;

    // Get work experience elements
    const companyName = (document.getElementById("companyName") as HTMLInputElement).value;
    const position = (document.getElementById("position") as HTMLInputElement).value;
    const startDate = (document.getElementById("startDate") as HTMLInputElement).value;
    const endDate = (document.getElementById("endDate") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLTextAreaElement).value;

    // Get skills elements
    const skill = (document.getElementById("skill") as HTMLInputElement).value;
    const years = parseInt((document.getElementById("years") as HTMLInputElement).value, 10) || 0;
    const additionalSkills = (document.getElementById("additionalSkills") as HTMLTextAreaElement).value;

    // Construct data objects
    const personalInfo: PersonalInformation = {
        firstName,
        lastName,
        email,
        phone,
        dob,
        address,
        city,
        state,
        profilePicture
    };

    const education: Education = {
        schoolName,
        degree,
        major,
        graduationDate
    };

    const workExperience: WorkExperience = {
        companyName,
        position,
        startDate,
        endDate,
        description
    };

    const skills: Skills = {
        skill,
        years,
        additionalSkills
    };

    // Log data (this is where you could pass the data to a backend or generate a PDF)
    console.log('Personal Information:', personalInfo);
    console.log('Education:', education);
    console.log('Work Experience:', workExperience);
    console.log('Skills:', skills);

    alert("Resume generated! Check the console for details.");
};

// Add event listener to the form submit button
const form = document.getElementById("resumeForm") as HTMLFormElement;
form.addEventListener("submit", handleFormSubmit);
