import clsx from "clsx"
import Image from "next/image"
import CustomLink from "../common/custom-link"

export default function Hero() {
    return (
        <div className="h-screen">
            <div className="overflow-hidden h-full">
                <div 
                  className={clsx(
                    // Layout & Sizing
                    // 'w-full h-[120vh] md:h-screen relative opacity-50',
                    'w-full h-[90vh] md:h-screen relative opacity-50',
                    // Background
                    // "bg-[url('/hero.jpg')] md:bg-[url('/hero.jpg')] bg-cover bg-center",
                  )
                }
                ></div>
                <div className="z-20 absolute top-1/2 pt-16 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-10">
                    {/* <Heading level={2} className="text-white">
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
                    </div> */}

                    {/* <div className="flex items-center space-x-4"> */}
                    <div className="flex items-end space-x-4">
                      <div className="text-center">
                        <p className="text-6xl">2,700</p>
                        <p>liters of water </p>
                      </div>
                      <Image
                        src={'/imgs/hero/cup.png'}
                        alt="cup"
                        width={500}
                        height={500}
                        className="h-32 w-auto hidden md:block"
                      />
                      <p>to make one</p>
                      <Image
                        src={'/imgs/hero/tshirt.png'}
                        alt="cotton tshirt"
                        width={500}
                        height={500}
                        className="h-32 w-auto  hidden md:block"
                      />
                      <p>cotton t-shirt</p>
                    </div>
                    <p className="mx-auto w-fit text-xl">That's enough water for one person to drink for <span className="text-orange-500">900</span> days</p>
                    <CustomLink 
                      href="/fast-fashion"
                      theme="light"
                      className="!w-fit mx-auto rounded-3xl font-semibold text-orange-500"
                    >
                      Save Earth
                    </CustomLink>
                </div>
            </div>
        </div>
    )
}