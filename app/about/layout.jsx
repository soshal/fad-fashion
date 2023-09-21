import "./../globals.css";

export const metadata = {
  title: "About | FAD",
  description:
    "Welcome to Fad, the new era social media platform catering exclusively to Gen-Z. Embrace your passion for fashion sense and a well-maintained lifestyle here. Explore the latest trends, connect with like-minded individuals, and express your unique style. Join Fad, the modern social media platform designed to inspire and empower the fashion-forward generation. Let's discover yourself, set trends, and make meaningful connections. Unleash your creativity and be part of the vibrant community shaping the future of social media for Gen-Z. Sign up now to experience a fashion-focused revolution like never before!",
  keywords:
    "Fad social media platform,Gen-Z fashion community, Modern lifestyle trends, Discover fashion passion, Fashion-forward Gen-Z,Trendsetting social media, Express yourself with Fad, Well-maintained lifestyle inspiration, Fashion enthusiasts network, Trendy lifestyle platform, Gen-Z fashionistas, Fashion sense exploration, Embrace individuality with Fad, Fashion trend discovery, Trendy lifestyle connections, Gen-Z style influencers, Social media for fashion lovers, Trendy lifestyle community, Fashion-forward social network, Empowering fashion expression",
  slug: "/",
  excludeFromSitemap: false,
  includeInSitemap: true,
  disallowRobots: false,
  dateModified: false,
  priority: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
