export default function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center">
      <img
        src="https://links.papareact.com/1m8"
        width={50}
        alt="logo"
        className="rounded-full"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}
