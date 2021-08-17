import Link from 'next/link';
import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';

export default function Gnb() {
  const router = useRouter();
  const goLink = (e, data) => {
    e.preventDefault();
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    } else if (data.name === 'Contact Us') {
      router.push('/contact');
    }
  };
  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={router.pathname === '/'}
        onClick={goLink}
      />
      <Menu.Item
        name="about"
        active={router.pathname === '/about'}
        onClick={goLink}
      />
      <Menu.Item
        name="Contact Us"
        active={router.pathname === '/contact'}
        onClick={goLink}
      />
    </Menu>
  );
}
