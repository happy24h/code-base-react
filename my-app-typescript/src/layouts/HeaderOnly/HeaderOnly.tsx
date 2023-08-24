import Header from "../components/Header/Header";
function HeaderOnly({ children }: { children: any }): JSX.Element {
  return (
    <div>
      <Header /> {children}
    </div>
  );
}

export default HeaderOnly;
