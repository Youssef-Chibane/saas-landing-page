interface ContainerProps {
  href: string;
  text: string;
}

export default function NavItem({ href, text }: ContainerProps) {
  return (
    <li>
      <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
        {text}
      </a>
    </li>
  );
}
