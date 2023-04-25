import './nmrSorteado.css'

const NmrSorteadoQuina = ({dado}:any) => {
    return (
        <div className="coluna-dezenas-quina">
            <ul>{dado ? dado.map((elementos:any) =>
                <li>
                    {elementos}
                </li>
            ) : ""}</ul>
        </div>
    );
}

export default NmrSorteadoQuina;