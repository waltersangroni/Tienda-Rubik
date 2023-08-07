import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      name: "Gan 356 Magnetic",
      image: "./src/assets/img/GAN356Magnetic.jpg",
      categoria: "gan",
      catalogo: "catalogo",
      description:
        "GAN 356 M con núcleo de plástico, nuevo diseño GES, imanes visibles, superficie antiarañazos. GAN 356 M tiene potentes imanes en el interior de los cuales puede convertir las capas en la posición correcta con una velocidad mucho mayor. ",
      price: 8500,
      stock: 8,
    },
    {
      id: 2,
      name: "GAN Pyraminx 36",
      image: "./src/assets/img/GANPyraminx36.jpg",
      categoria: "gan",
      catalogo: "catalogo",
      description:
        "GAN Pyraminx es el rompecabezas piramidal más liviano del mercado, con imanes incorporados en el núcleo.",
      price: 7150,
      stock: 3,
    },
    {
      id: 3,
      name: "GAN MirrorM 3x3x3",
      image: "./src/assets/img/GANMirrorM3x3x3.jpg",
      categoria: "gan",
      catalogo: "catalogo",
      description:
        "GAN MirrorM es un nuevo diseño visual con un cubo de velocidad 3x3, que no se resuelve con colores sino con formas. El cubo de espejo GAN te brindará más diversión y desafío mientras usas el mismo método que un cubo de velocidad normal de 3x3.",
      price: 8085,
      stock: 12,
    },
    {
      id: 4,
      name: "GAN Megaminx M",
      image: "./src/assets/img/GANMegaminxM.jpg",
      categoria: "gan",
      catalogo: "catalogo",
      description:
        "Tiene forma de dodecaedro Tiene 12 caras, y 62 piezas incluyendo 12 piezas centrales, 20 piezas de esquina y 30 piezas de borde resultando 1.01x10 68 de combinaciones. Se necesitan al menos 3,47 s* para resolver un cubo de 3 x 3, mientras que 2781 s* para resolver un Megaminx.",
      price: 31000,
      stock: 2,
    },
    {
      id: 5,
      name: "LiangCuber Moyu Meilong M",
      image: "./src/assets/img/LiangCuberMoyuMeilongM.jpg",
      categoria: "moyu",
      catalogo: "catalogo",
      description:
        "El primer producto magnético rentable lanzado Ranuras de imán reservadas de posicionamiento magnético para un ajuste preciso. Un sistema de posicionamiento de cubo compuesto por imanes de diferentes fuerzas brinda una sensación más clara de posicionamiento y una mayor sensación de operación.",
      price: 11900,
      stock: 10,
    },
    {
      id: 6,
      name: "CuberSpeed MFJS Moyu",
      image: "./src/assets/img/CuberSpeedMFJSMoyu.jpg",
      categoria: "moyu",
      catalogo: "catalogo",
      description:
        "El MoYu RS2 M 2x2 es el último rompecabezas de la línea RS. Cuenta con plástico esmerilado, fuerza magnética media/fuerte y un giro suave desde el primer momento. Las pegatinas tradicionales han sido reemplazadas con material ABS original y ecológico, lo que significa que no se desvanecen, pelan ni engañan.",
      price: 7900,
      stock: 15,
    },
    {
      id: 7,
      name: "LiangCuber MoYu Super RS3M",
      image: "./src/assets/img/LiangCuberMoYuSuperRS3M.jpg",
      categoria: "moyu",
      catalogo: "catalogo",
      description:
        "Esta es la última versión de la actualización, el sistema elástico maglev con el sistema magnético axial, le permite Maximizar la velocidad de su mano, Esta es definitivamente la fuerza magnética del eje más barata con el cubo insignia magLEV, su calidad ha alcanzado el nivel insignia.",
      price: 12500,
      stock: 7,
    },
    {
      id: 8,
      name: "Bukefuno MoYu Aoshi WR",
      image: "./src/assets/img/BukefunoMoYuAoshiWR.jpg",
      categoria: "moyu",
      catalogo: "catalogo",
      description:
        "El cubo magnético MoYu Aoshi WR M 6x6 de más alta gama producido por MoYu. Con fuerte magnetismo y buena sensación de mano. Este 6x6 es un rompecabezas insignia fantásticamente suave, rápido y de muy alto rendimiento.",
      price: 27790,
      stock: 1,
    },
    {
      id: 9,
      name: "Rubik's Cube The Original 3x3",
      image: "./src/assets/img/Rubik'sCubeTheOriginal3x3.jpg",
      categoria: "rubik",
      catalogo: "catalogo",
      description:
        "EL CUBO DE RUBIK ORIGINAL: una combinación de matemáticas, arte y ciencia: el icónico Cubo de Rubik está aquí para desafiar tu mente. El Cubo 3x3 es el rompecabezas más conocido del mundo y ha fascinado a los fanáticos desde su lanzamiento en 1980.",
      price: 5820,
      stock: 22,
    },
    {
      id: 10,
      name: "Rubik's Perplexus Fusion",
      image: "./src/assets/img/Rubik'sPerplexusFusion.jpg",
      categoria: "rubik",
      catalogo: "catalogo",
      description:
        "¡Rubik's Perplexus Fusion 3 x 3 une dos rompecabezas desafiantes en uno! Haz rodar la bola de acero hasta el espacio START y gira el perplexo de Rubik para alinear las orugas y maniobrar la bola a través del laberinto interior. Pasa números cada vez mayores a lo largo de la pista de camino a la línea de meta sin caerte de la pista. Pon a prueba tus habilidades. Completa el laberinto, completa el cubo.",
      price: 14790,
      stock: 12,
    },
    {
      id: 11,
      name: "Rubik's Phantom",
      image: "./src/assets/img/Rubik'sPhantom.jpg",
      categoria: "rubik",
      catalogo: "catalogo",
      description:
        "Toca las fichas del cubo para revelar temporalmente el color. Resuelve el último cubo, el Fantasma de Rubik, mientras los colores se desvanecen. Te sorprenderá la tecnología termocrómica de este cubo. Revela los colores del Phantom con el calor de tu toque. ¡Resuelve el cubo antes de que se vuelva negro!",
      price: 8900,
      stock: 5,
    },
    {
      id: 12,
      name: "Rubik's Edge, 3x3x1",
      image: "./src/assets/img/Rubik'sEdge3x3x1.jpg",
      categoria: "rubik",
      catalogo: "catalogo",
      description:
        "El Rubik's Edge es un cubo simple de una capa diseñado para entrenarlo para que pueda enfrentarse a los cubos más complejos con facilidad, con solo 192 permutaciones, este juego de rompecabezas es uno de los cubos más fáciles de resolver dentro de la colección de Rubik.",
      price: 3500,
      stock: 18,
    },
  ];

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay productos"));
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  async function fetchingProductos() {
    try {
      const productosFetched = await getProductos();
      console.log(productosFetched);
    } catch (error) {
      console.error(error);
    }
  }
  fetchingProductos();

  return (
    <div>
      <ItemDetail productos={productos} />
    </div>
  );
};

export default ItemDetailContainer;
