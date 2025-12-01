import { Container } from "./Container";
import { CheckSquare } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition-opacity"
          >
            <CheckSquare className="w-6 h-6" />
            <span>TaskFlow</span>
          </Link>
          {/* Add navigation or user menu here if needed */}
        </div>
      </Container>
    </header>
  );
}
