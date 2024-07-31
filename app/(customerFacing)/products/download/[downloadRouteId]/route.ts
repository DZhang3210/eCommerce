import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import fs from 'fs/promises'


export async function GET(req: NextRequest, { params: { downloadRouteId } }: { params: { downloadRouteId: string } }) {
    const data = await prisma.downloadVerification.findUnique({
        where: {
            id: downloadRouteId,
            expiresAt: { gt: new Date() }
        },
        select: {
            product: {
                select: { filePath: true, name: true }
            }
        }
    })
    console.log(data)

    if (data == null) {
        return NextResponse.redirect(new URL("/products/download/expired", req.url))
    }

    const { size } = await fs.stat(data.product.filePath)
    const file = await fs.readFile(data.product.filePath)
    const extension = data.product.filePath.split(".").pop()
    return new NextResponse(
        file, {
        headers: {
            "Content-Disposition": `attatchment; filename ="${data.product.name}.${extension}"`,
            "Content-Length": size.toString()

        }
    }
    )
}