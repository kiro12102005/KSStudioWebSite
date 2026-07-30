import { contactEmail, profile } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="px-6 py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-sm leading-relaxed text-muted">
          お仕事のご相談・お問い合わせはメールまたはSNSのDMからお願いします。
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-sm font-medium underline underline-offset-4"
        >
          {contactEmail}
        </a>
        <p className="mt-8 text-xs text-muted">
          © 2026 {profile.name}
        </p>
      </div>
    </footer>
  );
}
