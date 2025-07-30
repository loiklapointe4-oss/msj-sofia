import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity.client'
import { vehicleBySlugQuery } from '@/lib/sanity.queries'
import type { Vehicle } from '@/lib/types'

export const revalidate = 60

export default async function Page({ params }: { params: { slug: string } }) {
  const v: Vehicle = await client.fetch(vehicleBySlugQuery, { slug: params.slug })
  if (!v) return <div className="container py-12">Véhicule introuvable.</div>

  return (
    <div className="container py-12">
      <Link href="/sofia/inventory" className="text-sm">← Retour à l’inventaire</Link>
      <div className="grid md:grid-cols-2 gap-8 mt-4">
        <div>
          <div className="relative w-full aspect-video bg-neutral-100 rounded-xl overflow-hidden">
            {v.images?.[0] && <Image src={v.images[0]} alt={v.title} fill className="object-cover" />}
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {v.images?.slice(1,9).map((img, i) => (
              <div key={i} className="relative aspect-[4/3] bg-neutral-100 rounded overflow-hidden">
                <Image src={img} alt={v.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{v.title}</h1>
          <div className="text-3xl font-bold mt-2">${"{"}v.price.toLocaleString(){"}"}</div>
          <dl className="grid grid-cols-2 gap-2 mt-4 text-sm">
            <dt className="opacity-70">Année</dt><dd>{v.year ?? '—'}</dd>
            <dt className="opacity-70">KM</dt><dd>{v.km?.toLocaleString() ?? '—'}</dd>
            <dt className="opacity-70">Transmission</dt><dd>{v.transmission ?? '—'}</dd>
            <dt className="opacity-70">Carburant</dt><dd>{v.fuel ?? '—'}</dd>
            <dt className="opacity-70">Couleur</dt><dd>{v.color ?? '—'}</dd>
            <dt className="opacity-70">Groupe motopropulseur</dt><dd>{v.drivetrain ?? '—'}</dd>
          </dl>
          <div className="flex gap-3 mt-6">
            <a className="btn btn-sofia" href="#">Réserver un essai</a>
            <a className="btn btn-ghost" href="#">Obtenir un financement</a>
          </div>
          {v.description && <div className="prose mt-6 whitespace-pre-line">{v.description}</div>}
        </div>
      </div>
    </div>
  )
}
