import CItem from "./CItem";
import CCombo from "./CCombo";

const CMenu = ({name, check, menu}) => {

    return (
        <section >
            <div className="container" >
                <div id = {name} className="intro" >
                    
                    <h2  className="text-center" style={{border : "3px solid", width : "60%", paddingBottom : "10px", borderRadius : "20px", backgroundColor : "gray"}} >{name}</h2>
                </div>
                    { check == 'product' && (
                    <div className="row justify-content-center features">   
                        {menu.map((pizza) => (
                            <CItem key={pizza.productId} item={pizza}/>
                        ))}       
                    </div>)}

                {check == 'combo' && (
                 <div className="row justify-content-center features">   
                    {menu.map((pizza) => (
                        <CCombo key={pizza.comboId} item={pizza}/>
                    ))}
                </div> 
                )}
            </div>
        </section>
    );
};

export default CMenu;
