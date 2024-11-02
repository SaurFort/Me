import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET({ url }) {
    const limit = parseInt(url.searchParams.get('limit')) || 9;
    const sort = url.searchParams.get('sort') || 'idasc';
    const name = url.searchParams.get('name');
    const technologies = url.searchParams.get('technologies');
    const label = url.searchParams.get('label');
    const langs = url.searchParams.get('lang');

    const orderBy = (() => {
        switch(sort) {
            case 'iddesc':
                return { id: 'desc' };
            case 'dateasc':
                return { creationDate: 'asc' };
            case 'datedesc':
                return { creationDate: 'desc' };
            default:
                return { id: 'asc' };
        }
    })();

    const whereConditions = {
        ...(name && { name }),
        ...(technologies && { technologies: { contains: technologies } }),
        ...(label && { label }),
        ...(langs && { langs: { contains: langs } }),
    };

    const projects = await prisma.project.findMany({
        where: whereConditions,
        take: limit,
        orderBy,
    });

    return new Response(JSON.stringify(projects), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST({ request }) {
    const data = await request.json();

    const newProject = await prisma.project.create({
        data,
    });

    return new Response(JSON.stringify(newProject), {
        headers: { 'Content-Type': 'application/json' },
        status: 201,
    });
}

export async function DELETE({ request }) {
    const { id } = await request.json();

    await prisma.project.delete({
        where: { id },
    });

    return new Response(null, {
        status: 204,
    });
}