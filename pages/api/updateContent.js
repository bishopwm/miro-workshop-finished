import axios from "axios";
import { board_id } from "../../constants";

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const item_id = body.item_id;
  const content = body.content;
  let item_type;

  switch (body.item_type) {
    case "shape":
      item_type = "shapes";
      break;
    case "sticky_note":
      item_type = "sticky_notes";
      break;
    case "text":
      item_type = "texts";
      break;
    default:
      item_type = "texts";
  }

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${req.cookies.miro_access_token}`,
  };

  axios
    .patch(
      `https://api.miro.com/v2/boards/${board_id}/${item_type}/${item_id}`,
      {
        data: { content: content },
      },
      {
        headers: headers,
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
