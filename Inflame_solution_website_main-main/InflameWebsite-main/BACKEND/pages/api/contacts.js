import { mongooseConnect } from "@/lib/mongoose";
import Contact from "@/models/contact";

export default async function handler(req, res) {
  await mongooseConnect();
  const { method } = req;

  if (method === "POST") {
    try {
      const { name, lname, email, company, phone, country, project, price, description } = req.body;

      if (!name || !email || !phone) {
        return res.status(400).json({ error: "Name, email, and phone are required." });
      }

      const contactDoc = await Contact.create({
        name,
        lname,
        email,
        company,
        phone,
        country,
        project,
        price,
        description,
      });

      res.status(201).json(contactDoc);
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}