const REPO = "The-DigitalAcademy/shaper-elearning-content";

const params = new URLSearchParams(location.search);
const collection = params.get("collection");
const slug = params.get("slug");
const field = params.get("field");

const url = `https://raw.githubusercontent.com/${REPO}/main/content/${collection}/${slug}.md`;
fetch(url, {
  headers: {
    Authorization:
      "token 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",
  },
})
  .then((res) => res.text())
  .then((text) => {
    const parsedData = jsyaml.loadAll(text);
    if (parsedData.length) {
      document.documentElement.innerHTML = parsedData[0][field].code;
    }
  })
  .catch((err) => console.log(err));
