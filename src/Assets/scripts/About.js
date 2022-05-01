async function getAbout() {
    let response = await fetch('../Json/about.json');
    let data = await response.json();
    console.log(data);
}