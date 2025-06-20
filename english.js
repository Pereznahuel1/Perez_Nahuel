// Professional IT profile object
let devProfile = {
    fullName: "Nahuel Perez",
    age: 28,
    profession: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    isEmployed: true,
    contact: {
    email: "nahuel@gmail.com",
    location: "Posadas"
    }
};

function introduceProfile(profile) {
    let employmentStatus = profile.isEmployed ? "I am currently employed." : "I am currently looking for new opportunities.";
    let skillsList = profile.skills.join(", ");

    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}. I work with ${skillsList}. I live in ${profile.contact.location}. I am ${profile.age} years old. ${employmentStatus}`;
}


console.log(introduceProfile(devProfile));