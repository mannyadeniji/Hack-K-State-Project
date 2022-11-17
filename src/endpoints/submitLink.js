function submitLink(req, res) {
  console.log("A link was submitted");
  console.log(req.body.link);
  var link = req.body.link;

  if (IsValidURL(link)) {
    res.statusCode = 302;
    /**res.setHeader("ContentType, ")
     * First parameter ==>name of the header in the response object
     * Second Parameter is the value of the name  */
    res.setHeader("Location", link);
    res.end();
  } else {
    console.log("Invalid Link");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
}

function IsValidURL(url) {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(url);
}

module.exports = submitLink;

//Won't be able to tell if the site it takes it to has valid text input or not
