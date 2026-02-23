import { Mail, Phone } from "lucide-react"

const MAIL = "louis.chataignier@math.univ-toulouse.fr"
const PHONE = "+33 6 22 65 15 78"
const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row md:text-left">

        {/* Left: name + contact */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <p className="font-medium text-foreground">Louis Chataignier</p>
          <div className="flex flex-col gap-1">
            <a
              href={`mailto:${MAIL}`}
              className="flex justify-center items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary md:justify-start"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {MAIL}
            </a>
            <a
              href={`tel:${PHONE.replace(/\s+/g, "")}`}
              className="flex justify-center items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary md:justify-start"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {PHONE}
            </a>
          </div>
        </div>

        {/* Right: logos + copyright */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <div className="flex items-center gap-5">
            <img
              src="/images/institut-mathematiques.webp"
              alt="Institut de Mathématiques de Toulouse"
              className="max-h-9 max-w-[30vw] object-contain"
            />
            <img
              src="/images/universite-toulouse.webp"
              alt="Université de Toulouse"
              className="max-h-9 max-w-[30vw] object-contain"
            />
            <img
              src="/images/cnrs.webp"
              alt="CNRS"
              className="max-h-9 max-w-[30vw] object-contain"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {YEAR} Louis Chataignier
          </p>
        </div>

      </div>
    </footer>
  )
}
