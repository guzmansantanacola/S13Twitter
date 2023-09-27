let tweets = document.getElementsByClassName("comentarios")[0]; 
fetch("https://my-json-server.typicode.com/guzmansantanacola/twitterjson/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let htmlContentToAppend = "";
    data.forEach((elm) => {
      htmlContentToAppend +=
        `<div class="content">
             <div class="imagenes">
                <img src="https://xsgames.co/randomusers/avatar.php?g=pixel">
              </div>
              <div class="names">
                <p class="full-name">${elm.name}</p> 
                <p class="user-name">@fullname</p>
                <p class="time"> 27mins</p>
              </div>
            </div>
            <div class="tweet-content">
              <p>${elm.text}</p>
            </div>
            <div class="tweet-icons">
              <i class="fa fa-comment" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-retweet" aria-hidden="true"></i>
            </div>
        `;
    });
    tweets.innerHTML = htmlContentToAppend;
  });