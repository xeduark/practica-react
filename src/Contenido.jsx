import Imagen from "./imagen";

const Contenido = () => {
    let imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
      <main>
        <h1>Galería de Imágenes</h1>
        <div>
          {imagenes.map((img) => (
            <Imagen key={img} numero={img} />
          ))}
        </div>
      </main>
    );
};
export default Contenido;
