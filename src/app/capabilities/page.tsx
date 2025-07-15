import Capabilities from "./capabilities";


export const metadata = {
  title: "Our Capabilities | Web Design, Branding & Digital Marketing Services",
  description:
    "Explore ReKnew’s full range of digital solutions including web design, branding, SEO, and digital marketing services tailored for business growth.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    type: "website",
    url: "https://reknew.ai/capabilities",
    title: "Our Capabilities | Web Design, Branding & Digital Marketing Services",
    description: "Explore ReKnew’s full range of digital solutions including web design, branding, SEO, and digital marketing services tailored for business growth.",
    images: [
      {
        url: "https://reknew.ai/logo.png",
        width: 1200,
        height: 630,
        alt: "Our Capabilities | Web Design, Branding & Digital Marketing Services",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://reknew.ai/capabilities",
    title: "Our Capabilities | Web Design, Branding & Digital Marketing Services",
    description: "Explore ReKnew’s full range of digital solutions including web design, branding, SEO, and digital marketing services tailored for business growth.",
    images: ["https://reknew.ai/logo.png"],
    site: "@ReKnew",
    creator: "@ReKnew",
  },
  robots: "index, follow",
  authors: [{ name: "ReKnew" }],
  alternates: {
    canonical: "https://reknew.ai/capabilities",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
       <Capabilities />
      </div>
    </>
  );
}
