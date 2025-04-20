import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background text-muted-foreground">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left - Copyright */}
        <p className="text-sm text-center  md:text-left">
          © {new Date().getFullYear()} Suve Mandar, DevGuide. All rights reserved.
        </p>

        {/* Right - Quick links or social (optional) */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm hover:text-primary transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
