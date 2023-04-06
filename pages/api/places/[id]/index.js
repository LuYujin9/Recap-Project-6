import Place from "../../../../db/models/Place.js";
import dbConnect from "../../../../db/connect.js";
import { useRouter } from "next/router.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(place);
  }

  if (request.method === "PUT") {
    const placeUpdate = await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(placeUpdate);
  }

  if (request.method === "DELETE") {
    const placeDelete = await Place.findByIdAndDelete(id);
    response.status(200).json({ status: "Place successfully deleted." });
  }
}
