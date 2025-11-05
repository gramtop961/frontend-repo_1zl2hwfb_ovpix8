import { useEffect, useState } from 'react';

const projectsData = [
  {
    title: 'E-commerce API',
    description: 'Microservice-based REST API with JWT auth, caching, and rate limiting.',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#',
  },
  {
    title: 'Real-time Analytics',
    description: 'WebSocket-driven event pipeline with streaming aggregations.',
    stack: ['Python', 'Kafka', 'ClickHouse', 'Grafana'],
    link: '#',
  },
  {
    title: 'File Processing Service',
    description: 'Asynchronous task queue for processing large files at scale.',
    stack: ['Celery', 'S3', 'RabbitMQ', 'Prometheus'],
    link: '#',
  },
];

function ProjectCard({ title, description, stack, link }) {
  return (
    <a href={link} className="block rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((tag) => (
          <span key={tag} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">{tag}</span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-blue-50" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-gray-700">A selection of backend-focused builds demonstrating scale and reliability.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">Work with me</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
