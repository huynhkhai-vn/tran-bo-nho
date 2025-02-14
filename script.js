document.getElementById("startButton").addEventListener("click", function () {
  // Phát nhạc
  let audio = document.getElementById("loveSong");
  audio.play();

  // Tạo hiệu ứng tràn ngập màn hình
  let interval = setInterval(createMemoryBox, 300);

  function createMemoryBox() {
    let memoryBox = document.createElement("div");
    memoryBox.classList.add("memory-box");
    memoryBox.innerHTML =
      "<strong>Tràn ngập bộ nhớ</strong><br>Nhớ nhớ nhớ em!";

    // Vị trí ngẫu nhiên trên màn hình
    memoryBox.style.position = "absolute";
    memoryBox.style.left = Math.random() * window.innerWidth + "px";
    memoryBox.style.top = Math.random() * window.innerHeight + "px";

    // Style cho box
    memoryBox.style.backgroundColor = "pink";
    memoryBox.style.padding = "10px";
    memoryBox.style.borderRadius = "10px";
    memoryBox.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";

    // Thêm vào body
    document.body.appendChild(memoryBox);
  }
});
