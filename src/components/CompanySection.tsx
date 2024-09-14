import Image from 'next/image'
import beneoshop from "../../public/beneoshop.png"
import caspio from "../../public/caspio.png"
import hypergrid from "../../public/HyperGrid.png"
import leotrippi from "../../public/leotrippi.png"

export default function CompanyLogos() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-10 md:space-y-8">
      <h2 className="text-lg font-semibold md:text-xl">You will be in good Company</h2>
      <div className="grid grid-cols-2 gap-6 md:flex md:items-center md:justify-center md:space-x-10">
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src={beneoshop}
            alt="Beneoshop Logo"
            className="object-contain"
            fill
          />
        </div>
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src={caspio}
            alt="Caspio Logo"
            className="object-contain"
            fill
          />
        </div>
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src={hypergrid}
            alt="Hypergrid Logo"
            className="object-contain"
            fill
          />
        </div>
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src={leotrippi}
            alt="Leo Trippi Logo"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  )
}
