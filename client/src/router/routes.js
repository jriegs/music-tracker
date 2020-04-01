import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

export const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]
