// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/static/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  /* {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  }, */
  {
    title: 'Inicio',
    path: '/404',
    icon: icon('ic_home2'),
  },  
  {
    title: 'Usuarios',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Configuración',
    path: '/404',
    icon: icon('ic_settings'),
  },
  /* {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  }, */
  /* {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  }, */
  /* {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  }, */
  /* {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  }, */
];

export default navConfig;
