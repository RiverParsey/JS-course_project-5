// lesson-5 Parser

// window.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body');
//   let textNodes = [];

//   function recursy(element) {
//     element.childNodes.forEach(node => {
//       if (node.nodeName.match(/^H\d/)) {
//         const obj = {
//           header: node.nodeName,
//           content: node.textContent
//         };
//         textNodes.push(obj);
//       } else {
//         recursy(node);
//       }
//     });
//   }

//   recursy(body);
  
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(textNodes)
//   })
//   .then(response => response.json())
//   .then(json => console.log(json));

// });







// lesson-4 FormData data sending

// window.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('form');

//   // XMLHttpRequest
//   function req(e) {
//     e.preventDefault();

//     let formData = new FormData(form);
//     formData.append('id', Math.random());


//     let obj = {};
//     formData.forEach((value, key) => {
//       obj[key] = value;
//     });
//     let json = JSON.stringify(obj);


//     const request = new XMLHttpRequest();
//     request.open('POST', 'url');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send(json);
//     request.addEventListener('readystatechange', function() {
//       if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);
//         console.log(data);
//       } else {
//         console.error('что то пошло не так')
//       }
//     });

//     this.remove();
//   }

//   document.querySelector('button').addEventListener('click', (e) => req(e), {'once': true});

//   // function createCards(data) {
//   //   data.forEach(item => {
//   //     let card = document.createElement('div');

//   //     card.classList.add('card');

//   //     let icon;
//   //     if (item.sex === 'male') {
//   //       icon = 'icons/mars.png';
//   //     } else {
//   //       icon = 'icons/female.png';
//   //     }

//   //     card.innerHTML = `
//   //       <img src="${item.photo}" alt="">
//   //       <div class="name">${item.name} ${item.surname}</div>
//   //       <div class="sex">
//   //         <img src="${icon}" alt="${item.sex}">
//   //       </div>
//   //       <div class="age">${item.age}</div>
//   //     `;
//   //     document.querySelector('.app').appendChild(card);
//   //   });
//   // }

// });







// lesson-3 fetch API and Axios

// window.addEventListener('DOMContentLoaded', () => {

//   function req() {

//     this.remove();

//     // fetch
//     // getResource('url')
//     //   .then(data => createCards(data))
//     //   .catch(err => console.error(err));


//     // axios
//     getResource('url')
//     .then(data => createCards(data.data))
//     .catch(err => console.error(err));
//   }

//   document.querySelector('button').addEventListener('click', req, {'once': true});
  
//   // fetch
//   // async function getResource(url) {
//   //   const res = await fetch(`${url}`);

//   //   if (!res.ok) {
//   //     throw new Error(`could not fetch ${url}, status: ${res.status}`);
//   //   }

//   //   return await res.json();
//   // }

//   // axios
//   async function getResource(url) {
//     const res = await axios(`${url}`);

//     if (res.status !== 200) {
//       throw new Error(`could not fetch ${url}, status: ${res.status}`);
//     }

//     return res;
//   }

//   function createCards(data) {
//     data.forEach(item => {
//       let card = document.createElement('div');

//       card.classList.add('card');

//       let icon;
//       if (item.sex === 'male') {
//         icon = 'icons/mars.png';
//       } else {
//         icon = 'icons/female.png';
//       }

//       card.innerHTML = `
//         <img src="${item.photo}" alt="">
//         <div class="name">${item.name} ${item.surname}</div>
//         <div class="sex">
//           <img src="${icon}" alt="${item.sex}">
//         </div>
//         <div class="age">${item.age}</div>
//       `;
//       document.querySelector('.app').appendChild(card);
//     });
//   }

// });







// lesson-2 request with using XMLHttpRequest

// window.addEventListener('DOMContentLoaded', () => {

//   function req() {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'url');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();
//     request.addEventListener('readystatechange', function() {
//       if (request.readyState === 4 && request.status == 200) {
//         let data = JSON.parse(request.response);
//         console.log(data);
//         createCards(data);
//       } else {
//         console.error('что то пошло не так')
//       }
//     });

//     this.remove();
//   }

//   document.querySelector('button').addEventListener('click', req, {'once': true});

//   function createCards(data) {
//     data.forEach(item => {
//       let card = document.createElement('div');

//       card.classList.add('card');

//       let icon;
//       if (item.sex === 'male') {
//         icon = 'icons/mars.png';
//       } else {
//         icon = 'icons/female.png';
//       }

//       card.innerHTML = `
//         <img src="${item.photo}" alt="">
//         <div class="name">${item.name} ${item.surname}</div>
//         <div class="sex">
//           <img src="${icon}" alt="${item.sex}">
//         </div>
//         <div class="age">${item.age}</div>
//       `;
//       document.querySelector('.app').appendChild(card);
//     });
//   }

// });