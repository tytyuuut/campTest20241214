// footerr引入
footer =
/*html*/ `
<footer>
        <div class="container footer-main">
            <hr>
            <article class="footer-logo">
                <img src="assets/images/footer/footer.png" alt="">
            </article>
            <ul class="footer-text">
                <li>
                    <a href="#">
                        <p>找營區</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>找營區細項</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>找營區細項</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>文章列表</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>文章細項</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>文章細項</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>商品列表</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>商品細項</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>商品細項</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>商品細項</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>社群討論區</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>社群細項</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>社群細項</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>會員專區</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>會員細項</p>
                    </a>
                    <a href="#" class="footer-item">
                        <p>會員細項</p>
                    </a>
                </li>
            </ul>
            <ul class="button-icon d-flex justify-content-between align-items-center">
                <li class="item flex align-items-center">
                    <img src="assets/images/footer/company.png">
                    <p class="title">公司信箱</p>
                    <p>123@gamil.com</p>
                </li>
                <li class="item flex align-items-center">
                    <img src="assets/images/footer/location.png">
                    <p class="title">公司地址</p>
                    <p>桃園市中壢區內定里</p>
                </li>
                <li class="item flex align-items-center">
                    <img src="assets/images/footer/tele.png">
                    <p class="title">公司電話</p>
                    <p>03-1234567</p>
                </li>
            </ul>
        </div>
        <div class="copyright">
            <p>Copyright©campimg<p>
        </div>
    </footer>
`
// document.write(footer);
document.currentScript.insertAdjacentHTML('beforebegin', footer);