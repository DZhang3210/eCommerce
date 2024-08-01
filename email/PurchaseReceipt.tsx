import { Product } from '@prisma/client'
import { Body, Container, Head, Heading, Html, Preview, Tailwind } from '@react-email/components'
import OrderInformation from './_components/OrderInformation'

type PurchaseReceiptEmailProps = {
    product: {
        name: string,
        imagePath: string,
        description: string,
    },
    order: {
        id: string,
        createdAt: Date,
        pricePaidInCents: number
    },
    downloadVerificationId: String
}

PurchaseReceiptEmail.PreviewProps = {
    product: {
        name: "Product name",
        description: "new product",
        imagePath: "/products/1fb37a07-4603-47ae-a35c-2fdf6071ca24-nyu-id.jpg"
    },
    order: {
        id: "njhsanjidka",
        createdAt: new Date(),
        pricePaidInCents: 100000
    },
    downloadVerificationId: "anjksdkna"
} satisfies PurchaseReceiptEmailProps

export default function PurchaseReceiptEmail({ product, order, downloadVerificationId }: PurchaseReceiptEmailProps) {
    return (
        <Html>
            <Preview>Download {product.name} and view receipt</Preview>
            <Tailwind>
                <Head />
                <Body className='font-sans bg-white'>
                    <Container className="max-w-xl">
                        <Heading>Purchase Receipt</Heading>
                        <OrderInformation product={product} order={order} downloadVerificationId={downloadVerificationId} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>

    )
}