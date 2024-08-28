const validCertificates = [
    'CERT001', 
    'CERT002', 
    'CERT003'
];

document.getElementById('verify-button').onclick = function() {
    const certificateNumber = document.getElementById('certificate-number').value;
    const resultDiv = document.getElementById('result');
    
    // Validity Checker
    if (validCertificates.includes(certificateNumber)) {
        resultDiv.innerHTML = `<p style="color: green;">Certificate Number ${certificateNumber} is valid.</p>`;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Certificate Number ${certificateNumber} is not valid.</p>`;
    }
}
