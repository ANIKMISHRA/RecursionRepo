// Object TreeForm Data
const TravelingVehiclesTypes = {
  id: 1,
  displayName: 'Root',
  children: {
    twoWheeler: {
      id: 2,
      displayName: 'Two Wheeler',
      children: {
        Honda: {
          id: 4,
          displayName: 'Honda',
          children: {},
        },
      },
    },
    fourWheeler: {
      id: 3,
      displayName: 'Four Wheeler',
      children: {
        tata: {
          id: 5,
          displayName: 'Tata',
          children: {},
        },
      },
    },
  },
};

// exporting to access data in other files through importing.
export default TravelingVehiclesTypes;
