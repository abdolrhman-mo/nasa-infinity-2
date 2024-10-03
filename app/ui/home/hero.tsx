import clsx from "clsx"
import Link from "next/link"
import Heading from "../common/heading"

export default function Hero() {
    return (
        <div className="h-screen">
            <div className="overflow-hidden h-full bg-black">
                <div className={clsx(
                        // Layout & Sizing
                        'w-full h-[120vh] md:h-screen relative opacity-50',
                        // Background
                        "bg-[url('/hero.jpg')] md:bg-[url('/hero.jpg')] bg-cover bg-center",
                    )}
                ></div>
                <div className="z-20 absolute top-1/2 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-10">
                    <Heading level={2} className="text-white">
                      Shop Sustainably, Make an Impact
                    </Heading>
                    <div className="w-fit mx-auto">
                      <Link
                        href={'#new-collection'}
                        className={clsx(
                          '',
                          'px-7 py-4',
                          'uppercase text-white',
                          'border rounded-[2rem]',
                        )}
                      >
                        shop now
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}