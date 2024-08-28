// Sample data representing the certificates
const certificates = [
    {
        code: "CERT123",
        name: "John Doe",
        course: "Web Development",
        completionDate: "2023-10-01"
    },
    {
        code: "CERT456",
        name: "Jane Smith",
        course: "Data Science",
        completionDate: "2023-10-15"
    }
];

function verifyCertificate() {
    const code = document.getElementById("certificateCode").value;
    const resultDiv = document.getElementById("result");
    
    // Search for the certificate in the sample data
    const certificate = certificates.find(cert => cert.code === code);
    
    if (certificate) {
        resultDiv.innerHTML = `Certificate Code: ${certificate.code} <br>
                               Name: ${certificate.name} <br>
                               Course: ${certificate.course} <br>
                               Completion Date: ${certificate.completionDate}`;
    } else {
        resultDiv.innerHTML = "Certificate not found.";
    }
}
