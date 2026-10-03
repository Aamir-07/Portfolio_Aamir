import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Crafted with Next.js &amp; React.
      </p>
    </footer>
  );
}
