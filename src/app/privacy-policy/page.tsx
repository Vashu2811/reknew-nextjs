import PrivacyPolicy from "./privacypolicy";



export const metadata = {
  title: "Privacy Policy | ReKnew",
  description: "Read ReKnew's privacy policy to understand how we collect, use, and protect your information.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    type: "website",
    url: "https://reknew.ai/privacy-policy",
    title: "Privacy Policy | ReKnew",
    description: "Read ReKnew's privacy policy to understand how we collect, use, and protect your information.",
    images: [
      {
        url: "https://reknew.ai/logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | ReKnew",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://reknew.ai/privacy-policy",
    title: "Privacy Policy | ReKnew",
    description: "Read ReKnew's privacy policy to understand how we collect, use, and protect your information.",
    images: ["https://reknew.ai/logo.png"],
    site: "@ReKnew",
    creator: "@ReKnew",
  },
  robots: "index, follow",
  authors: [{ name: "ReKnew" }],
  alternates: {
    canonical: "https://reknew.ai/privacy-policy",
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
       <PrivacyPolicy />
      </div>
    </>
  );
}

