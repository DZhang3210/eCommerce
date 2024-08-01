import { Product } from '@prisma/client'
import { Body, Container, Head, Heading, Hr, Html, Preview, Tailwind } from '@react-email/components'
import OrderInformation from './_components/OrderInformation'
import React from 'react'

type OrderHistoryProps = {
    orders: {
        id: string,
        pricePaidInCents: number,
        createdAt: Date,
        downloadVerificationId: String
        product: {
            name: string,
            imagePath: string,
            description: string,
        }
    }[]
}

OrderHistory.PreviewProps = {
    orders: [
        {
            id: "kjinkoasd",
            createdAt: new Date(),
            pricePaidInCents: 100000,
            downloadVerificationId: "anjksdkna",
            product: {
                name: "Product name",
                description: "new product",
                imagePath: "/products/1fb37a07-4603-47ae-a35c-2fdf6071ca24-nyu-id.jpg"
            }
        },
        {
            id: "kjinkoasd",
            createdAt: new Date(),
            pricePaidInCents: 100000,
            downloadVerificationId: "anjksdkna",
            product: {
                name: "Product name",
                description: "new product",
                imagePath: "/products/1fb37a07-4603-47ae-a35c-2fdf6071ca24-nyu-id.jpg"
            }
        }
    ]
} satisfies OrderHistoryProps

export default function OrderHistory({ orders }: OrderHistoryProps) {
    return (
        <Html>
            <Preview>Order History & Downloads</Preview>
            <Tailwind>
                <Head />
                <Body className='font-sans bg-white'>
                    <Container className="max-w-xl">
                        <Heading>Purchase Receipt</Heading>
                        {orders.map((order, index) => (
                            <React.Fragment key={order.id}>
                                <OrderInformation
                                    key={order.id}
                                    product={order.product}
                                    order={order}
                                    downloadVerificationId={order.downloadVerificationId} />
                                {index < orders.length - 1 && <Hr />}
                            </React.Fragment>
                        ))}

                    </Container>
                </Body>
            </Tailwind>
        </Html>

    )
}