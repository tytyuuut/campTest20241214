// header引入
header =
/*html*/ `
<header class="header d-flex justify-content-between align-items-center" id="header">
        <article class="left-nav d-flex">
            <div class="logo"><img class="header-logo" src="assets/images/header/logo.png" width="154" height="106" alt="logo"></div>
            <h1 class="d-none">camping</h1>
        </article>
        <article class="right-nav">
            <ul class=" d-flex justify-content-between align-items-center">
                <li class="item">
                    <a href="">
                        <p>找營區</p>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <p>商品列表</p>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <p>社群討論區</p>
                    </a>
                </li>
                <li class="item">
                    <a href="">
                        <p>會員專區</p>
                    </a>
                </li>
            </ul>
        </article>
    </header>
`
// document.write(header);
document.currentScript.insertAdjacentHTML('beforebegin', header);