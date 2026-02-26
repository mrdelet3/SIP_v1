import { Download } from 'lucide-react'

interface PdfMenuButtonProps {
    className?: string
    label?: string
    children?: React.ReactNode
}

/**
 * PdfMenuButton — always points to /menu.pdf in the public/ directory.
 * Staff updates the menu by replacing that single file (see docs/MENU_UPDATE.md).
 */
export default function PdfMenuButton({ className = '', label = 'FULL MENU', children }: PdfMenuButtonProps) {
    return (
        <a
            href="/menu.pdf"
            download="Stout-Irish-Pub-Menu.pdf"
            className={`btn-site btn-site--filled celtic-hover flex items-center justify-center gap-2 ${className}`}
            aria-label="Download today's Stout Irish Pub menu as a PDF"
        >
            {children ? children : (
                <>
                    <span>{label}</span>
                    <Download className="w-4 h-4" aria-hidden="true" />
                </>
            )}
        </a>
    )
}
