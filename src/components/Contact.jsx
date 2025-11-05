import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Example no-backend form: opens mail client
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent('Portfolio inquiry');
    const body = encodeURIComponent(`Hi,\n\nMy name is ${form.get('name')}\n${form.get('message')}\n\n— ${form.get('email')}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
    setStatus('');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let's build something</h2>
        <p className="mt-2 text-gray-700">Tell me about your project and how I can help. I usually reply within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <input name="company" placeholder="Company (optional)" className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          <textarea name="message" required placeholder="What are we building?" rows={5} className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Send message</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
