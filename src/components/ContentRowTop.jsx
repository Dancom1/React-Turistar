import mandalorian from '../assets/images/Vergil.jpg'
import DataContent from './DataContent';
import Genres from './Genres';



function ContentRowTop(){
    const totalUs = async() =>{
      const resp = await fetch('http://localhost:3030/api/usuarios');
      const data = await resp.json()
      return data
      //console.log(data); ESTA WEAI NO FUNCA
    }
    const dataBoxes = [
      {
        title: "Hospedajes en Data Base",
        amount: 12,
        icon: 'fa-hotel',
        styles: ['border-left-primary' ,'text-primary']
      },
      {
        title: "Total de usuarios",
        amount: totalUs(resp.json(meta.total)),
        icon: 'fa-user',
        styles: [ 'border-left-success' ,'text-success']
      },
      {
        title: "nose",
        amount: 99,
        icon: 'fa-award',
        styles: ['border-left-warning', 'text-warning']
      }
    ]


    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        {/* Content Row Movies*/}
        <div className="row">
          {/* Movies in Data Base */}
          {
            dataBoxes.map((dataBox, i) =>(
              <DataContent key={i} dataBox = {dataBox}/>
            ))
          }
        </div>
        {/* End movies in Data Base */}
        {/* Content Row Last Movie in Data Base */}

      </div>
    )
}

export default ContentRowTop;