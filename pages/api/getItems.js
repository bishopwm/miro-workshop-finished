import axios from "axios";

export default function handler(req, res) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${req.cookies.miro_access_token}`,
  };

  axios
    .get(
      `https://api.miro.com/v2/boards/${process.env.boardId}/items?limit=50&type=sticky_note&type=shape&type=text`,
      {
        headers: headers,
      }
    )
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
