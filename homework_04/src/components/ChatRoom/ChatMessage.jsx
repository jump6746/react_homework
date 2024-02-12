import ProfileImage from '../Profile/ProfileImage';

export default function ChatMessage({
  message,
  receive = false,
  ...restProps
}) {
  const defaultClassName = 'border-black border-2 px-2 py-1';
  const extraClassName = receive ? 'mr-auto' : 'ml-auto';

  const className = `${defaultClassName} ${extraClassName}`.trim();

  return (
    <li className="flex flex-col gap-2" {...restProps}>
      {receive ? <ProfileImage /> : null}
      <span className={className}>{message}</span>
    </li>
  );
}
