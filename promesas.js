
























// FETCH

// const url = "https://jsonplaceholder.typicode.com/posts/"

// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data))


// const findPostById = async(id) => {
//     try {
//         const res = await fetch(url + id)
//         const data = await res.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// findPostById(5)













// const posts = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//   },
// ];

// const traerDatos = (id) => {
//   const res = posts.find((item) => item.id === id);

//   res ? console.log(res) : console.log("No hay id numero", id);
// };
// traerDatos(2);








// const findPostById = (id, callback) => {
//     const post = posts.find((item) => item.id === id)

//     callback(post);
// };

//   findPostById( 1, (post) => {
//     console.log(post);
//   })
