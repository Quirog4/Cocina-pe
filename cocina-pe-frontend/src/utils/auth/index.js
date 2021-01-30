export const expiroToken = () => {
  let data = JSON.parse(localStorage.getItem("authData"));
  if (data) {
    //console.log('data', data)
    const seconds = 60;
    const now = (Date.now() + seconds) / 1000;
    if (now > data.exp) {
        localStorage.setItem("authData", null);
        // window.location.href = "/";
        return true;
    }
    return false
  } else {
      return true;
  }
  
};