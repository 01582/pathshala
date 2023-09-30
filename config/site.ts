export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "The PathShala",
	description: "Perfect Tution Class, Kindergarten to Post Graduation ",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Classes",
      href: "/class",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Cource",
      href: "/cource",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Class",
			href: "/class",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Join",
			href: "/join",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Sign-in",
			href: "/sign-in",
		},
	],
	links: {
		github: "/about",
		twitter: "https://twitter.com/pawitsahare",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "htp://about:blank"
	},
};
