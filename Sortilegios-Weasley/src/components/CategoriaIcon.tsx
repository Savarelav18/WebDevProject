import { Categoria } from "../types";
import { BromasIcon, DulcesIcon, ExplosivosIcon} from "../components/icons"

const iconMap: Record<string, React.FC> = {
  BromasIcon,
  ExplosivosIcon,
  DulcesIcon,
};

interface CategoriaIconProps {
  categoria: Categoria;
}

export const CategoriaIcon: React.FC<CategoriaIconProps> = ({ categoria }) => {
  const iconName = `${categoria}Icon`;
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    return null; // O puedes devolver un ícono por defecto si no se encuentra
  }

  return <IconComponent />;
};