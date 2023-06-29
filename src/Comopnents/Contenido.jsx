import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Contenido.css";

function Contenido({padding}) {
  return (
    <div className="container">
      <div className="row">
        <h1>Tipo de maquinaria agrícola más habitual</h1>
        <div className="col-6 sp py-3">
          <div style={{paddingTop:padding}}>
            <h2>Abonadora</h2>
            <p>
              La tarea de fertilizar es una de las partidas más elevadas de la
              explotación agrícola. Por eso, conviene hacerlo de forma
              equilibrada y homogénea para no derrochar dinero y que el cultivo
              se desarrolle en condiciones favorables en cualquier parte de la
              parcela.
            </p>
          </div>
        </div>
        <div className="col-6 img_grande1"></div>
        <div className="col-6 img_grande2"></div>

        <div className="col-6 sp py-3">
          <div style={{paddingTop:padding}}>
            <h2>Cosechadora</h2>
            <p>
              Esta máquina consta de un motor, un mecanismo de corte, otro de
              trillado y otro de limpia, y un sistema de transporte y almacenaje
              y se utiliza para recolectar productos agrícolas. En su origen,
              necesitaba ser accionada por un tractor para funcionar, pero en la
              actualidad se pueden encontrar cosechadoras autopropulsadas que
              funcionan por sí mismas.
            </p>
          </div>
        </div>

        <div className="col-6 sp py-3">
          <div style={{paddingTop:padding}}>
            <h2>Empacadora</h2>
            <p>
              En el mercado, existe una gran variedad de empacadoras, aunque las
              más usadas son las de fardos prismáticos (hacen pacas de forma
              rectangular) y las rotoempacadoras (realizan rollos cilíndricos).
              Estas últimas se suelen usar principalmente para recolectar heno
              verde, mientras que las primeras, para hierba seca.
            </p>
          </div>
        </div>

        <div className="col-6 img_grande3"></div>
        <div className="col-6 img_grande4"></div>

        <div className="col-6 sp py-3">
          <div style={{paddingTop:padding}}>
            <h2>Sembradora</h2>
            <p>
              En sus comienzos, esta herramienta era tiradas por caballos u
              otros animales, pero hoy en día funcionan enganchadas a un
              tractor. La inmensa mayoría incorpora unas cuchillas delanteras
              que van abriendo el surco, y unos tubos por los que baja el grano.
              Después, unos rodillos cubren los surcos con tierra para dar paso
              a la germinación.
            </p>
          </div>
        </div>

        <div className="col-6 sp py-3">
          <div style={{paddingTop:padding}}>
            <h2>Segadora</h2>
            <p>
              Esta maquina corta la hierba a su paso, dejándolo sobre el terreno
              para después ser repicado por la propia segadora. Finalmente lo
              eleva y lo descarga en el lugar elegido. Hay muchos tipos: desde
              segadoras que se accionan de forma manual, hasta otras agregadas a
              un tractor, o con su propio motor para funcionar por sí mismas.
            </p>
          </div>
        </div>

        <div className="col-6 img_grande5"></div>
      </div>
    </div>
  );
}

export default Contenido;
