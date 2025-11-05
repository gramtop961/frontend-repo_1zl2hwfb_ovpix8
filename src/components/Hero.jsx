import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Backend Engineer • APIs • Databases</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Building robust, scalable backends with a modern touch
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            I design and implement reliable APIs, database systems, and cloud-ready services. Explore my projects to see how I bring performance and reliability together.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/90">Get in Touch</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
