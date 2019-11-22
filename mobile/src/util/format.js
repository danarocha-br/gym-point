export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
