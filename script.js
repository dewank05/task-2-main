function validateForm() {
            
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }

            // If validation passes, show confirmation message
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('confirmation').style.display = 'block';
        }

        function isValidEmail(email) {
            // Simple email validation regex
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }