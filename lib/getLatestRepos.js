import axios from "axios";

const getLatestRepos = async (data, token) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername;

    // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    // console.log("TOKEN", token);

    let headers = {};
    if (token) {
      headers = {
        Authorization: `token ${token}`,
      };
    }

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      { headers }
    );

    let repos = res.data;

    // Sort by latest push time
    repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    // Get latest 6 repos
    let latestSixRepos = repos.splice(0, 4).concat(repos.slice(6, 8));

    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
