module.exports = () => {
  let allCookies = {};
  let userCookie = {};
  let rawCookie = "";

  try {
    allCookies = jsonFile.readFileSync('data/allCookies.json')
  } catch (err) {
    // get allCookies failed
  }

  try {
    userCookie = jsonFile.readFileSync('data/cookie.json')
  } catch (err) {
    // get cookie failed
  }

  try {
    rawCookie = jsonFile.readFileSync('data/rawCookie.json')
  } catch (err) {
    // get cookie failed
  }

  return {
    allCookies: () => allCookies,
    userCookie: () => userCookie,
    rawCookie: () => rawCookie,
    updateAllCookies: (v) => allCookies = v,
    updateUserCookie: (v) => userCookie = v,
  }
}