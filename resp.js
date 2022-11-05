window.addEventListener("DOMContentLoaded", () => {
const wifi = new WiFi(".wifi");
const connectBtn = document.getElementById("connect");
let timeout = null;
connectBtn?.addEventListener("click", () => {
  wifi.connect();
  connectBtn.disabled = true;
  connectBtn.innerText = "Connecting…";
   // button reset
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    connectBtn.disabled = false;
    connectBtn.innerText = "Connect";
  }, 4100);
});
  });
   class WiFi {
constructor(sel) {
  this.el = document.querySelector(sel);
  this.isConnecting = false;
  const anim = this.el?.querySelector("[data-anim]");
  anim?.addEventListener("animationend", this.reset.bind(this));
}
connect() {
  if (!this.isConnecting) {
    this.isConnecting = true;
    this.el.classList.add("wifi--animated");
  }
}
reset() {
  if (this.isConnecting) {
    this.isConnecting = false;
    this.el.classList.remove("wifi--animated");
  }
}}
      
      

      