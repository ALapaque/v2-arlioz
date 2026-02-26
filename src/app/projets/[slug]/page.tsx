import { notFound } from "next/navigation";
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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Arlioz`,
    description: project.headline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Navigation />
      <main>
        <ProjectHero project={project} />
        <ProjectMeta project={project} />
        <ProjectChallenge project={project} />
        <ProjectSolution project={project} />
        <ProjectGallery project={project} />
        <ProjectResults project={project} />
        <ProjectStack project={project} />
        <ProjectTestimonial project={project} />
        <ProjectNavigation prev={prev} next={next} />
        <ProjectCTA />
      </main>
      <Footer />
    </>
  );
}
