import Image from 'next/image'

export default function CompanyLogos() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-10 md:space-y-8">
      <h2 className="text-lg font-semibold md:text-xl">You will be in good Company</h2>
      <div className="grid grid-cols-2 gap-6 md:flex md:items-center md:justify-center md:space-x-10">
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src="/beneoshop.png" // Replace with the correct image path
            alt="Beneoshop Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src="/caspio.png" // Replace with the correct image path
            alt="Caspio Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src="/hypergrid.png" // Replace with the correct image path
            alt="Hypergrid Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-36 h-20 lg:w-48 lg:h-40">
          <Image
            src="/leotrippi.png" // Replace with the correct image path
            alt="Leo Trippi Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}
