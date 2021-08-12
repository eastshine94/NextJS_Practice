import Link from 'next/link';
import { Menu } from 'semantic-ui-react';

export default function Gnb() {
  const activeItem = 'home';
  return (
    <Menu inverted>
      <Link href="/">
        <Menu.Item name="home" active={activeItem === 'home'} />
      </Link>

      <Menu.Item name="messages" active={activeItem === 'messages'} />
      <Menu.Item name="friends" active={activeItem === 'friends'} />
    </Menu>
  );
}
