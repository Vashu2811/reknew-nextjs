import OurStory from "./About-us";

export const metadata = {
  title: "About ReKnew | Meet Our Digital Experts & Creative Team",
  description:
    "Discover the talented team behind ReKnew. Learn about our mission, values, and expertise in web design, branding, and digital marketing for business growth.",
  keywords: [
    "ReKnew",
    "Digital Experts",
    "Creative Team",
    "Web Design",
    "Branding",
    "Digital Marketing",
    "Business Growth",
    "Mission",
    "Values",
    "About",
  ],
  authors: [{ name: "ReKnew" }],
  openGraph: {
    type: "website",
    url: "https://reknew.ai/about",
    title: "About ReKnew | Meet Our Digital Experts & Creative Team",
    description:
      "Discover the talented team behind ReKnew. Learn about our mission, values, and expertise in web design, branding, and digital marketing for business growth.",
    images: [
      {
        url: "https://reknew.ai/logo.png",
        width: 1200,
        height: 630,
        alt: "About ReKnew | Meet Our Digital Experts & Creative Team",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://reknew.ai/about",
    title: "About ReKnew | Meet Our Digital Experts & Creative Team",
    description:
      "Discover the talented team behind ReKnew. Learn about our mission, values, and expertise in web design, branding, and digital marketing for business growth.",
    images: ["https://reknew.ai/logo.png"],
    site: "@ReKnew",
    creator: "@ReKnew",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://reknew.ai/about",
  },
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  mobileWebAppCapable: "yes",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "default",
  formatDetection: {
    telephone: "no",
  },
};

export default function MyApp() {
  return (
    <>
      <div className="overflow-x-hidden">
        <OurStory />
      </div>
    </>
  );
}
