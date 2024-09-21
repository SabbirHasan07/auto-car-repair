import CartComponent from "@/app/Components/Service/CartComponent";
import LatestEquipment from "@/app/Components/Service/LatestEquipment";
import WhyChooseAutoPlus from "@/app/Components/Service/WhyChooseAutoPlus";

const servicing =()=>{
    return(
        <div>
            <h1 className="text-4xl font-bold text-center py-6">SERVICING</h1>
            <CartComponent/>
            <WhyChooseAutoPlus/>
            <LatestEquipment/>

        </div>
    )
}
export default servicing;