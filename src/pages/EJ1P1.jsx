import { Input, Button } from "@nextui-org/react";

const EJ1P1 = () => {
  return (
    <div className="h-[90vh] w-full flex flex-col items-center justify-center gap-11">
      <div className="w-3/4 flex items-end gap-8">
        <div className="w-3/4 h-full">
          <div className="flex gap-8 w-full m-2">
            <label className="w-3/4 text-2xl"> Ingrese su DNI</label>
            <Input
              label="DNI"
              color="secondary"
              placeholder="ej: 45671234"
              className="font-bold"
            />
          </div>
          <div className="flex gap-8 w-full m-2">
            <label className="w-3/4 text-2xl">
              {" "}
              Ingrese el Numero de Proyecto
            </label>
            <Input
              label="Proyecto"
              color="secondary"
              placeholder="ej: 12345"
              className="font-bold text-sky-400/0"
            />
          </div>
        </div>
        <Button color="secondary" className="w-1/4 m-2 font-bold">
          Enviar
        </Button>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <label htmlFor="" className="text-2xl">Datos del Proyecto ingresado</label>
          <div className="w-3/4 flex justify-center items-center gap-11">
            <Input type="text" variant="underlined" label="Nombre del Proyecto" className="w-2/4"/>
            <Input type="text" variant="underlined" label="Numero del Proyecto" className="w-2/4"/>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <label htmlFor="" className="text-2xl">Datos del Producto correspondiente al Proyecto ingresado</label>
          <div className="w-3/4 flex justify-center items-center gap-11">
            <Input type="text" variant="underlined" label="Nombre del Producto" className="w-2/4"/>
            <Input type="text" variant="underlined" label="Tipo de Producto" className="w-2/4"/>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <label htmlFor="" className="text-2xl">Datos del Cliente del Proyecto ingresado</label>
          <div className="w-3/4 flex justify-center items-center gap-11">
            <Input type="text" variant="underlined" label="Numero del cliente" className="w-2/4"/>
            <Input type="text" variant="underlined" label="CUIT del Cliente" className="w-2/4"/>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center gap-8">
        <div className="w-full flex flex-col items-center justify-center">
          <label htmlFor="" className="text-2xl">Datos del Equipo asignado al Proyecto ingresado</label>
          <div className="w-3/4 flex justify-center items-center gap-11">
            <Input type="text" variant="underlined" label="Nombre del Equipo de Trabajo" className="w-2/4"/>
            <Input type="text" variant="underlined" label="Numero del Equipo de Trabajo" className="w-2/4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EJ1P1;
