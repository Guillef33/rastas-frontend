import React from "react";

import noProfile from "../assets/no-profile-img.jpg";

const harcodeUsers = [
  {
    id: 1,
    name: "Gustavo Lopez",
    username: "Gusta7",
    password: "1234",
    email: "gustavo-lopez@independiente.com",
    address: {
      street: "Av. Belgrano 2230",
      suite: "Depto 15 A",
      city: "Avellaneda",
      zipcode: "0123",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "+54 11 67062068",
    website: "independiente.com",
    company: {
      name: "Futbol Club Independiente",
      apodo: "Rey de copas",
    },
    image: { noProfile },
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, dolor id molestie malesuada, nunc risus feugiat enim, vel rutrum lectus tortor ut ipsum. Pellentesque magna ligula, malesuada eget tristique semper, consequat eu leo. Fusce accumsan tellus odio. Proin mattis venenatis ex et auctor. Morbi vitae ante urna. Phasellus venenatis justo libero, in efficitur lacus imperdiet non. Nunc sem ligula, lobortis ultricies urna nec, semper cursus velit. In a auctor nisi. Etiam libero lacus, laoreet in posuere eu, sollicitudin et leo. Sed et ligula risus. Nulla commodo suscipit massa, vel sodales mi iaculis vitae. Aenean rutrum, lectus vitae ultricies finibus, enim sapien condimentum nisl, venenatis dignissim tortor arcu vitae mauris. Vivamus condimentum ullamcorper sem, at elementum tellus molestie a. ",
  },
  {
    id: 2,
    name: "Cacho Garay",
    username: "Cachito2",
    password: "1234",
    email: "gustavo-lopez@independiente.com",
    address: {
      street: "Av. Belgrano 2230",
      suite: "Depto 15 A",
      city: "Avellaneda",
      zipcode: "0123",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "+54 11 67062068",
    website: "independiente.com",
    company: {
      name: "Futbol Club Independiente",
      apodo: "Rey de copas",
    },
    image: { noProfile },
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat, dolor id molestie malesuada, nunc risus feugiat enim, vel rutrum lectus tortor ut ipsum. Pellentesque magna ligula, malesuada eget tristique semper, consequat eu leo. Fusce accumsan tellus odio. Proin mattis venenatis ex et auctor. Morbi vitae ante urna. Phasellus venenatis justo libero, in efficitur lacus imperdiet non. Nunc sem ligula, lobortis ultricies urna nec, semper cursus velit. In a auctor nisi. Etiam libero lacus, laoreet in posuere eu, sollicitudin et leo. Sed et ligula risus. Nulla commodo suscipit massa, vel sodales mi iaculis vitae. Aenean rutrum, lectus vitae ultricies finibus, enim sapien condimentum nisl, venenatis dignissim tortor arcu vitae mauris. Vivamus condimentum ullamcorper sem, at elementum tellus molestie a. ",
  },
];

export default harcodeUsers;
