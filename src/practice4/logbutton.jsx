export default function LogButton({children,onSelect}){
  return(
    <button onClick={onSelect}>{children}</button>
  );
}