import Link from 'next/link'
import Hero from '@/components/Hero'
import { client } from '@/lib/sanity.client'
import { servicesQuery } from '@/lib/sanity.queries'
import type { Service } from '@/lib/types'

export const revalidate = 60

export default async function Page() {
  const services: Service[] = await client.fetch(servicesQuery)

  return (
    <div>
      <Hero variant="msj" title="Réparations rapides. Prix clairs." subtitle="Prenez rendez‑vous aujourd’hui."
        ctas={<>
          <a href="#" className="btn btn-msj">Prendre rendez‑vous</a>
          <Link href="/" className="btn btn-ghost">← Retour</Link>
        </>} />
      <section className="container py-12">
        <h2 className="text-xl font-semibold mb-4">Services populaires</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s._id} className="border rounded-xl p-4">
              <div className="font-semibold">{s.title}</div>
              {s.startingFrom && <div className="text-sm mt-1">À partir de ${"{"}s.startingFrom{"}"}</div>}
              <p className="text-sm opacity-80 mt-2">{s.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
