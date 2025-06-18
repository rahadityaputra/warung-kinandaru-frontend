import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api/products');
  const posts = await res.json();

  return NextResponse.json(posts); // Mengembalikan data JSON
}

export async function POST(request: Request) {
  const body = await request.json();
  // Lakukan sesuatu dengan body (misalnya, simpan ke database)
  console.log('Received data for POST:', body);

  return NextResponse.json({ message: 'Post created successfully', data: body }, { status: 201 });
}
