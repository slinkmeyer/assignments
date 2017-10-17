import React from "react";
import ServicesComponent from "./Component";
import {Link} from "react-router-dom";

class ServicesContainer extends React.Component{
  constructor (){
    super();
    this.state = {
      services:[]
    }
    this.genLinks = this.genLinks.bind(this);
    this.searchById = this.searchById.bind(this);
}

componentDidMount(){
  this.setState({
    services:[
      {title: "pet your cat",
       price: 20,
       image: <img alt="" src="https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"/>,
       _id: "Hhrt34od3711"},
      {title: "play fetch with your dog",
       price: 40,
       image: <img alt="" src="https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/1169242_1678936435699204_970492731_n.jpg?ig_cache_key=MTIxMjMzNjIyMzg3MTA4OTcyMg%3D%3D.2"/>,
       _id: "495UiF09Rt57"},
       {title: "hold your tortoise",
        price: 10,
        image: <img alt="" src="https://media1.britannica.com/eb-media/25/178225-004-59A95DF1.jpg"/>,
       _id: "894Onm3W904R"}
    ]
  })
}
searchById(id){
    return this.state.services.find((services)=>{
      return id === services._id
    });
}
genLinks(){
    return this.state.services.map((services)=>{
        return <Link
                key={services._id}
                to={`/services/${services._id}`}>{services.title}</Link>
    })
}
render(){
    return (
        <ServicesComponent
            genLinks={this.genLinks}
            searchById={this.searchById}/>
    )
  }
}
export default ServicesContainer;
