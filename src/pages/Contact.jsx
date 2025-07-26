import { useRef, useState } from "react";
import { toast } from "react-hot-toast";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending your message...");
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-none py-20 px-6 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-zinc-900 mb-12">Contact Me</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-xl shadow-lg space-y-6 border border-zinc-200"
      >
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
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-full font-semibold transition ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-main-blue text-white hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
