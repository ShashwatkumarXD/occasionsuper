/**
 * v0 by Vercel.
 * @see https://v0.app/t/5OtTUoRfbqV
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-background border-b">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="w-6 h-6" />
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium">
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}