export function QuoteSection() {
  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-white">
      <div className="container px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif italic leading-tight mb-8">
            &ldquo;Sight loss wasn&apos;t my limitation—it became my liberation to see what truly matters: compassion, kindness, and the unlimited potential within every person.&rdquo;
          </blockquote>
          <cite className="text-lg md:text-xl text-white/80 not-italic">
            — Clark Roberts, Founder & Executive Director
          </cite>
        </div>
      </div>
    </section>
  );
}
