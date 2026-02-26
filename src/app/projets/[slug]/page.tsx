import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/project-detail/ProjectHero";
import ProjectMeta from "@/app/components/project-detail/ProjectMeta";
import ProjectChallenge from "@/app/components/project-detail/ProjectChallenge";
import ProjectSolution from "@/app/components/project-detail/ProjectSolution";
import ProjectGallery from "@/app/components/project-detail/ProjectGallery";
import ProjectResults from "@/app/components/project-detail/ProjectResults";
import ProjectStack from "@/app/components/project-detail/ProjectStack";
import ProjectTestimonial from "@/app/components/project-detail/ProjectTestimonial";
import ProjectNavigation from "@/app/components/project-detail/ProjectNavigation";
import ProjectCTA from "@/app/components/project-detail/ProjectCTA";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.name} — Arlioz`,
    description: project.headline,
    openGraph: {
      title: `${project.name} — Arlioz`,
      description: project.headline,
      url: `https://arlioz.com/projets/${project.slug}`,
      siteName: "Arlioz",
      locale: "fr_FR",
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  const hasContent =
    project.challenge.length > 0 &&
    project.solution.length > 0 &&
    project.gallery.length > 0;

  return (
    <>
      <Navigation />
      <main>
        <ProjectHero project={project} />
        <ProjectMeta meta={project.meta} />

        {hasContent ? (
          <>
            <ProjectChallenge paragraphs={project.challenge} />
            <ProjectSolution steps={project.solution} />
            <ProjectGallery
              images={project.gallery}
              accentColor={project.accentColor}
            />
            <ProjectResults results={project.results} />
            <ProjectStack techStack={project.techStack} />
            {project.testimonial.quote && (
              <ProjectTestimonial testimonial={project.testimonial} />
            )}
          </>
        ) : (
          <section className="py-28 md:py-40 text-center">
            <span
              className="section-label block mb-6"
            >
              BIENTÔT DISPONIBLE
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight text-[var(--nx-ivory-ghost)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ÉTUDE DE CAS EN COURS DE RÉDACTION
            </h2>
          </section>
        )}

        <ProjectNavigation prev={prev} next={next} />
        <ProjectCTA />
      </main>
      <Footer />
    </>
  );
}
