export default function Lista(props){
    return(
        <div>
            <h1 className="font-serif p-1 text-4xl text-red-500 font-bold">Lista de Algo</h1>
            <ul className="list-none p-3 text-xl font-semibold">
                {props.children}
            </ul>
        </div>
    );
};