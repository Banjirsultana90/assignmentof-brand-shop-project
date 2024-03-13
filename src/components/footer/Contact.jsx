import emailjs from 'emailjs-com';

import { MdOutlineEmail, } from "react-icons/md";
import { FaFacebookMessenger, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Swal from 'sweetalert2';


const Contact = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_83vilft', 'template_4w9y1xm', e.target, 'ccAMYwfUx8tHV4TBU')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message has been sent!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error.text);
            });
        
        e.target.reset();
    };
    
    


    return (

        <div className="bg-blue-950 min-h-screen">
            <h2 className='text-3xl font-bold py-14 text-center  text-sky-500'>CONTACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-10">
                <div className="text-white rounded-lg border-2 border-white px-5">
                    <h2 className="text-xl font-bold mt-4 mb-2">Connect with me</h2>
                    <div className="flex flex-col gap-4">
                        <a href='mailto:banjirsultana15@gmail.com' className="flex items-center gap-2 bg-slate-100 rounded-lg text-black px-4 py-2">
                            <MdOutlineEmail className="text-xl" />
                            <span>Email</span>
                        </a>
                        <a href='#' className="flex items-center gap-2 bg-slate-100 rounded-lg text-black px-4 py-2">
                            <FaFacebookMessenger className="text-xl" />
                            <span>Messenger</span>
                        </a>
                        <a href='https://www.linkedin.com/feed/' className="flex items-center gap-2 bg-slate-100 rounded-lg text-black px-4 py-2">
                            <FaLinkedinIn className="text-xl" />
                            <span>Linkedin</span>
                        </a>
                        <a href='https://github.com/Banjirsultana90' className="flex items-center gap-2 bg-slate-100 rounded-lg text-black px-4 py-2">
                            <FaGithub className="text-xl" />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="md:col-span-2">
                        <div className="md:col-span-2 ">
                            <div className="grid grid-cols-1 gap-2">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Your Phone number"
                                    className="input input-bordered w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 py-2">
                            <textarea
                                placeholder="Your Message"
                                className="textarea textarea-bordered textarea-lg w-full"
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-cyan-600">Send Message</button>
                    </div>
                </form>
            </div>
        </div>




    );
};


export default Contact;