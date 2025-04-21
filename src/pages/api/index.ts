import axios from "axios";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const MONGODB_URI = process.env.MONGODB_URI;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const client = new MongoClient(MONGODB_URI || "");

async function connectToDatabase() {
  if (!client.connect()) await client.connect();
  return client.db("soupdelivery");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      if (req.query.action === "upload-food") {
        return handleUploadFood(req, res);
      } else if (req.query.action === "place-order") {
        return handlePlaceOrder(req, res);
      }
      break;
    case "GET":
      if (req.query.action === "get-menu") {
        return handleGetMenu(req, res);
      }
      break;
    default:
      res.setHeader("Allow", ["POST", "GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function handleUploadFood(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const { name, price } = req.body;

    const result = await db.collection("menu").insertOne({ name, price });

    res.status(201).json({ success: true, id: result.insertedId });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error: "Error uploading food item" });
  }
}

async function handleGetMenu(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const menu = await db.collection("menu").find().toArray();

    res.status(200).json({ success: true, menu });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching menu" });
  }
}

async function handlePlaceOrder(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const { selectedItem, quantity, deliveryTime, phoneNumber } = req.body;

    // Send message to Telegram
    const message = `New Order:\nItem: ${selectedItem}\nQuantity: ${quantity} liter(s)\nDelivery Time: ${deliveryTime}\nPhone: ${phoneNumber}`;
    const telegramResult = await sendTelegramMessage(message);

    if (!telegramResult.success) {
      console.error("Telegram message sending failed:", telegramResult.error);
    }

    // Save order to database
    const result = await db.collection("orders").insertOne({
      item: selectedItem,
      quantity,
      deliveryTime,
      phoneNumber,
      createdAt: new Date(),
    });

    res.status(201).json({ success: true, orderId: result.insertedId });
  } catch (error) {
    console.error("Error processing order:", error);

    res.status(500).json({ success: false, error: "Error processing order" });
  }
}

async function sendTelegramMessage(
  message: string
): Promise<{ success: boolean; error?: string }> {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    if (!TELEGRAM_CHAT_ID) {
      throw new Error(
        "TELEGRAM_CHAT_ID is not set in the environment variables"
      );
    }

    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
    });

    if (response.data.ok) {
      return { success: true };
    } else {
      throw new Error(response.data.description || "Unknown error");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Telegram API error:", error.response?.data);
      return {
        success: false,
        error: error.response?.data?.description || error.message,
      };
    } else {
      console.error("Error sending Telegram message:", error);
      return { success: false, error: "Unknown error occurred" };
    }
  }
}
