// Simulate a database of valid certificates with extra information
const validCertificates = [
    {
        certificateNumber: 'CERT001',
        registererFirstName: 'John',
        registererLastName: 'Doe',
        courseName: 'JavaScript Basics',
        completionDate: '2023-01-15'
    },
    {
        certificateNumber: 'CERT002',
        registererFirstName: 'Jane',
        registererLastName: 'Smith',
        courseName: 'Python for Beginners',
        completionDate: '2023-02-10'
    },
    {
        certificateNumber: 'CERT003',
        registererFirstName: 'Alice',
        registererLastName: 'Johnson',
        courseName: 'Web Development',
        completionDate: '2023-03-05'
    }
];

document.getElementById('verify-button').onclick = function() {
    const certificateNumber = document.getElementById('certificate-number').value;
    const resultDiv = document.getElementById('result');

    // Find the certificate object based on the entered certificate number
    const certificate = validCertificates.find(cert => cert.certificateNumber === certificateNumber);
    
    // Check if the certificate number is valid
    if (certificate) {
        resultDiv.innerHTML = `
            <p style="color: green;">Certificate Number ${certificate.certificateNumber} is valid.</p>
            <p>Registered to: ${certificate.registererFirstName} ${certificate.registererLastName}</p>
            <p>Course Name: ${certificate.courseName}</p>
            <p>Completion Date: ${certificate.completionDate}</p>
        `;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Certificate Number ${certificateNumber} is not valid.</p>`;
    }
}
