import { connectToMongoDB } from "@/app/lib/mongodb";
import Brand from "@/app/models/Brand";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type ApiParams = {
    params: {
        id: string
    }
}

export async function GET(req: NextRequest, { params }: ApiParams) {

    connectToMongoDB().catch(err => NextResponse.json(err))

    try {
        const brand = await Brand.findOne({ _id: params.id })

        if (brand) {
            return NextResponse.json({
                success: true,
                brand
            })
        }
        else {
            return NextResponse.json({ error: "Brand does not exists" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function PUT(req: NextRequest, { params }: ApiParams) {

    connectToMongoDB().catch(err => NextResponse.json(err))

    const { name } = await req.json()

    try {
        const brand = await Brand.findOne({ _id: params.id })

        if (brand) {
            // Write code to update it
            brand.name = name;
           

            await brand.save();

            return NextResponse.json({
                success: true,
                brand
            })
        }
        else {
            return NextResponse.json({ error: "Brand does not exists" }, { status: 404 })
        }
    } catch (error) {
        if (error && error instanceof mongoose.Error.ValidationError) {
            for (let field in error.errors) {
                const msg = error.errors[field].message
                return NextResponse.json({ error: msg })
            }
        }
        else {
            return NextResponse.json(error)
        }
    }
}

export async function DELETE(req: NextRequest, { params }: ApiParams) {

    connectToMongoDB().catch(err => NextResponse.json(err))

    try {
        const brand = await Brand.findOneAndDelete({ _id: params.id })

        if (brand) {
            return NextResponse.json({
                success: true,
                brand
            })
        }
        else {
            return NextResponse.json({ error: "Brand doesn't exists" }, { status: 404 })
        }
    } catch (error) {
        return NextResponse.json(error)
    }
}