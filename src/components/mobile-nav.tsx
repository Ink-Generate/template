// src/components/mobile-nav.tsx
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col gap-4 pt-10">
          <Link to="/" className="px-4 py-2 hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="px-4 py-2 hover:text-primary">
            About
          </Link>
          <Link to="/projects" className="px-4 py-2 hover:text-primary">
            Projects
          </Link>
          <Link to="/contact" className="px-4 py-2 hover:text-primary">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}