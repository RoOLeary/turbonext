export const Test = ({ blah }: any) => {
  return (
    <>
      <h1 className="text-black ui-text-7xl">{blah ? blah : "Testing"}</h1>
    </>
  );
};
