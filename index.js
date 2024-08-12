/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
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
                <div class="container">
        <h1>About Oaks of Righteousness Orphanage</h1>

        <p>Welcome to Oaks of Righteousness Orphanage, where our journey began with a profound commitment to transforming the lives of vulnerable girls. Established with a heartfelt vision, our orphanage is deeply rooted in the inspiring promise of <strong>Isaiah 61:3</strong>: “They will be called oaks of righteousness, a planting of the Lord for the display of His splendor.” This guiding principle shapes our mission and fuels our dedication to nurturing each girl in our care.</p>

        <h2>Our Mission</h2>
        <p>At Oaks of Righteousness, our mission is to offer a nurturing, faith-based home for girls from the age of 2 through their transition to university and beyond. We are devoted to providing a comprehensive environment that supports not only academic excellence but also spiritual growth and personal development.</p>

        <div class="highlight">
            <h2>What Sets Us Apart</h2>
            <ul>
                <li><strong>Faith-Centered Approach:</strong> We weave biblical teachings into the fabric of daily life, ensuring that our girls grow up with a strong foundation in Christian values.</li>
                <li><strong>Comprehensive Support:</strong> From early childhood education to career readiness, our extensive care programs address every aspect of development.</li>
                <li><strong>Community Impact:</strong> By collaborating with local organizations and community supporters, we enhance our impact and extend our reach.</li>
            </ul>
        </div>

        <p>Located in the heart of Savannah City, just south of Johannesburg, Oaks of Righteousness stands as a beacon of hope and righteousness. Our commitment to creating a lasting legacy for our children shines through every facet of our work, glorifying the Lord in all that we do.</p>

        <div class="cta-buttons">
            <a href="#">Learn More</a>
            <a href="#">Get Involved</a>
        </div>
    </div>   
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


case 'volunteer':
                contentDiv.innerHTML = 
                    `<p>Please fill this form if you would like to be involved in the orphanage</p>
                <form
                action="https://formspree.io/f/mblryknj"
                method="POST">
              <label>
                Your name:
                <input type="text" name="name" required placeholder="Your name">
              </label>
                <label>
                  Your email:
                  <input type="email" name="email" required placeholder="Your email">
                </label>
                <label>
                    Your contact number:
                    <input type="text" name="contact" placeholder="Your contact number">
                  </label>
                <label>
                 Select area of interest:        
    </label>
    <div class="checkbox-group">
        <label for="mentoring">
          <input type="checkbox" id="mentoring" name="mentoring">
         Mentoring
        </label>
        <label for="volunteering">
          <input type="checkbox" id="volunteering" name="volunteering">
          Volunteering 
        </label>
        <label for="fundraising">
          <input type="checkbox" id="fundraising" name="fundraising">
          Fundraising
        </label>
      </div>
    <br>
                <!-- your other form fields go here -->
                <button type="submit">Send</button>
              </form>`;
                break;    
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
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
