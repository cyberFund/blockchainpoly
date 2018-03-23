export default [
  {
    path: '/exchangeRates',
    name: 'exchangeRates',
    component: () => import('@/pages/ExchangeRates'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('@/pages/Calculator'),
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/pages/Rules'),
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('@/pages/Field'),
  },
  {
    path: '/',
    redirect: '/exchangeRates',
  },
  {
    path: '/*',
    redirect: '/exchangeRates',
  },
];
