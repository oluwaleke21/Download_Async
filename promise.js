const urlInput = document.getElementById("url");
const downloadButton = document.getElementById("download-btn");

function fetchFile(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url);
      const downloadFile = await res.blob();
      resolve(downloadFile);
    } catch (error) {
      reject(error);
    }
  });
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

downloadButton.addEventListener("click", () => {
  const url = urlInput.value;
  const filename = new Date().getTime().toString();

  fetchFile(url)
    .then((downloadFile) => {
      downloadBlob(downloadFile, filename);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
});
