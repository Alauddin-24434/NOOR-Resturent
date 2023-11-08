
import './ContactUs.css'; // Import the CSS file
const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server).
    };

    return (
        <div className="contact-us-container">
          

           <div className='flex flex-col md:flex-row items-center justify-center'>
           <div className="contact-image w-1/2">
                <img src="image/contact.jpg" alt="Contact" />
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required />
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
           </div>
        </div>
    );
};

export default ContactUs;
