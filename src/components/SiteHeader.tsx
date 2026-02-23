import { useState } from "react"
import { Menu, X, Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
}

interface SiteHeaderProps {
  currentPath: string
  lang: string
  navItems: NavItem[]
  frUrl: string
  enUrl: string
}

function normalize(path: string) {
  return path.replace(/\/$/, '') || '/'
}

export function SiteHeader({ currentPath, lang, navItems, frUrl, enUrl }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => normalize(currentPath) === normalize(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href={navItems[0]?.href}
          className="font-sans text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Louis Chataignier
        </a>

        <div className="flex items-center gap-2">
          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex mr-4" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1.5 px-2 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/flag_${lang}.webp`}
                  alt={lang === 'fr' ? 'Français' : 'English'}
                  className="h-[13px] w-5 object-cover"
                />
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-36">
              <DropdownMenuItem asChild>
                <a href={frUrl} className="flex items-center gap-2.5 cursor-pointer">
                  <img src={`${import.meta.env.BASE_URL}images/flag_fr.webp`} alt="Français" className="h-[13px] w-5 object-cover" />
                  <span>Français</span>
                  {lang === 'fr' && <Check className="ml-auto h-3.5 w-3.5 text-primary" />}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={enUrl} className="flex items-center gap-2.5 cursor-pointer">
                  <img src={`${import.meta.env.BASE_URL}images/flag_en.webp`} alt="English" className="h-[13px] w-5 object-cover" />
                  <span>English</span>
                  {lang === 'en' && <Check className="ml-auto h-3.5 w-3.5 text-primary" />}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="border-t border-border px-6 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-primary py-1",
                  isActive(item.href)
                    ? "font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
