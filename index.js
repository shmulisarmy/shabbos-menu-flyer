// document.querySelectorAll(".product").forEach((product) => {
//     product.addEventListener("dblclick", () => {
//         if (confirm("are you sure you want to hide this product?")) {
//             product.style.display = "none"
//         }
//     })
// })


function save_flyer(){
    const html = document.body.innerHTML;
    const list_of_saved = JSON.parse(localStorage.getItem('list_of_saved') || '[]');
    list_of_saved.push(html);
    localStorage.setItem('list_of_saved', JSON.stringify(list_of_saved));
}


function load_newest_version(){
    const list_of_saved = JSON.parse(localStorage.getItem('list_of_saved' || '[]'));
    if (true || confirm("there is a newer version of the flyer, do you want to load it?")) {
        document.body.innerHTML = list_of_saved[list_of_saved.length - 1];
    }
}


window.onbeforeprint = function() {
    document.body.classList.add('printing');
};

window.onafterprint = function() {
    document.body.classList.remove('printing');
};