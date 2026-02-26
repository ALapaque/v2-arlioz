import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  teamMembers,
  getTeamMemberBySlug,
  getAdjacentTeamMembers,
} from "@/data/team";
import { projects } from "@/data/projects";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import TeamHero from "@/app/components/team-detail/TeamHero";
import TeamBio from "@/app/components/team-detail/TeamBio";
import TeamSkills from "@/app/components/team-detail/TeamSkills";
import TeamExperience from "@/app/components/team-detail/TeamExperience";
import TeamRecommendations from "@/app/components/team-detail/TeamRecommendations";
import TeamProjects from "@/app/components/team-detail/TeamProjects";
import TeamNavigation from "@/app/components/team-detail/TeamNavigation";
import ProjectCTA from "@/app/components/project-detail/ProjectCTA";

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};

  return {
    title: `${member.name} — ${member.role} — Arlioz`,
    description: member.headline,
    openGraph: {
      title: `${member.name} — ${member.role} — Arlioz`,
      description: member.headline,
      url: `https://arlioz.be/equipe/${member.slug}`,
      siteName: "Arlioz",
      locale: "fr_FR",
      type: "profile",
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  const { prev, next } = getAdjacentTeamMembers(slug);

  const relatedProjects = member.relatedProjectSlugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean) as typeof projects;

  return (
    <>
      <Navigation />
      <main>
        <TeamHero member={member} />
        <TeamBio paragraphs={member.bio} />
        <TeamSkills skills={member.skills} accentColor={member.accentColor} />
        <TeamExperience
          experience={member.experience}
          education={member.education}
          certifications={member.certifications}
          accentColor={member.accentColor}
        />
        <TeamRecommendations
          recommendations={member.recommendations}
          accentColor={member.accentColor}
        />
        <TeamProjects projects={relatedProjects} />
        <TeamNavigation prev={prev} next={next} />
        <ProjectCTA />
      </main>
      <Footer />
    </>
  );
}
