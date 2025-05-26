let ism = document.querySelector('.name')
console.log(ism);
let familiya = document.querySelector('.surname')
console.log(familiya);
let age = document.querySelector('.age')
console.log(age);


let IsminiKirgiz = prompt('ismin kirgiz')
let yoshinKirgiz = prompt('yoshini kirgiz')
let famileniKirgiz = prompt('familiyeni kirgiz')

let kattaKichik = +prompt('katta qilmoqchi bosangiz 1 kichik qilmoqchi bolsangiz 2 raqamin kriting')
if (kattaKichik === 1) {
    ism.innerHTML = ` ISM : ${IsminiKirgiz.toUpperCase()} `
    familiya.innerHTML = `Familiya: ${famileniKirgiz.toUpperCase()}`
    age.innerHTML = `Yosh: ${yoshinKirgiz}`
} else if (kattaKichik === 2) {
    ism.innerHTML = ` ISM : ${IsminiKirgiz} `
    familiya.innerHTML = `Familiya: ${famileniKirgiz}`
    age.innerHTML = `Yosh: ${yoshinKirgiz}`
} else {
    alert('1 yoki 2 raqamin kirgiz ')
}
