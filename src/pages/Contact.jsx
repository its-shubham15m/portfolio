import { useRef } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending your message...");

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", { id: loadingToast });
        formRef.current.reset();
      } else {
        toast.error("Failed to send message.", { id: loadingToast });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.", { id: loadingToast });
    }
  };


  return (
    <section className="bg-none py-20 px-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-zinc-900 mb-12">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-zinc-200">
        <div>
          <label className="block text-zinc-700 font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-blue"
          />
        </div>

        <div>
          <label className="block text-zinc-700 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-blue"
          />
        </div>

        <div>
          <label className="block text-zinc-700 font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-blue"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-main-blue text-white px-6 py-3 rounded-full transition font-semibold cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;