export const fields = [
  {
    name: 'First Name',
    type: 'text',
    max: 32,
    required: true,
    error: 'First name is required'
  },
  {
    name: 'Last Name',
    type: 'text',
    max: 32,
    required: true,
    error: 'Last name is required'
  },
  {
    name: 'Email',
    type: 'text',
    max: 100,
    required: true,
    error: 'Email is required'
  },
  {
    name: 'Address',
    type: 'textarea',
    max: 1000,
    required: false,
    error: 'Address is required'
  }
]