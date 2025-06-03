export default function status(request, response) {
  response
    .status(200)
    .json({ status: 200, message: "test response status OK!" });
}
