import TermsAndConditions from "./termsandconditions";

export const metadata = {
  title: "Terms & Conditions | ReKnew",
  description: "Read ReKnew's terms and conditions to understand your rights and responsibilities when using our website and services.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    type: "website",
    url: "https://reknew.ai/terms-and-conditions",
    title: "Terms & Conditions | ReKnew",
    description: "Read ReKnew's terms and conditions to understand your rights and responsibilities when using our website and services.",
    images: [
      {
        url: "https://reknew.ai/logo.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions | ReKnew",
      },
    ],
    siteName: "ReKnew",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://reknew.ai/terms-and-conditions",
    title: "Terms & Conditions | ReKnew",
    description: "Read ReKnew's terms and conditions to understand your rights and responsibilities when using our website and services.",
    images: ["https://reknew.ai/logo.png"],
    site: "@ReKnew",
    creator: "@ReKnew",
  },
  robots: "index, follow",
  authors: [{ name: "ReKnew" }],
  alternates: {
    canonical: "https://reknew.ai/terms-and-conditions",
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
       <TermsAndConditions />
      </div>
    </>
  );
}

