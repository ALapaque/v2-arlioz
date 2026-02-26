import { notFound } from "next/navigation";
import { teamMembers, getTeamMemberBySlug, getAdjacentTeamMembers } from "@/data/team";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import TeamHero from "@/app/components/team-detail/TeamHero";
import TeamBio from "@/app/components/team-detail/TeamBio";
import TeamSkills from "@/app/components/team-detail/TeamSkills";
import TeamExperience from "@/app/components/team-detail/TeamExperience";
import TeamRecommendations from "@/app/components/team-detail/TeamRecommendations";
import TeamProjects from "@/app/components/team-detail/TeamProjects";
import TeamNavigation from "@/app/components/team-detail/TeamNavigation";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};
  return {
    title: `${member.name} — ${member.role} — Arlioz`,
    description: member.headline,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();
  const { prev, next } = getAdjacentTeamMembers(slug);

  return (
    <>
      <Navigation />
      <main>
        <TeamHero member={member} />
        <TeamBio member={member} />
        <TeamSkills member={member} />
        <TeamExperience member={member} />
        <TeamRecommendations member={member} />
        <TeamProjects member={member} />
        <TeamNavigation prev={prev} next={next} />
      </main>
      <Footer />
    </>
  );
}
