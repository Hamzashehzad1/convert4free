import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row">
        <p>&copy; {new Date().getFullYear()} Convert4Free. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
