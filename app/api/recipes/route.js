import { fetchRecipes } from "@/app/store/features/vegetarianSlice";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    // let recipes = await fetchRecipes();
    return NextResponse.json({ hello: "hello" });
  } catch (error) {
    console.log(error);
  }
}
