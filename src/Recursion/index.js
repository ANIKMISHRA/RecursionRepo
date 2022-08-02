// Component
import TravelingVehiclesTypes from '../ObjectData/index';

/**
 * converting object data into array of object in this function.
 * @param {object} object
 * @returns node
 */
const Transform = (object) => {
  return Object.entries(object).map(([key, value]) => {
    return {
      key,
      ...(value && typeof value === 'object'
        ? { value: '', children: Transform(value) }
        : { value, children: [] }),
    };
  });
};
// calling function
const result = Transform(TravelingVehiclesTypes);
// exporting to access data in other files through importing.
export default result;
