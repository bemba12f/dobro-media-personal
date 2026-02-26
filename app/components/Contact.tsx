// app/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 text-black">

        {/* LEFT COLUMN — INTRO + CTA */}
        <div className="flex flex-col gap-10">
          {/* Title */}
          <p className="text-3xl sm:text-4xl md:text-4xl font-semibold leading-[1.15]">
            Get in touch
          </p>

          {/* Availability */}
          <p className="text-xl sm:text-2xl md:text-3xl font-normal leading-[1.25] text-black/80">
            Available for freelance <br />& collaboration
          </p>

          {/* CTA */}
          <a
            href="mailto:wpf.szymanski@gmail.com"
            className="
              w-fit
              px-6 py-2.5
              rounded-full
              border border-black
              bg-transparent text-black
              text-sm tracking-widest
              flex items-center justify-center
              transition-colors duration-200
              hover:bg-black hover:text-white
              active:scale-[0.96]
            "
          >
            Mail me
          </a>
        </div>

        {/* RIGHT COLUMN — LINKS + DETAILS */}
        <div className="self-start pt-[3.2rem] text-right">
          <div className="flex flex-col gap-4 text-lg sm:text-xl leading-[1.35] tracking-wide">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/wojtek-szyma%C5%84ski-9ba0521ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-end gap-3 hover:opacity-60 transition-opacity"
            >
              <span>View my LinkedIn</span>
              {/* Profile Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1QnCGHZRUGGuLhlNfvgNfqWf5P0JrEON-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-end gap-3 hover:opacity-60 transition-opacity"
            >
              <span>View my resume (PDF)</span>
              {/* File Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path d="M6 2h8l4 4v16H6z" />
                <path d="M14 2v4h4" />
              </svg>
            </a>

            {/* Contact details */}
            <div className="mt-6 flex flex-col gap-1">
              <p>wpf.szymanski@gmail.com</p>
              <p>+48 693 224 540</p>
              <p>Gdańsk, Poland · Remote</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
