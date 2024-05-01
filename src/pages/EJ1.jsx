import { Link, Button } from "@nextui-org/react";

const EJ1 = () => {
  const linksPuntos = {
    links: [
      {
        name: "Punto 1",
        page: "punto1",
      },
      {
        name: "Punto 2",
        page: "punto2",
      },
      {
        name: "Punto 3",
        page: "punto3",
      },
      {
        name: "Punto 4",
        page: "punto4",
      },
    ],
  };

  return (
    <div className="h-[90vh] w-full flex flex-col items-center mt-24">
      <h3 className="text-xl font-bold">LISTA DE PUNTOS DEL EJERCICIO 1</h3>
      <div className="h-2/3 w-full flex justify-center items-center gap-11">
        {linksPuntos.links.map((link, index) => (
          <Button
            key={index}
            href={`${link.page}`}
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default EJ1;
