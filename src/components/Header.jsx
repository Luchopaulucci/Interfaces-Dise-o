import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar className="h-24">
      <NavbarBrand className="max-h-full">
        <img
          src="/public/LogoBugsBusters.png"
          alt="logo"
          className="max-h-24	"
        />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Ejercicios
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/" aria-current="page" color="secondary">
            Pagina Principal
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Grupo
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"
        />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
