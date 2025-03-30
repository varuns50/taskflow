import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Initialize DynamoDB Client
const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client);

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } } // Correct typing for Next.js dynamic routes
) {
  try {
    const userId = params.id || "1"; // Ensure `id` is always defined

    console.log(`Fetching user with ID: ${userId}`);

    const command = new GetCommand({
      TableName: "Users",
      Key: { id: userId }, // Ensure correct key structure
    });

    const response = await docClient.send(command);

    if (!response.Item) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(response.Item);
  } catch (error) {
    console.error("DynamoDB Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
