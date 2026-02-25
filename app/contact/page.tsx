'use client'
import Form from 'next/form'
import { Instagram } from 'lucide-react';


// Tailwind styling for repeated components
const contactStyles = {
  h2: "text-xl font-semibold",
  infoSpan: "flex gap-4 items-center",
  label: "block text-xl font-semibold mb-1",
  input: "w-full mb-6 bg-(--header) border border-gray-300 rounded-sm shadow-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-(--input-border)"
}

// Decorative line
const DecLine = () => (
    <hr className="w-full border-0 h-[2px] bg-(--card-border)" />
  );


export default function ContactPage() {

  function submitForm(){
    alert("form submitted");
  }

  return (
    <main>
      <h1 className="text-3xl font-medium text-center my-6">Contact</h1>
      {/* <hr className="w-9/10 mx-auto border-(--card-border) mb-5"></hr> */}
      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-(--card-border) to-transparent" />
      <div className="relative flex max-w-6xl mx-auto my-8">
        {/* Contact form */}
        <div className="relative w-1/2">
          <Form action={submitForm} className="max-w-lg mx-auto p-6 bg-(--secondary) shadow-md rounded-lg">
            {/* Name */}
            <label htmlFor="senderName" className={`${contactStyles.label}`}>Name</label>
            <input type="text" name="senderName" className={`${contactStyles.input}`} />
            
            {/* Email */}
            <label htmlFor="senderEmail" className={`${contactStyles.label}`}>Email</label>
            <input type="email" name="senderEmail" className={`${contactStyles.input}`} />
            
            {/* Message */}
            <label htmlFor="message" className={`${contactStyles.label}`}>Message</label>
            <textarea rows={4} name="message" className={`${contactStyles.input}`}></textarea>

            <button type="submit" className="w-full bg-(--rust) text-white py-2 rounded-md hover:bg-(--dark-rust) transition">Send Message</button>
          </Form>
        </div>

        {/* Store Information */}
        <div className="relative w-1/2 max-w-lg mx-auto p-6 bg-(--secondary) shadow-md rounded-lg space-y-1">
          <span className={`${contactStyles.infoSpan}`}>
            <h2 className={`${contactStyles.h2}`}>Email</h2>
            <DecLine />
          </span>
          <p className="mb-5">beaconstgardens@email.com</p>

          <span className={`${contactStyles.infoSpan}`}>
            <h2 className={`${contactStyles.h2}`}>Hours</h2>
            <DecLine />
          </span>          
          <p className="mb-5">Saturdays 10AM - 1PM</p>

          <span className={`${contactStyles.infoSpan}`}>
            <h2 className={`${contactStyles.h2}`}>Location</h2>
            <DecLine />
          </span>
          <p>Address line 1</p>
          <p className="mb-5">Address line 2</p>

          <span className={`${contactStyles.infoSpan}`}>
            <h2 className={`${contactStyles.h2}`}>Pickup</h2>
            <DecLine />
          </span>
          <p className="mb-5">You can reserve items online for scheduled pickup</p>

          <span className={`${contactStyles.infoSpan}`}>
            <h2 className={`${contactStyles.h2}`}>Follow</h2>
            <DecLine />
          </span>
          <span className="flex gap-2 items-center">
            <Instagram size={15} color="var(--text)" />
            <p>@beaconstgardens</p>
          </span>
        </div>
      </div>
    </main>
  );
}
