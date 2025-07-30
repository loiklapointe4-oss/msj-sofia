import { client } from '@/lib/sanity.client'
import { vehiclesQuery } from '@/lib/sanity.queries'
import type { Vehicle } from '@/lib/types'
import VehicleCard from '@/components/VehicleCard'

export const revalidate = 60

export default async function Page() {
  const vehicles: Vehicle[] = await client.fetch(vehiclesQuery)

  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold mb-6">Inventaire</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {vehicles.map(v => <VehicleCard key={v._id} v={v} />)}
      </div>
    </div>
  )
}
