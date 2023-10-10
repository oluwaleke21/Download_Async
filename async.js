const urlInput = document.getElementById("url");
const downloadButton = document.getElementById("download-btn");

downloadButton.addEventListener("click", handleDownload);

async function handleDownload() {
  try {
    const res = await fetch(urlInput.value);
    const downloadFile = await res.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(downloadFile);
    link.download = new Date().getTime().toString();
    link.click();
  } catch (error) {
    console.error("unable to download, it could be:", error);
  }
}
