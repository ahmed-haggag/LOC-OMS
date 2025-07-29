import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.WOOCOMMERCE_API_URL!;
  const key = process.env.WOOCOMMERCE_API_KEY!;
  const secret = process.env.WOOCOMMERCE_API_SECRET!;
  const auth = Buffer.from(`${key}:${secret}`).toString("base64");

  const res = await fetch(`${url}?per_page=20`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return NextResponse.json(data);
}
