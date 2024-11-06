import { defineStore } from 'pinia'
import orderUser1 from "@/assets/imgs/orderUser1.png";
import orderUser2 from "@/assets/imgs/orderUser2.png";
import orderUser3 from "@/assets/imgs/orderUser3.png";
import orderUser4 from "@/assets/imgs/orderUser4.png";
import orderUser5 from "@/assets/imgs/orderUser5.png";


export const useOrderList = defineStore('orderList', {
    state(){
        return {
            orderList: [
                {
                    id: "marcus_bergson",
                    img: orderUser1,
                    name: "Marcus Bergson",
                    date: "Nov 15, 2023",
                    amount: "80,000",
                    status: "Paid",
                  },
                  {
                    id: "jaydon_vaccaro",
                    img: orderUser2,
                    name: "Jaydon Vaccaro",
                    date: "Nov 15, 2023",
                    amount: "150,000",
                    status: "Refund",
                  },
                  {
                    id: "corey_schleifer",
                    img: orderUser3,
                    name: "Corey Schleifer",
                    date: "Nov 14, 2023",
                    amount: "87,000",
                    status: "Paid",
                  },
                  {
                    id: "cooper_press",
                    img: orderUser4,
                    name: "Cooper Press",
                    date: "Nov 14, 2023",
                    amount: "100,000",
                    status: "Refund",
                  },
                  {
                    id: "phillip_lubin",
                    img: orderUser5,
                    name: "Phillip Lubin",
                    date: "Nov 13, 2023",
                    amount: "78,000",
                    status: "Paid",
                  },
                
            ]
        }
    },
    getters: {
        getOrderList: (state)=> state.orderList
    },
    actions:{
        setOrderList(mode){
            // this.orderList = mode
        }
    }
})