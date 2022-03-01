window.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  document.querySelector("#btnLoad")?.addEventListener('click', () => {
    fileLoad();
  });
  document.querySelector("#btnSave")?.addEventListener('click', () => {
    fileSave();
  });
}



function fileLoad() {
  window.alert("load");
}

function fileSave() {
  console.log("save");
}