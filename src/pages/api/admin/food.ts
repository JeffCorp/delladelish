import { MongoClient, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const client = new MongoClient(MONGODB_URI || "");
  await client.connect();
  const db = client.db("soupdelivery");
  const collection = db.collection("menu");

  switch (req.method) {
    case "GET":
      const foodItems = await collection.find().toArray();
      res.status(200).json(foodItems);
      break;

    case "POST":
      const { name, price } = req.body;
      const result = await collection.insertOne({ name, price });
      res.status(201).json({ success: true, id: result.insertedId });
      break;

    case "PUT":
      const { id, ...updateData } = req.body;
      await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      res.status(200).json({ success: true });
      break;

    case "DELETE":
      const { id: deleteId } = req.query;
      await collection.deleteOne({ _id: new ObjectId(deleteId as string) });
      res.status(200).json({ success: true });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  await client.close();
}
