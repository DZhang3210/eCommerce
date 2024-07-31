"use server"

import prisma from "@/lib/db"

export async function userOrderExists(email: string, productId: string) {
    return (await prisma.order.findFirst(
        { where: { user: { email }, productId }, select: { id: true } }
    )) != null
}