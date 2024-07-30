import PageHeader from '@/app/admin/_components/PageHeader'
import React from 'react'
import ProductForm from '../../_components/ProductForm'
import prisma from '@/lib/db'

const EditProductPage = async ({ params: { id } }:
    {
        params:
        {
            id: string
        }
    }
) => {
    const product = await prisma.product.findUnique({ where: { id } })
    return (
        <>
            <PageHeader>Add Product</PageHeader>
            <ProductForm product={product} />
        </>
    )
}

export default EditProductPage
