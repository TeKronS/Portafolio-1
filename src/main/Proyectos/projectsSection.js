import { Body, Title, SectionCard, ContainDescripotion } from "./styles";
import img1 from "./../../img/Projects/Canvas Dibujo 1.jpg";
import img2 from "./../../img/Projects/IB Admin 1.png";
import img3 from "./../../img/Projects/Tienda Online 1.jpg";
import img4 from "./../../img/Projects/Inversiones Boara Wep App.jpg";
import { CardProject } from "./CardProject/CardProject";

export const ProjectsSection = () => {
  return (
    <Body>
      <Title>
        <span>Proyectos</span>
      </Title>
      <SectionCard>
        <CardProject
          image={img1}
          link={"https://tekrons.github.io/Canva-Dibujo/"}
          repo={"https://github.com/TeKronS/Canva-Dibujo"}
          Description={Description1}
        />
        <CardProject
          image={img2}
          link={"https://tekrons.github.io/Inversiones-Boara-Admin-Form/"}
          repo={"https://github.com/TeKronS/Inversiones-Boara-Admin-Form"}
          Description={Description2}
        />

        <CardProject
          image={img3}
          link={"https://tekrons.github.io/Tienda-Online/"}
          repo={"https://github.com/TeKronS/Tienda-Online"}
          Description={Description3}
        />

        <CardProject
          image={img4}
          link={"https://inversiones-boara.web.app/"}
          repo={"https://github.com/TeKronS/Inversiones-Boara"}
          Description={Description4}
        />
      </SectionCard>
    </Body>
  );
};

const Description1 = ({ closeInfo }) => {
  return (
    <ContainDescripotion>
      <div>
        <button onClick={closeInfo}>X</button>
        <h3>Canvas Dibujo</h3>
        <p>
          Este fue mi primer proyecto, es una aplicación para dibujar en pc o
          tablet con varias funciones de dubujos muy comunes.
        </p>
        <h4>En este proyecto aplico:</h4>

        <ul>
          <li>Diseño Responsivo.</li>
          <li>Configuración PWA.</li>
          <li>
            Hice todas las funciones de dibujo excepto las de Flood fill y
            Ellipse esas las adapte a mi proyecto.
          </li>
          <li>
            Utilizo la ubicación del mouse para arrastrar y dibujar elementos,
            fue difícil arrastrar elementos con rotación.
          </li>
          <li>
            Cambio el tamaño o forma del cursor dependiendo de la función de
            dibujo seleccionada a través de formas SVG creadas por mi.
          </li>
          <li>Mucho del CSS es controlado por el JavaScript.</li>
        </ul>
      </div>
    </ContainDescripotion>
  );
};

const Description2 = ({ closeInfo }) => {
  return (
    <ContainDescripotion>
      <div>
        <button onClick={closeInfo}>X</button>
        <h3>Inversiones Boara Admin</h3>
        <p>
          Proyecto Inversiones Boara Admin, aplicación web para administrar la
          página Inversiones Boara. el link de esta página usa otra base de
          datos para no afectar la página principal.
        </p>
        <h4>Este proyecto contiene:</h4>
        <ul>
          <li>Verificación de Usuario (firebase).</li>
          <li>Diseño Responsivo.</li>
          <li>Configuración PWA.</li>
          <li>
            Formulario Reactivo (se renderiza distintas secciones del formulario
            según la información en una variable de estado).
          </li>
          <li>
            Contiene bloqueo de navegación para que funcione como una aplicación
            de teléfono (al pulsar el botón Back del teléfono).
          </li>
          <li>
            Con el Formulario agrega, elimina y edita información de productos
            en la página Inversiones Boara.
          </li>
          <li>
            Hago uso de una librería para transformar la imagen subida a una de
            menor peso antes de subirla a la base de datos (esta función se
            puede hacer en el back-end pero no tengo acceso a las funciones con
            cuenta de firebase gratis).
          </li>
          <li>Base de datos (no-SQL) Firestore.</li>
        </ul>
      </div>
    </ContainDescripotion>
  );
};

const Description3 = ({ closeInfo }) => {
  return (
    <ContainDescripotion>
      <div>
        <button onClick={closeInfo}>X</button>
        <h3>Tienda Online</h3>
        <p>
          Segundo Proyecto. Aplicación Web de compra venta estilo Mercado Libre.
        </p>

        <h4>En este proyecto cree componentes reutilizables:</h4>
        <ul>
          <li>Componente para subir imágenes a un formulario.</li>
          <li>Componente deslizador de imágenes.</li>
        </ul>
        <h4>Este proyecto contiene:</h4>
        <ul>
          <li>Registro de Usuarios.</li>
          <li>Verificación de Usuario (Firebase).</li>
          <li>Formulario de Venta.</li>
          <li>Slider de Productos.</li>
          <li>
            Búsqueda Full text (estas funciones están en el lado del cliente por
            que para hacerlo en el back-end necesito cuenta premium firebase.
          </li>
          <li>Filtro de Búsqueda.</li>
          <li>Ordenar Búsquedas.</li>
          <li>Edición de Perfil de Usuario.</li>
          <li>Caja de Comentarios.</li>
          <li>Diseño Responsivo.</li>
          <li>Configuración PWA (Básica).</li>
          <li>Firebase para el back-end.</li>
          <li>Firestores Database (no-SQL) almacenamiento de datos.</li>
          <li>Firebase Storage para almacenamiento de archivos.</li>
        </ul>
      </div>
    </ContainDescripotion>
  );
};

const Description4 = ({ closeInfo }) => {
  return (
    <ContainDescripotion>
      <div>
        <button onClick={closeInfo}>X</button>
        <h3>Inversiones Boara</h3>
        <p>
          Proyecto Inversiones Boara, es una Web App para una empresa que vende
          regalos para días especiales. No contiene pasarelas de pago solo
          información de los productos e integración para solicitar productos
          por Whatsap y Facebook.
        </p>

        <h4>Este proyecto contiene:</h4>
        <ul>
          <li>Diseño Responsivo.</li>
          <li>
            Configuración PWA (guarda información de los productos para poder
            visualizarlos sin internet).
          </li>
          <li>Configuración personalizada Service Worker.</li>
          <li>Tarjetas de Productos que se adaptan según la imagen.</li>
          <li>Opcion para ordenar productos por nombre y precio.</li>
          <li>
            Barra de navegación segundaria con diseño que responde a elementos
            en su interior y el tamaño de pantalla (detecta si los botones en su
            interior caben en una lineal horizontal, y no caben cambia el diseño
            de la barra).
          </li>
          <li>
            Los botones de la barra de navegación segundaria los coloca el
            administrador de la pagina (según la información de la base de
            datos) puede agregar o eliminar botones en una segunda pagina de
            administrador que hice.
          </li>
          <li>
            Toda la información de los productos es manipulada por el
            administrador de la pagina con una segunda pagina de Formulario.
          </li>
          <li>Animación del Lógo de la Empresa.</li>
          <li>Integración de mensajes para WhatsApp.</li>
          <li>Integración con página de Facebook.</li>
        </ul>
      </div>
    </ContainDescripotion>
  );
};
