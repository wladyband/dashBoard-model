class Construction {
  constructor(
    nameOfTheWork = '',
    propertyOwner = '',
    zipCode = '',
    cityNeighborhood = '',
    city = '',
    cityStatus = '',
    cityAddress = '',
    addressNumber = 0, 
    complement = '',
    selectedOption = 'Orçamento'
  ) {
    this.nameOfTheWork = nameOfTheWork;
    this.propertyOwner = propertyOwner;
    this.zipCode = zipCode;
    this.cityNeighborhood = cityNeighborhood;
    this.city = city;
    this.cityStatus = cityStatus;
    this.cityAddress = cityAddress;
    this.addressNumber = addressNumber;
    this.complement = complement;
    this.selectedOption = selectedOption;
  }
}

export default Construction;
