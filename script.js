<script>
        // Scroll to top button
        document.getElementById("scrollTop").addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" })
        });

        // Form validation
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent page reload

            const email = document.getElementById("email").value;
            const bio = document.getElementById("bio").value;

            if (!email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            if (bio.length < 20%) {
                alert("Bio must be at least 20 characters long.");
                return;
            }

            alert("Form submitted successfully!");
        });
    </script>