import { Download } from 'lucide-react'

interface PdfMenuButtonProps {
    className?: string
}

/**
 * PdfMenuButton — always points to /menu.pdf in the public/ directory.
 * Staff updates the menu by replacing that single file (see docs/MENU_UPDATE.md).
 */
export default function PdfMenuButton({ className = '' }: PdfMenuButtonProps) {
    return (
        <a
            href="/menu.pdf"
            download="Stout-Irish-Pub-Menu.pdf"
            className={`
        inline-flex items-center gap-3
        bg-gold text-white
        font-sans font-bold uppercase tracking-[0.2em] text-[12px]
        px-14 py-6 shadow-xl
        hover:bg-white hover:text-black
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#141414]
        celtic-hover
        ${className}
      `}
            aria-label="Download today's Stout Irish Pub menu as a PDF"
        >
            <span>Download PDF Menu</span>
            <Download className="w-5 h-5" aria-hidden="true" />
        </a>
    )
}
