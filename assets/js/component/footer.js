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
                </li>
                <li>
                    <a href="#">
                        <p>商品列表</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>社群討論區</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <p>會員專區</p>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
`
// document.write(footer);
document.currentScript.insertAdjacentHTML('beforebegin', footer);