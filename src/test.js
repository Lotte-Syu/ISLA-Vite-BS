/*
# 購物車頁面手機版 footer消失，小筆記

1. 取得目前頁面網址 location.pathname
2. 判斷是否是購物車頁 (cart.html)
3. 判斷是否是手機版 (window.innerWidth <= 768)。
4. 如果是購物車頁手機版：
    - footer不載入，order-summary加order-summary-mobile class
5. 其他情況（非購物車頁）：
    - 正常載入 footer。
*/

import "../scss/main.scss";
// 載入 header
import loadTemplate from "./load-template";
loadTemplate("#header", "../_components/header.html");

const currentPath = location.pathname;

const isMobile = window.innerWidth <= 996;
const isCartPage = currentPath.includes('cart-pages/cart'); 
const orderSummary = document.querySelector(".order-summary");

if (isCartPage && isMobile) {
  // 購物車頁＋手機版
  if (orderSummary) {
    orderSummary.classList.add("order-summary-mobile"); 
  }
  // 不載入 footer，不做事情
} else {
  // 其他情況，一律載入 footer
  loadTemplate("#footer", "../_components/footer.html");
}

