
import {Login} from '../index';

const Actions = () => {
    return (
      <a href='test'>Register</a>
    );
  };

export default {
    title: 'Login web component',
    component: Login
}

export const App = () => (<Login><Actions /></Login>);