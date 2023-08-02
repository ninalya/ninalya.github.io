const fs = require('fs');

const cvData = {
  name: 'Dahlia Nuraini',
  title: 'DAncer',
  contact: {
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, City, Country',
  },
  education: {
    university: 'University of XYZ',
    degree: 'Bachelor of Computer Science',
    graduationYear: '2022',
  },
  experience: [
    {
      position: 'Junior Web Developer',
      company: 'ABC Web Solutions',
      duration: '2019 - 2021',
      responsibilities: 'Developed and maintained web applications.',
    },
    {
      position: 'Intern',
      company: 'DEF IT Services',
      duration: 'Summer 2018',
      responsibilities: 'Assisted senior developers in various projects.',
    },
  ],
  skills: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'React', 'MongoDB'],
};

// Function to create the CV content
function generateCV(data) {
  const {
    name,
    title,
    contact,
    education,
    experience,
    skills
  } = data;

  let cvContent = `
    ${name}
    ${title}

    Contact:
    Email: ${contact.email}
    Phone: ${contact.phone}
    Address: ${contact.address}

    Education:
    ${education.degree} - ${education.university} (${education.graduationYear})

    Experience:
  `;

  experience.forEach((exp) => {
    cvContent += `
    - ${exp.position} at ${exp.company} (${exp.duration})
      Responsibilities: ${exp.responsibilities}
    `;
  });

  cvContent += `
    Skills:
    ${skills.join(', ')}
  `;

  return cvContent;
}

// Generate the CV content
const cvContent = generateCV(cvData);

// Write the CV content to a file
fs.writeFile('cv.txt', cvContent, (err) => {
  if (err) {
    console.error('Error writing CV:', err);
  } else {
    console.log('CV has been successfully created!');
  }
});
