const xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.dropbox.com/s/lxvr2j4r51bi5xx/leaderboard.json?dl=0");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
