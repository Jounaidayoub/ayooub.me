import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center justify-center gap-6 py-24 px-6 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-center max-w-xl text-zinc-700 dark:text-zinc-300">
        Have an opportunity, a question, or just want to say hi? Reach out by
        email or via any of the platforms below.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button asChild variant="outline" className="gap-2">
          <a href="mailto:ayoub.jounaidi.dev@gmail.com">
            <Mail className="w-4 h-4" /> Email Me
          </a>
        </Button>
        <Button asChild className="gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
          <a
            href="https://github.com/jounaidayoub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <a
            href="https://www.linkedin.com/in/ayoub-jounaidi" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </Button>
      </div>

      <form
        action="" //will make this wokr later
        method="POST"
        className="mt-8 w-full max-w-xl grid grid-cols-1 gap-4"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            name="name"
            required
            className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
            placeholder="you@example.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 resize-y"
            placeholder="Write your message..."
          />
        </div>
        <Button type="submit" className="justify-self-start bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200">
          Send
        </Button>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 -mt-2">
          This form currently posts to a placeholder endpoint. You can replace it with your own API.
        </p>
      </form>
    </section>
  );
};

export default Contact;
