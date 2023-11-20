const logos = [
  {
    id: 1,
    src: 'https://greengiant.com/wp-content/uploads/2023/01/cropped-green_logo-1.webp'
  },
  {
    id: 2,
    src: 'https://cdn.nomadfoodscdn.com/-/media/project/bluesteel/shared/logos/logo-birdseye-2023.png?h=58&iar=0&w=132&hash=1C9977E5E58936750B18F8EC69A456AA'
  },
  {
    id: 3,
    src: 'https://www.earthboundfarm.com/wp-content/uploads/2022/02/EBF-logo-color.png'
  },
  {
    id: 4,
    src: 'https://www.freshexpress.com/wp-content/themes/Fex/assets/img/Logo.svg'
  },
  {
    id: 5,
    src: 'https://www.bolthouse.com/wp-content/themes/pfw-wp-bolthouse/images/Web_NewLOGO_WHT_250x150.svg'
  }
]

export default function LogoCloud() {
  return (
    <div className="bg-gray-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map(logo => (<img
            key={logo.id}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={logo.src}
            alt="Transistor"
            width={158}
            height={48}
          />))}
        </div>
      </div>
    </div>
  )
}
