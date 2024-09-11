import { APP_NAME } from "@/app/lib/constants/appConfig"
import { ROUTES } from "@/app/lib/constants/routes"
import Image from "next/image"
import Link from "next/link"
import { syncopate } from "../fonts"

export default function Logo({
    className
}: {
    className?: string
}) {
    return (
        <Link 
            href={ROUTES.HOME}
            // className={`text-3xl font-bold ${className}`}
            className={`${syncopate.className} text-xl font-bold ${className}`}
        >
          {APP_NAME}
          {/* <Image
            src={'/logo.png'}
            alt={APP_NAME}
            width={75}
            height={75}
          /> */}
        </Link>
    )
}