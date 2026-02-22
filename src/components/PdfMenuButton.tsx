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
            className={`btn-site btn-site--filled celtic-hover ${className}`}
            aria-label="Download today's Stout Irish Pub menu as a PDF"
        >
            <span>Download PDF Menu</span>
            <Download className="w-4 h-4" aria-hidden="true" />
        </a>
    )
}
