import EmployersListItem from "../employers-list-item/employers-list-item"
import './employers-list.css'

const EmployersList=({data,onDelete, onToggleIncrease,onToggleRise})=>{

    const elements=data.map(item=>{
        const{id, ...itemProps}=item;
        return(
           /*  <EmployersListItem name={item.name} salary={item.salary}/> */
            <EmployersListItem 
            key={id} 
            {...itemProps}
            onDelete={()=>onDelete(id)}
            onToggleIncrease={()=> onToggleIncrease(id)}
            onToggleRise={()=> onToggleRise(id)}/>
            //... spread оператор который разварачивает item
        )
        //возвращаеттся новый массив эелементов
    })


    return(

        <ul className="app-list list-group">
            {elements} 
            {/* //массив */}
        </ul>
    )
}

export default EmployersList;