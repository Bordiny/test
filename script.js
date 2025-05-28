//?btn settigns
let settbtn = document.querySelector(".sett-btn"),
    sett = document.querySelector(".settings"),
    spans = document.querySelectorAll(".skills .skill-box .skill-progress span")
settbtn.addEventListener("click", (() => {
        settbtn.firstElementChild.classList.toggle("fa-spin")
        sett.classList.toggle("open")
    }))
    // !=================================================
    //?select color

let aboutImg = document.querySelector(".aboutimg")
let lis = document.querySelectorAll(".settings li");
lis.forEach(((li) => {
    li.addEventListener("click", ((e) => {
        document.documentElement.style.setProperty("--main", e.target.dataset.color)
        localStorage.setItem("color", document.documentElement.style.getPropertyValue("--main"));
        lis.forEach(((i) => {
            i.classList.remove("active")
        }))
        li.classList.add("active")
            //?change about wallpaper
        let chAbout = document.documentElement.style.getPropertyValue("--main")
        if (chAbout) {
            aboutImg.setAttribute("src", `imgs/${chAbout.slice(1,)}.svg`)
            console.log(aboutImg.getAttribute("src"));
        }
        //?skills progress
        spans.forEach(((e) => {
            e.style.background = localStorage.getItem("color")
        }))
    }))
}))

aboutImg.setAttribute("src", `imgs/${localStorage.getItem("color").slice(1,)}.svg`)
document.documentElement.style.setProperty("--main", localStorage.getItem("color"))
lis.forEach(((e) => {

    if (localStorage.getItem("color") == e.dataset.color) {
        e.classList.add("active")
    }
}))

//?show bulltes
let bullbtns = document.querySelectorAll(".bull-box .bull-btns button")
bullbtns.forEach(((bull) => {
        bull.addEventListener("click", ((e) => {
            bullbtns.forEach(e => { e.classList.remove("active") })
                // console.log(e.target.dataset.bull);
            if (e.target.dataset.bull == "no") {
                bull.classList.add("active")
                document.querySelector(".bulltes").style.display = "none"
            } else {
                bull.classList.add("active")
                document.querySelector(".bulltes").style.display = "block"
            }
        }))
    }))
    //?rest
document.querySelector(".reset-sett").addEventListener("click", ((e) => {
        localStorage.clear()
        window.location.reload()
    }))
    // !=================================================
let bgBtns = document.querySelectorAll(".bg-btns button")
let backOption = true;
bgBtns.forEach(((b) => {
    b.addEventListener("click", ((e) => {
        bgBtns.forEach(((d) => {
            d.classList.remove("active")
        }))
        b.classList.add("active")
        if (b.dataset.bg == "yes") {
            backOption = true;
            bgRandom()
            localStorage.setItem("random", true)
        } else {
            backOption == false
            clearInterval(randBg)
            localStorage.setItem("random", false)
        }
        console.log(localStorage.getItem("random"));
    }))
}))

// !=================================================
//?change backgroundimge

let imgs = ["one", "two", "three", "four", "five"]
let setImg = document.querySelector(".landing-page")
let randBg;

function bgRandom() {
    if (backOption == true) {
        randBg = setInterval(() => {
            let test = imgs[parseInt(Math.random() * imgs.length)]
            setImg.style.backgroundImage = 'url("./imgs/' + test + '.jpg")';
        }, 60000)
    }
}
bgRandom()
    // if (!localStorage.getItem("random") == null) {
    //     if (localStorage.getItem("random") == true) {
    //         backOption = true

//     } else {
//         backOption = false;
//         clearInterval(randBg)

//     }
// }
// !=========================================================================
//?skills
window.onscroll = () => {

        sett.classList.remove("open")
        spans.forEach(((s) => {
            s.textContent = s.dataset.prog + "%"

            if (window.scrollY > 600) s.style.width = s.dataset.prog + "%";
        }))
    }
    //!====================================================================
    //?gallery
let gallImgs = document.querySelectorAll(".gallery div img")


gallImgs.forEach(e => {
        e.addEventListener("click", _ => {
            let overlay = document.createElement("div")
            let overCont = document.createElement("div")
            overCont.className = "overCont"
            overlay.appendChild(overCont)
            overlay.classList.add("overlay")
            document.body.appendChild(overlay)
            if (e.alt != "") {
                let paraOver = document.createElement("p")
                paraOver.textContent = e.alt
                overCont.appendChild(paraOver)
            } else {
                let paraOver = document.createElement("p")
                paraOver.textContent = "Image"
                overCont.appendChild(paraOver)
            }
            let overImg = document.createElement("img")
            overImg.src = e.src
            overCont.appendChild(overImg)
            let closeImg = document.createElement("div")
            closeImg.className = "closeImg"
            closeImg.textContent = "x"
            overCont.appendChild(closeImg)
            overlay.addEventListener("click", e => {
                console.log(e.target.parentElement);
                if (e.target.parentElement != overCont && e.target.parentElement != overlay) {
                    overlay.remove()
                }
            })
            closeImg.addEventListener("click", _ => {
                overlay.remove()
            })
        })
    })
    // !===========================================================================
let bulltes = document.querySelectorAll(".bulltes .bull")
bulltes.forEach(((e) => {
    e.addEventListener("click", _ => {
        document.querySelector("." + e.dataset.bull).scrollIntoView({ behavior: "smooth" })

    })
}))
let links = document.querySelectorAll(".header ul li a")
links.forEach(((e) => {
    e.addEventListener("click", l => {
        l.preventDefault()
        console.log(e);

        document.querySelector("." + e.dataset.bull).scrollIntoView({ behavior: "smooth" })

    })
}))