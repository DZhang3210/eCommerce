'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { formatCurrency } from '@/lib/formatters'
import React, { useState } from 'react'
import { addProduct } from '../../_actions/products'

const ProductForm = () => {
    const [priceInCents, setPriceInCents] = useState<number>()
    return (
        <form className='space-y-8' action={addProduct}>
            <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
            </div>
            <div>
                <Label htmlFor="priceInCents">Price in Cents</Label>
                <Input type="number" id="priceInCents" name="priceInCents" required value={priceInCents} onChange={e => setPriceInCents(Number(e.target.value))} />
            </div>
            <div className='text-muted-foreground'>
                {formatCurrency((priceInCents || 0) / 100)}
            </div>
            <div className='space-y-2'>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="description" required />
            </div>
            <div className='space-y-2'>
                <Label htmlFor="file">File</Label>
                <Input type="file" id="file" name="file" required />
            </div>
            <div className='space-y-2'>
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" name="image" required />
            </div>
            <Button type="submit">Save</Button>
        </form>
    )
}

export default ProductForm
