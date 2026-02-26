// app/components/About.tsx
export default function About() {
  return (
    <section id="about" className="py-78 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-black">
        {/* TITLE */}
        <h2 className="mb-14 text-xl md:text-2xl font-medium tracking-wide">
          About
        </h2>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT COLUMN – LEAD */}
          <p
            className="
              text-2xl sm:text-3xl md:text-5xl
              leading-tight
              font-medium
            "
          >
            I help brands and studios turn complex ideas into clear, dynamic visuals for modern media.
          </p>

          {/* RIGHT COLUMN – SUPPORT */}
          <p
            className="
              text-lg sm:text-xl md:text-2xl
              leading-relaxed
              text-black/80
            "
          >
            My work lives at the crossing of motion, cinema, and design — shaped by experience in global studios, 
            game production, public institutions, NGOs, and agile freelance environments. <br /><br />
            At the core of my work lies a curiosity about motion itself: how images carry meaning, 
            how symbolism emerges through shape and movement, and how visual rhythm can guide attention and emotion. 
            I focus on cross-platform marketing campaigns while also working with UI micro-interactions, 
           in-game cinematics, storyboarding, writing, and film direction.
          </p>
        </div>
      </div>
    </section>
  );
}
