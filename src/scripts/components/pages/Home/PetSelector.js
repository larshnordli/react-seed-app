import React from 'react';

export default class PetSelector extends React.Component{
   constructor(props){
      super(props);

      const catImage = require('../../../../media/images/cat.jpg');
      const dogImage = require('../../../../media/images/dog.jpg');
      const bothImage = require('../../../../media/images/cat-plus-dog.jpg');

      this.state = {
         text: 'Change me!',
         selectedPet: null,
         pets: [
             {
                 id: 'cat',
                 label: 'Cat',
                 image: catImage,
                 quote: 'Mjaaau'
             },
             {
                 id: 'dog',
                 label: 'Dog',
                 image: dogImage,
                 quote: 'Bjeeeef'
             },
             {
                 id: 'both',
                 label: 'Cat + Dog',
                 image: bothImage,
                 quote: 'Mjaau + Bjeeeeff'
             }
         ]
      }
   }

   handleChange(e){
console.log('trying to change');
      let selectedPet = this.state.pets.filter((pet) => {
          return pet.id === e.target.value;
      });

      this.setState({ selectedPet: selectedPet[0] });
   }

   render(){
       const aPetIsSelected = this.state.selectedPet;
       let result = null;

       if(aPetIsSelected){
           console.log('current selected:', this.state.selectedPet);
        result = <div><h3>{this.state.selectedPet.label}!</h3> <p>{this.state.selectedPet.quote}</p> <img src={this.state.selectedPet.image} /></div>;
       }
       else{
           result = <p>Please select a pet...</p>
       }

      return(
         <div id="pet-selector" className={"child-component " + this.props.className}>

            <fieldset>
                <legend>Choose your pet:</legend>
                {this.state.pets.map((pet, index) =>{
                    return (
                        <label key={pet.id} for={pet.id}>{pet.label}
                            <input onClick={this.handleChange.bind(this)} type="radio"  name="pet" value={pet.id} id={pet.id} />
                        </label>
                    )})
                }
            </fieldset>

            { result }
         </div>
      )
   }
}
