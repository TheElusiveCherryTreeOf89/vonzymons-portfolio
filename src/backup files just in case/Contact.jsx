import { useState } from "react";
import { toggleVhs } from "../lib/theme";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-black">
      <div className="w-[750px] mx-auto py-4">
        <h2
          className="font-justice text-2xl hotline-gradient-text color-glitch old-tv heading-toggle text-center mb-1"
          onClick={() => toggleVhs()}
          data-text="CONTACT"
        >
          CONTACT
        </h2>
        <p className="text-xs text-neon-cyan font-vt323 text-center mb-3">[ DIRECT LINE TO VONZYMONS ]</p>
        
        <form onSubmit={handleSubmit} className="w-full mx-auto">
          <div>
            <div className="bg-black border-t border-neon-pink">
              <label className="block text-neon-pink font-pixel text-xs py-0 px-0">NAME</label>
            </div>
            <input 
              name="name" 
              placeholder="Your name" 
              value={form.name} 
              onChange={handle} 
              className="w-full py-0 px-0 bg-black border-b border-white text-white font-vt323 text-sm focus:outline-none" 
            />
          </div>
          
          <div>
            <div className="bg-black border-t border-neon-pink mt-1">
              <label className="block text-neon-pink font-pixel text-xs py-0 px-0">EMAIL</label>
            </div>
            <input 
              name="email" 
              type="email"
              placeholder="Your email" 
              value={form.email} 
              onChange={handle} 
              className="w-full py-0 px-0 bg-black border-b border-white text-white font-vt323 text-sm focus:outline-none" 
            />
          </div>
          
          <div>
            <div className="bg-black border-t border-neon-pink mt-1">
              <label className="block text-neon-pink font-pixel text-xs py-0 px-0">MESSAGE</label>
            </div>
            <textarea 
              name="message" 
              placeholder="Your message" 
              value={form.message} 
              onChange={handle} 
              className="w-full py-0 px-0 bg-black border-b border-white text-white font-vt323 text-sm focus:outline-none resize-none" 
              rows={3} 
            />
          </div>
          
          <div className="flex items-center justify-between mt-1">
            <button 
              className="bg-black border border-neon-pink text-neon-pink font-pixel text-xs py-0 px-1"
              disabled={sending || messageSent}
            >
              SEND MESSAGE
            </button>
            
            <div className="text-xs text-white font-vt323">
              [ SECURE CHANNEL READY ]
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
