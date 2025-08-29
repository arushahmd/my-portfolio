import { useState } from "react";
import { Copy, Mail } from "lucide-react"; // lightweight icons

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "aroosh@example.com"; // replace with your real email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Intro */}
      <h1 className="text-4xl font-bold">Hey, I'm Aroosh</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">
        AI Product Engineer
      </h2>

      {/* Tagline */}
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        I turn fuzzy ideas into live products{" "}
        <span className="font-semibold">(quickly)</span> — full-stack AI
        builder.
      </p>

      {/* Details */}
      <div className="mt-6 text-gray-700 max-w-2xl space-y-2">
        <p>
          Currently working as a <b>Founding Engineer</b> at{" "}
          <span className="font-semibold">kay.ai</span>.
        </p>
        <p>
          Built multiple products in the past 5 years — raised <b>$100K</b>{" "}
          funding for my startup{" "}
          <span className="font-semibold">Dreamboat.ai</span>, built{" "}
          <span className="font-semibold">Engagebud</span>,{" "}
          <span className="font-semibold">Influencerbit</span>.
        </p>
        <p>
          You can talk to me about <b>AI, new ideas, life,</b> or anything else.
        </p>
        <p>
          Say Hi on{" "}
          <a
            href="https://x.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            X
          </a>{" "}
          or{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        {/* Copy Email */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md border border-black transition hover:bg-transparent hover:text-black"
        >
          <Copy size={18} />
          {copied ? "Copied!" : "Copy Email"}
        </button>

        {/* Contact Button */}
        <a
          href="/contact"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md border border-black transition hover:bg-transparent hover:text-black"
        >
          <Mail size={18} />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Home;
