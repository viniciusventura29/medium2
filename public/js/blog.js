let blogID = decodeURI(location.pathname.split("/").pop());

let docRef = db.collection("blogs").doc(blogID);

docRef.get().then((doc) => {
  if (doc.exists) {
    setupBlog(doc.data());
  } else {
    location.replace("/");
  }
});

const setupBlog = (data) => {
  const banner = document.querySelector(".banner");
  const blogTitle = document.querySelector(".title");
  const titleTag = document.querySelector(".title");
  const publish = document.querySelector(".published");

  banner.style.backgroundImage = `url("${data.bannerImage}")`;

  titleTag.innerHTML += blogTitle.innerHTML = data.title;
  publish.innerHTML += data.publishedAt;

  const article = document.querySelector(".article");
  addArticle(article, data.article);

  const addArticle = (ele, data) => {
    data = data.split("\n").filter((item) => item.length);
    console.log(data);

    data.forEach((item) => {
      if (item[0] == "#") {
        let hCount = 0;
        let i = 0;
        while (item[i] == "#") {
          hcount++;
          i++;
        }
        let tag = `h${hCount}`;
        ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`;
      } else {
        ele.innerHTML += `<p>${item}</p>`;
      }
    });
  };
};
