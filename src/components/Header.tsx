type HeaderProps = {
    username: string;
};
function Header({username }: HeaderProps) {
  return (
    <header>
      <h1>React Project Manager</h1>
      <p>Welcome, {username}</p>
    </header>
  );
}

export default Header;