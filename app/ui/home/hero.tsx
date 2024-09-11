import clsx from "clsx"
import CustomLink from "../common/custom-link"
import Heading from "../common/heading"
import { ROUTES } from "@/app/lib/constants/routes"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="h-screen">
            <div className="overflow-hidden h-full bg-black">
                <div className={clsx(
                        // Layout & Sizing
                        'w-full h-screen relative',
                        // Background
                        "bg-[url('/hero-mobile.png')] md:bg-[url('/hero.jpg')] bg-cover bg-center",
                    )}
                ></div>
                <div className="z-20 absolute top-2/3 md:top-3/4 left-1/2 -translate-x-1/2">
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