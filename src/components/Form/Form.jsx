export const Form = () => {
      
    const options = [
      'Buick',
      'Volvo',
      'HUMMER',
      'Subaru',
      'Mitsubishi',
      'Nissan',
      'Lincoln',
      'GMC',
      'Hyundai',
      'MINI',
      'Bentley',
      'Mercedes-Benz',
      'Aston Martin',
      'Pontiac',
      'Lamborghini',
      'Audi',
      'BMW',
      'Chevrolet',
      'Mercedes-Benz',
      'Chrysler',
      'Kia',
      'Land',
    ];
    return (<form>
        <select value={selected}>
            {options.map(option => (
                <option key={option.value} value={option.value}></option>
            ))}
    
        </select>
        
  </form>;)
};
