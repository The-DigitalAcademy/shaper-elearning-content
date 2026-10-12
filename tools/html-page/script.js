const REPO = "The-DigitalAcademy/shaper-elearning-content";

const params = new URLSearchParams(location.search);
const collection = params.get("collection");
const slug = params.get("slug");
const field = params.get("field");

const url = `https://raw.githubusercontent.com/${REPO}/main/content/${collection}/${slug}.md`;
fetch(url)
  .then((res) => res.text())
  .then((text) => {
    const parsedData = jsyaml.loadAll(text);
    if (parsedData.length) {
      document.documentElement.innerHTML = parsedData[0][field].code;
    }
  })
  .catch((err) => console.log(err));
