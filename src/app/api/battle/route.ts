import { NextRequest, NextResponse } from "next/server";
import { battle } from "@/lib/battle";

let hero: { name: string; type: string };
let villain: { name: string; type: string };

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  hero = { name: searchParams.get("hero") ?? "", type: "hero" };
  villain = { name: searchParams.get("villain") ?? "", type: "villain" };

  const result = battle(hero, villain);
  return NextResponse.json(result);
}
