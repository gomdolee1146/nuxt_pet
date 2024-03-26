export const state = () => ({
  pricingList: [
    {
      name: 'Singular Walks (30 MIN)',
      desc: 'to just test the services',
      price: '$30',
      period: 'days',
      popular: false,
    },
    {
      name: 'Twice a week',
      desc: 'breaks down to $28 per walk',
      price: '$224',
      period: 'month',
      popular: false,
    },
    {
      name: 'Three times a week',
      desc: 'breaks down to $26 per walk',
      price: '$312',
      period: 'month',
      popular: true,
    },
    {
      name: 'Four times a week',
      desc: 'breaks down to $24 per walk',
      price: '$384',
      popular: false,
    },
  ],
  additionalList: [
    {
      title: 'additional Dog',
      price: '$5'
    },
    {
      title: 'additional 45 Minutes of Walking',
      price: '$60'
    },
  ]
})