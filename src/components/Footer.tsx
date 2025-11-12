import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col item-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="felx flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Arlevi" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            ARLEVI.
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Arlevi.</p>
        <p className="text-sm text-gray-400">Todos los derechos reservados.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Página Principal</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Términos y Condiciones</Link>
        <Link href="/">Política de Privacidad</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Productos</Link>
        <Link href="/">Novedades</Link>
        <Link href="/">Los Más Vendidos</Link>
        <Link href="/">Promociones</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Nosotros</Link>
        <Link href="/">Contacto</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Defensa del Consumidor</Link>
      </div>
    </div>
  );
};

export default Footer;
