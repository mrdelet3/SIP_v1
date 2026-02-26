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
export default function PdfMenuButton({
    className = '',
    label = 'FULL MENU',
    href = '/menu.pdf',
    download = 'Stout-Irish-Pub-Menu.pdf',
    variant = 'gold',
    children
}: PdfMenuButtonProps & { href?: string; download?: string; variant?: 'gold' | 'green' | 'outline' }) {
    const variantClasses = {
        gold: 'btn-site--filled glow-gold',
        green: 'btn-site--green glow-green',
        outline: 'btn-site--outline glow-gold-light'
    }

    return (
        <a
            href={href}
            download={download}
            className={`btn-site flex items-center justify-center gap-2 ${variantClasses[variant]} ${className}`}
            aria-label={`Download today's Stout Irish Pub ${label.toLowerCase()} as a PDF`}
        >
            {children ? children : (
                <>
                    <span className="text-center leading-tight">{label}</span>
                    <Download className="w-3 h-3 md:w-4 md:h-4 shrink-0" aria-hidden="true" />
                </>
            )}
        </a>
    )
}
