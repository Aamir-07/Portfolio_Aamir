import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Crafted with React &amp; Vite.
      </p>
    </footer>
  );
}
