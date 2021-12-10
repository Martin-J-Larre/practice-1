const imagenes = document.querySelectorAll('.img-gallery');
const imgLight = document.querySelector('.cargar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const burger1 = document.querySelector('.burger');

// console.log(imagenes);
// console.log(imgLight);
// console.log(contenedorLight);

imagenes.forEach(item =>{
    item.addEventListener('click',()=>{

        aparecerImagen(item.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if (e.target !== imgLight) {
        contenedorLight.classList.toggle('show');
        imgLight.classList.toggle('show-imagen');
        burger1.style.opacity = '1';
    }
})

const aparecerImagen = (item)=>{
    imgLight.src = item;
    contenedorLight.classList.toggle('show');
    imgLight.classList.toggle('show-imagen');
    burger1.style.opacity = '0';
}