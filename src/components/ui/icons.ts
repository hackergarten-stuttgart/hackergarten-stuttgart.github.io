import { Clock, type IconNode } from "lucide";
import { siDiscord, siGit, siGithub, siMeetup } from "simple-icons";

/**
 * Icons drawn on a 24×24 viewBox: brand logos from Simple Icons as filled path strings,
 * generic glyphs from Lucide as stroked element nodes.
 */
export const icons = {
  discord: siDiscord.path,
  git: siGit.path,
  github: siGithub.path,
  meetup: siMeetup.path,
  clock: Clock,
} as const satisfies Record<string, string | IconNode>;

export type IconName = keyof typeof icons;
export type IconLink = { href: string; label: string; icon: IconName };
