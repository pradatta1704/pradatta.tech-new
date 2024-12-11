import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORMSPREE_FORM_ID);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  if (state.succeeded) {
    return (
      <div className="text-center text-secondary">
        <p className="text-xl font-semibold">Thanks for reaching out!</p>
        <p>I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-secondary text-background-dark py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors disabled:opacity-50 font-medium"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}