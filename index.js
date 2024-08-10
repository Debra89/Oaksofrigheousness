function changeContent(page) {
    var contentDiv = document.getElementById('content');

    switch (page) {
        
            case 'donate':
                contentDiv.innerHTML = `
                <h2>
                    Donate
                </h2>
                <p>If you would like to donate to Oaks of Righeousness orphanage use the form below, and thanks in advance</p>
                    <script
src="https://donorbox.
org/widget.js"
paypalExpress="false">
</script><iframe
src="https://donorbox.
org/embed/help-feed-
a-child-2?language=en"
name="donorbox"
allowpaymentrequest="
allowpaymentrequest"
seamless="seamless"
frameborder="0"
scrolling="no"
height="900px"
width="100%"
style="max-width:
500px; min-width:
250px; max-
height:none!important"
allow="payment"></ifra
me>
                `;
                break;
        case 'about':
            contentDiv.innerHTML = `
                <h2>About Us</h2>
               
<h2>Mission and Vision</h2>
               <p><b>Mission: </b>To provide orphaned children with a loving and supportive home environment where
                they can thrive emotionally, socially, and academically.</p>
                <p><b>Vision: </b>To empower orphaned children to become confident, compassionate, and successful
                individuals who positively contribute to society.</p>
                <h2>Programs and Services</h2>
                <ul>
                    <li><b>Residential Care: </b>Providing a safe and loving home environment for orphaned children,
                        with round-the-clock care from trained caregivers.</li>
                        <li><b>Education Support:</b>Ensuring access to quality education through partnerships with
                            local schools, tutoring programs, and educational enrichment activities.</li>
                            <li><b>Healthcare Services:</b>Meeting the medical and healthcare needs of children through
                                partnerships with healthcare providers and regular health check-ups.</li>
                                <li><b>Psychosocial Support:</b>Offering counselling, therapy, and recreational activities to
                                    promote emotional well-being and resilience.</li>
                                    <li><b>Life Skills Development:</b>Equipping children with essential life</li>
                </ul>
        
                
            `;
            break;

        case 'contact':
            contentDiv.innerHTML = 
                `<h2>Contact Us</h2> 
                <p>
                    Feel free to reach out to us!
                </p> 
                <form action="https://formspree.io/f/mwpebqjg"
  method="POST"> 
                <label for="name">Name:</label> 
                <input type="text" id="name" name="name" placeholder="Your Name" required>
                <label for="contact">contact Number:</label> 
                <input type="text" id="contact" name="contact" placeholder="Your contact number">
                <label for="email">Email:</label> 
                <input type="email" id="email" name="email" 
                        placeholder="Your Email" required>
                
                <label>
             Your message:
             <textarea name="message"></textarea>  </label>
                <button type="submit">Send Message</button> 
                </form>`;
            break;

            case 'login':
                contentDiv.innerHTML = 
                    `<h2>Login</h2> 
                    <p>
                        Use the form to login
                    </p> 
                    <form> 
                    <label for="username">Username:</label> 
                    <input type="text" id="username" name="username" 
                            placeholder="Your username" required>
                    <label for="password">Password:</label> 
                    <input type="password" id="password" name="password" 
                            placeholder="Your Password" required>
                    
                    <button type="submit" onclick="alert('Username or Password is incorrect!')">Login</button> 
                    
                    </form>`;
                break;
    

        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

