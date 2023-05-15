import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  
  dataDetails = [
    {
      id:1,
      dataName:"Global GDP graph %",
      dataImg:"https://img.etimg.com/photo/msid-70324816/gfx-toi-2-.jpg"
    },
    {
      id:2,
      dataName:"Diret to Customer Omnichanel",
      dataImg:"https://multichannelmerchant.com/wp-content/uploads/2017/10/omnichannel-graphic-hand-and-icons-feature.jpg"
    },
    {
      id:3,
      dataName:"Global Market of Luxury Goods",
      dataImg:"https://ml.globenewswire.com/Resource/Download/6bb0defa-a778-4df5-87f6-30807dbdcb5a?size=2"
    },
    {
      id:4,
      dataName:"Efficient Economy",
      dataImg:"https://www.investopedia.com/thmb/khsYMvx7aSBSY4L4C1NVJRSLUvI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Economic-Efficiency-v1-32b3ac94fb21482ab67f5c22c64c21f4.png"
    }
  ]

}
