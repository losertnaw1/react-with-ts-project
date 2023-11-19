const stats = [
    { id: 1, name: 'Served customers', value: '44 million' },
    { id: 2, name: 'Total revenue', value: '$119 trillion' },
    { id: 3, name: 'Products', value: '999' },
]

export default function Stat() {
    return (
        <>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our amazing stats</h2>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    )
}
