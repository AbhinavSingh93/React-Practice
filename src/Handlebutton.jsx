export function HandleButton({children,onSelect}){
    return (
      <button onClick={onSelect}>{children}</button>
    );
}