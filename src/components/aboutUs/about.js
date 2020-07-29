import React from 'react';

export default function AboutUs(props) {
  return (
    <div>
      <div class="bg-dark">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4"><span id="abouttitle1">About us page</span></h1>
              <p class="lead text-muted mb-0">DAAY-mall is an online platform for stores owners to display and sell their products for users all around the world in an easy, efficient and secure process. The website earns client’s trust with its robust system that verifies stores and a direct customers’ service that have a live chat with website admins offering a continuous feedback..</p>
            </div>
            <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" /></div>
          </div>
        </div>
      </div>

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light"><span id="abouttitle2">Our Vision</span></h2>
              <p class="font-italic text-muted mb-4">to give our clients one palce for shoping insted of every mall have its own app and to give the vendors one place to sell on it which mean more clients to see their products.</p><a href="https://github.com/44-41-41-59/DAAY-mall-backend/blob/development/requirements.md#our-vision" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
            <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light"><span id="abouttitle3">Tools Used</span></h2>
              <p class="font-italic text-muted mb-4"><ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Socket.io</li>
              </ul></p>
              <a href="https://github.com/44-41-41-59/DAAY-mall-backend/blob/development/README.md#tools-used" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div>


      <div class="bg-dark py-5">
        <div class="row mb-4">
          <div class="col-lg-5">
            <div class="ourTeamPos">
              <h2 class="display-4 font-weight-light"><span id="abouttitle4">Our team</span></h2>
              <p class="font-italic text-muted">Creative software developers who can work in a team to reach any goal.</p>
            </div>
          </div>
        </div>
      </div>


      <div class="personPostion">
        <div class="row text-center">
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://ca.slack-edge.com/TNGRRLUMA-UTDNLE012-d5ed443e42ae-512" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-2" class="nameSize">Yazan Alaiwah</h5><span class="small text-uppercase text-muted">Team Leader - Software Developer</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="https://www.facebook.com/yazan.alaiwah.9" class="social-link"><img src="https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-25.jpg" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://github.com/YazanAlaiwah" class="social-link"><img src="data:image/png;base64,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" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/yazan-alaiwah/" class="social-link"><img src="https://www.iconarchive.com/download/i75878/martz90/circle/linkedin.ico" class="Socialicons"/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://ca.slack-edge.com/TNGRRLUMA-UTGCLHT6J-d15e1df263fe-512" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-2" class="nameSize">Diana Al Azzam</h5><span class="small text-uppercase text-muted">Team member - Software Developer</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="https://www.facebook.com/dianaKazzam" class="social-link"><img src="https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-25.jpg" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://github.com/diana96alazzam" class="social-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8RBQUAAAANAAAKAADNyspEPj4MAADo5+cGAAD6+voaEREVCQnh4ODHxcW0srJjX192c3OWk5Pv7u7Qz889ODhKRUX19fVrZ2fd3NzX1tZOSUmioKB7eHhYVFSFgoIsJSW9u7uOi4tdWVmysbGpp6c3MTFwbW0iGxuDgYGUkpIwKio6NDQiGBidmprN7TLbAAAG2UlEQVR4nO2da3uiMBBGYWK9tuD9stSqbdVuu+v//3kL2ipIkOCGd9BnztfayJGQTJJJcBxBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEKpDu07b1aTUr5istjQt9Rsu8kyKiHqz0r5guA3LV/RQ2hfkMSbXdUPJl1+lFO+NQr3wG6hXSvEGTPbfH10C9drWSx+8EB2KV2S9cEO87yuIHB+Hlgv3KVa67cJNeT1dg1ujndWy5z/1Y29ot2xzgphheBkWm7xJPVn0i72iCxH/maPrCGwV3HQTgmwP4lPyMkLFsZ2Cm5Qq+clOyQXxzq/DpT82ym1SK1WwZ6PgwjynDK1U1Mmjptzn/y/3Cl7TV+JSV/PB9uDJ89efi952Ou12u9Ppdr7YrX1v1tRFfBtdsa9ly2iZay7Fpc/4R2ar/jxYUjYf9V5/lYiIutpS51i1S9dyemSent8OFjWl+9weVTt8JNg1v//rU18oT/CtN1Q0iP7o1YkoW+38f0LJfdzyS1umvvJzGe77jGaQavDzIJqGT+VHrUqG0wwJmj8X9js49keZRbIY/s7SMK+eSVS6I/wpkact7V9zo66DKfR+BxryxDQZ7V4phjxxaRtmyDbIH2U1DLZhGx/q448yDHkCb8cZwgx5HkMnNcgvi9aSSzAzqrEM20SU4yxAhs38SymJjNjbuqH96WZDBqCWhm9ppg5rS5kWLl6AUduCQ1A7TVOaoo8X9JGCYWQKb08HoN7+B6qjDUEdRUxxjRWEhaRH0COoMdzQpT5SEDi8P6Kgoc2WwdCld5wgbv4iYWhpedIEbF94UsT1iaBxYcoQ12G0sL390RC2esHRkkaoBspwzWSIm5HqsRmuQIZL/SIfwBC1BAUeVsQMQXPfTa5K6tb+Ygy5mlJcaLpiM0RFNZpcKJghJtEUNNOtNcRMSMEnMGKGmBWMgNEQk3XC1uHDYm+2Dt9mGvIleAb4B2pLhCFqxUkHZkoxld6NBGLIF7S5oMVS/HR33HAAMEyn6CMNEYEpryFiHkMMxbD6hg9339Lw9hbl7qs+wNvjAwQZp9pQcSnn2KLRwRjyjQ9bmJyT+x/jA/PZUoa/IYbQhLYzQ8wqMOeMMGbvDGPYBhkecnaIDQUR5Fw/RKVDMyWbANNNgNvyzgxRKUNcM6atDUgQmKSfBJh/yZRQA8xrY8pNhCzLfMOSMwTLF4rgWLvArDsdYVjpBifr4yO3GmR4HwM+hII+hRFthR3p0xtYED2GUqBxUwJojwGvo3u+gPsPtxyCYXuKehRpxCIYze+D9uMrxGqFFg+i2GLcre6sAIotvjMjIrzSn0V6ZLyDEbOrDr0qIDhiewZ/GPwpUVHxHSEc53dpNZWQWw4v4bVKuY2KRsyP4IlJL/OkteshtpOFtPz6slxViaYMsfZF/I69+1gjqpdzCLqWwWdvu+0t1l5es+1v7PQcipZToJ/jvB2PUw3WOdmdDwH9Z2VVrfB7XsEHlPs/kVl0ymjefofmbkl09Sba8As2U5ZTTI73RdFX7osQZrsRFTid9VhyyHjh80Qww9jpzGSyMWfgvQb7em10N1v7j3a361mT7UCo+Cn3KnkWcjaD4Xq+ecxXVMHLYj18YrTbEx8mFdl8lJ/IWNvwvZ8jQXxV1HwHWdvNb1oZ5gn1xKaAzY80Mpo3ZjxSL0lsWZS+zP5lZhQBYI9luUD8ZCjDbeNvZjFOZULs+Cw3mbwfyHQNjoKK3MT4U2WUNKB7tYAOztcdndE5tYwm9bRjGqOCUg4NiCex5//u5gvFrXpVqmm8njZyV4PMMzZqS67XHaVpNU43cZnzwxdYnGI6kVxH/DyFvPWSP+Zjfp6zLfXEj6Kji49P+8KbO1KGPG930JLYT0IfF8K3Itlv4EySyyTyTOjC2qxZyHYAs4/CkGQfoKib1aQWWehXCjr1lMNZshBRXz/zUORMetWpTmOarn2KaJ6+A+1CGf2qU5m4LSKV8RU6Pvb8U6MzGD6/FJs6rZihLhprRJNJf8fd3vRtQ8Wn2ipmmHW25/frqa6ZLa2a4YQa+Rd904b2z8KqnKH1jK/qGTpZL9e6H8OJsqpYQUPNu0LvzdBp2ryLlTQ8f2fvHRpGh+/ZWrmvqqHz8GEpc6+yho6zIyvxTYUNnXZfXftCxxsxDFl104OJKAi/H8PwRv6s2x/pzN/fCuSdVN5wT3Po+b7/7nvD2X4w3G+YV97bMDzHdOXpdg2LvIhVDKvJ/RvuxFAMK48YJgwfxbCKiKEYVp/7NywUtd2kodxDMaw+hQzdWzR8pVZELZfwM/T3Fg3703oQjPfUs4n+HIxH89IM/wGarnPZVXi17AAAAABJRU5ErkJggg==" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/diana-al-azzam-741862b0/" class="social-link"><img src="https://www.iconarchive.com/download/i75878/martz90/circle/linkedin.ico" class="Socialicons"/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://ca.slack-edge.com/TNGRRLUMA-UT2N6JUHH-9a369b908628-512" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-2" class="nameSize">Anolla</h5><span class="small text-uppercase text-muted">Team Member - Software Developer</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="https://www.facebook.com/anolla.haddad" class="social-link"><img src="https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-25.jpg" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://github.com/Anolla" class="social-link"><img src="data:image/png;base64,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" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/anolla-haddad/" class="social-link"><img src="https://www.iconarchive.com/download/i75878/martz90/circle/linkedin.ico" class="Socialicons"/></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img src="https://ca.slack-edge.com/TNGRRLUMA-UTGCM6L6A-68a7c3b1b6eb-512" alt="" width="200" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
              <h5 class="mb-2" class="nameSize">Ahmed Abu Samaan</h5><span class="small text-uppercase text-muted">Team Member - Software Developer</span>
              <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item"><a href="https://www.facebook.com/ahmed.abusamaan/" class="social-link"><img src="https://icon-library.com/images/facebook-icon-50x50/facebook-icon-50x50-25.jpg" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://github.com/Ahmed199764" class="social-link"><img src="data:image/png;base64,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" class="Socialicons"/></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/in/ahmed-abu-samaan-6424831a1/" class="social-link"><img src="https://www.iconarchive.com/download/i75878/martz90/circle/linkedin.ico" class="Socialicons"/></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
}