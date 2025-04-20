import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted py-6 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} All rights reserved. Built by a writer who crafts words that work.
      </div>
    </footer>
  )
}