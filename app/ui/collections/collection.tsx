import ProductsList from "@/app/ui/products/products-list"
import Heading from "../common/heading"
import { fetchProductsAPI } from "@/app/lib/services/products/productService"

export default async function Collection({
    title,
    tag,
}: {
    title: string
    tag: string
}) {
  return (
        <div className="pt-12">
            <div className="text-center">
                <Heading level={2}>{title}</Heading>
            </div>
            <ProductsList tag={tag} />
        </div>
    )
}