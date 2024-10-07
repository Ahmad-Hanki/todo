import { createNewData, getAllData } from "@/services/serviceOperations";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();

    if (!body || !body.title) {
      return NextResponse.json(
        { status: "error", error: "Title is required!" },
        { status: 400 }
      );
    }

    const data = await createNewData(body);

    if (!data || data.error) {
      return NextResponse.json(
        { status: "error", error: data.error || "Failed to create Todo" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { status: "success", message: "Todo added successfully", data },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};
export const GET = async () => {
  try {
    const todoList = await getAllData();
    if (!todoList) {
      return NextResponse.json(
        { status: "error", error: "Todos not found!" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { status: "success", data: todoList },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { status: "error", error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
};



