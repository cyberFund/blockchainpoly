export default [
  {
    path: '/',
    name: 'exchangeRates',
    component: () => import('@/pages/ExchangeRates'),
  },
  {
    path: '/*',
    redirect: '/',
  },
];
