import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { useState, useRef } from "react";
import Swal from "sweetalert2";

const Punto1Ej1 = () => {
  const datosPrueba = {
    DNIEmpleado: "21212121",
    NroProyecto: "1",
    NombreProyecto: "Aplicacion mobile UTN",
    NombreProducto: "Aplicacion",
    TipoProducto: "Mobile",
    NroCLiente: "23456789",
    CUITCliente: "232323",
    NombreEquipoTrabajo: "BugsBusters",
    NroEquipoTrabajo: "1",
  };

  const [datos, setDatos] = useState({});

  const inputEmpleado = useRef();

  const inputProyecto = useRef();

  function validarDatos() {
    if (
      inputEmpleado.current.value.trim() === "21212121" &&
      inputProyecto.current.value.trim() === "1"
    ) {
      setDatos(datosPrueba);
      Swal.fire({
        icon: "success",
        title: "Proyecto asignado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Datos Ingresados incorrectos",
      });
    }
  }

  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-center gap-9">
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-start">
          <div className="flex gap-8 w-full m-2">
            <label className="w-3/4 text-2xl"> Ingrese su DNI</label>
            <Input
              ref={inputEmpleado}
              label="DNI"
              color="primary"
              placeholder="ejemplo: 21212121"
              className="font-bold"
            />
          </div>
          <div className="flex gap-8 w-full m-2">
            <label className="w-3/4 text-2xl">
              {" "}
              Ingrese el Numero de Proyecto
            </label>
            <Input
              ref={inputProyecto}
              label="Proyecto"
              color="primary"
              placeholder="ejemplo: 1"
              className="font-bold text-sky-400/0 "
            />
          </div>
        </div>
        <Button
          onClick={validarDatos}
          color="primary"
          className="w-1/4 m-2 font-bold"
        >
          Enviar
        </Button>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-start">
          <h4 className="text-2xl">
            Datos del Proyecto ingresado
          </h4>
          <div className="w-3/4 flex justify-center items-center my-1 gap-11">
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">Nombre del Proyecto</p>
                <p>{datos.NombreProyecto}</p>
              </CardBody>
            </Card>
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">Nombre del Proyecto</p>
                <p>{datos.NombreProyecto}</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-2xl">
            Datos del Producto correspondiente al Proyecto ingresado
          </h4>
          <div className="w-3/4 flex justify-center items-center my-1 gap-11">
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">Nombre del Producto</p>
                <p>{datos.NombreProducto}</p>
              </CardBody>
            </Card>
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">Tipo del Producto</p>
                <p>{datos.TipoProducto}</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-2xl">
            Datos del Cliente del Proyecto ingresado
          </h4>
          <div className="w-3/4 flex justify-center items-center my-1 gap-11">
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">Numero de Cliente</p>
                <p>{datos.NroCLiente}</p>
              </CardBody>
            </Card>
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">CUIT del cliente</p>
                <p>{datos.CUITCliente}</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-2xl">
            Datos del Equipo asignado al Proyecto ingresado
          </h4>
          <div className="w-3/4 flex justify-center items-center my-1 gap-11">
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">
                  Nombre del Equipo de Trabajo
                </p>
                <p>{datos.NombreEquipoTrabajo}</p>
              </CardBody>
            </Card>
            <Card className="w-2/4 bg-slate-200">
              <CardBody className="font-semibold">
                <p className="font-bold text-lg">
                  Numero del Equipo de Trabajo
                </p>
                <p>{datos.NroEquipoTrabajo}</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Punto1Ej1;
