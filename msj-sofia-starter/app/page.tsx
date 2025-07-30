import Link from 'next/link'
import Hero from '@/components/Hero'

export default function Page() {
  return (
    <div>
      <Hero
        title="Deux entreprises. Un même service honnête."
        subtitle="Choisissez votre destination."
      />
      <section className="container py-12 grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl overflow-hidden">
          <div className="bg-msj-primary text-white p-6">
            <h2 className="text-2xl font-bold">MÉCANIQUE ST‑JANVIER</h2>
            <p className="opacity-90">Entretien & réparations</p>
          </div>
          <div className="p-6 flex gap-3">
            <Link href="/msj" className="btn btn-msj">Je veux un service</Link>
            <a href="#" className="btn btn-ghost">Appeler</a>
          </div>
        </div>

        <div className="border rounded-2xl overflow-hidden">
          <div className="bg-sofia-primary text-white p-6">
            <h2 className="text-2xl font-bold">SOFIA AUTO</h2>
            <p className="opacity-90">Voitures d’occasion vérifiées</p>
          </div>
          <div className="p-6 flex gap-3">
            <Link href="/sofia" className="btn btn-sofia">Je magasine une voiture</Link>
            <a href="#" className="btn btn-ghost">Financement</a>
          </div>
        </div>
      </section>
    </div>
  )
}
