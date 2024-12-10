import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send the data to an API
        const formData = { name, email, message };
        console.log('Form Data:', formData);

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-r from-indigo-900 via-purple-900 to-black">
            <h2 className="mb-8 text-4xl font-bold">Contact Me</h2>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5" />
                        <span>manohar162004@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5" />
                        <span>+919963103907</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5" />
                        <span>Vijaya Appartments, 3rd floor, venkataratnapuram road, Kakinada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Github className="h-5 w-5" />
                        <a href="https://github.com/manohar-pothumahanthi" target="_blank" rel="noopener noreferrer">manohar-pothumahanthi</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Linkedin className="h-5 w-5" />
                        <a href="https://www.linkedin.com/in/manohar162004" target="_blank" rel="noopener noreferrer">manohar162004</a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <a href="https://manohar162004.tech" target="_blank" rel="noopener noreferrer">manohar162004.tech</a>
                    </div>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Your Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <Input 
                        type="email" 
                        placeholder="Your Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <Textarea 
                        placeholder="Your Message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    />
                    <Button type="submit">Send Message</Button>
                </form>
            </div>
        </section>
    );
}
