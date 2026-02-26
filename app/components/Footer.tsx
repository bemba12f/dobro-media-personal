// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-14 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-end gap-12">

        {/* LEFT */}
        <p className="text-xs md:text-sm leading-none">
          © {new Date().getFullYear()} Wojciech PF Szymański
        </p>

        {/* RIGHT */}
        <div className="text-right text-xs md:text-sm leading-[1.4]">
          <p>“Design is thinking made visual.”</p>
          <p className="mt-1">— Saul Bass</p>

          <p className="mt-6">
            “As an artist, I feel that we must try many things – but above all we must dare to fail.”
          </p>
          <p className="mt-1">— John Cassavetes</p>
        </div>

      </div>
    </footer>
  );
}
