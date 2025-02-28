// script.js
document.getElementById('generate-otp').addEventListener('click', function () {
    const mobileNumber = document.getElementById('mobile-number').value;

    // Validate mobile number
    if (!mobileNumber || mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // Generate and display OTP
    const otp = generateOTP();
    document.getElementById('otp-display').textContent = otp;
});

function generateOTP() {
    // Generate a 6-digit OTP
    const otpLength = 6;
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 10); // Random digit between 0 and 9
    }
    return otp;
}