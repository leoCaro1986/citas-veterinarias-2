
const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg"> 
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">Leonardo</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">@gmail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {""}
            <span className="font-normal normal-case">Diciembre</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {""}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Recusandae adipisci impedit, distinctio 
            nisi neque hic. Excepturi sequi, quibusdam, magni nulla nisi rem maiores 
            ad reprehenderit dignissimos aut doloribus consequatur. Eius?</span>
        </p>
    </div>
  )
}

export default Paciente
