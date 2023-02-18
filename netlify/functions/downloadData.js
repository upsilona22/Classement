import axios from 'axios';

async function getUser() {
  try {
    const response = await axios.get('https://www.dropbox.com/s/lxvr2j4r51bi5xx/leaderboard.json?dl=0');

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log(await getUser());
