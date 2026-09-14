import { usePageContext } from 'vike-react/usePageContext';

interface LinkProps {
  readonly className?: string;
  readonly href: string;
}
export const Link: React.FC<React.PropsWithChildren<LinkProps>> = (props) => {
  const { urlPathname } = usePageContext();
  const isActive = props.href === '/' ? urlPathname === props.href : urlPathname.startsWith(props.href);
  const className = [props.className, isActive && 'is-active'].filter(Boolean).join(' ');

  return <a {...props} className={className} />;
};
