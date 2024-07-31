import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { cache } from "@/lib/cache";
import prisma from "@/lib/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const getProducts = cache(() => {
    return prisma.product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { name: "asc" }

    })
}, ["/", "getProducts"])

export default function ProductPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Suspense
                fallback={
                    <>
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                        <ProductCardSkeleton />
                    </>
                }
            >
                <ProductsSuspense />
            </Suspense>

        </div>
    )
}

async function ProductsSuspense() {
    const products = await getProducts()
    return products.map(product => (
        <ProductCard key={product.id} {...product} />
    ))
}