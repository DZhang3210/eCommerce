import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { cache } from "@/lib/cache"
import prisma from "@/lib/db"
import { Product } from "@prisma/client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

const getMostPopularProducts = cache(() => {
    return prisma.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { orders: { _count: "desc" } },
        take: 6
    })
},
    ["/", "getMostPopularProducts"],
    { revalidate: 60 * 60 * 24 })

const getNewestProducts = cache(() => {
    return prisma.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { createdAt: "desc" },
        take: 6
    })
},
    ["/", "getNewestProducts"]
)

export default function HomePage() {
    return (
        <main className="space-y-12">
            <ProductGridSection productsFetch={getMostPopularProducts} title="Most Popular" />
            <ProductGridSection productsFetch={getNewestProducts} title="Most Recent" />
        </main>
    )
}

type ProductGridSectionProps = {
    productsFetch: () => Promise<Product[]>,
    title: string
}


function ProductGridSection({ productsFetch, title }: ProductGridSectionProps) {
    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <h2 className="text-3xl font-bold">{title}</h2>
                <Button variant="outline" asChild>
                    <Link href="/products">
                        <span>View All</span>
                        <ArrowRight className="size-4" />
                    </Link>
                </Button>
                <div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Suspense
                    fallback={
                        <>
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                        </>
                    }
                >
                    <ProductSuspense productsFetch={productsFetch} />
                </Suspense>

            </div>
        </div>
    )
}

async function ProductSuspense({ productsFetch }: {
    productsFetch: () => Promise<Product[]>
}) {
    return (
        <>
            {(await productsFetch()).map(product => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))

            }
        </>
    )
}