import Link from 'next/link'
import Hero from '@/components/Hero'

export default function Page() {
  return (
    <div>
      <Hero variant="sofia" title="Voitures d’occasion inspectées" subtitle="Financez en quelques minutes."
        ctas={<>
          <Link href="/sofia/inventory" className="btn btn-sofia">Voir l’inventaire</Link>
          <a href="#" className="btn btn-ghost">Financement</a>
        </>} />
      <section className="container py-12">
        <p>Bienvenue chez Sofia Auto. Parcourez notre inventaire, réservez un essai routier et obtenez un pré‑accord de financement.</p>
      </section>
    </div>
  )
}
