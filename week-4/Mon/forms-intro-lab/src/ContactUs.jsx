import {useState} from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [comments, setComments] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        
        const contactUsInformation = {
            name,
            email,
            phone,
            phoneType,
            comments,
            submittedOn: new Date(),
        };
    
        console.log(contactUsInformation);

        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setComments('');    

    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <select
                        name="phoneType"
                        value={phoneType}
                        onChange={(e) => setPhoneType(e.target.value)}
                    >
                        <option value="" disabled>Select a phone type......</option>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comments">Comments:</label>
                    <textarea 
                        id="comments" 
                        name="comments"
                        onChange={(e) => setComments(e.target.value)}
                        value={comments}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;