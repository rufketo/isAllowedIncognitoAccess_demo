async function load() {
  document.getElementById("output").innerHTML = (
    `<table>` +
    `<tr><td>extension.inIncognitoContext:</td><td>${browser.extension.inIncognitoContext}</td></tr>` +
    `<tr><td>extension.isAllowedIncognitoAccess():</td><td>${await browser.extension.isAllowedIncognitoAccess()}</td></tr>` +
    `</table>`
  )
}
load()
