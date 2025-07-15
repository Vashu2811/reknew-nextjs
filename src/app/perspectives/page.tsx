import BlogList from "./perspectives";


export const metadata = {
  title: "Insights & Perspectives | Digital Transformation & Business Innovation",
  description:
    "Read the latest insights and perspectives from ReKnew on digital transformation, business innovation, web design, and marketing trends.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    type: "website",
    url: "https://reknew.ai/perspectives",
    title: "Insights & Perspectives | Digital Transformation & Business Innovation",
    description: "Read the latest insights and perspectives from ReKnew on digital transformation, business innovation, web design, and marketing trends.",
    images: [
      {
        url: "https://reknew.ai/logo.png",
        width: 1200,
        height: 630,
        alt: "Insights & Perspectives | Digital Transformation & Business Innovation",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://reknew.ai/perspectives",
    title: "Insights & Perspectives | Digital Transformation & Business Innovation",
    description: "Read the latest insights and perspectives from ReKnew on digital transformation, business innovation, web design, and marketing trends.",
    images: ["https://reknew.ai/logo.png"],
    site: "@ReKnew",
    creator: "@ReKnew",
  },
  robots: "index, follow",
  authors: [{ name: "ReKnew" }],
  alternates: {
    canonical: "https://reknew.ai/perspectives",
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
       <BlogList />
      </div>
    </>
  );
}
