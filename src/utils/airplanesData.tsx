import { faker } from "@faker-js/faker/locale/pt_BR";

const airplaneData = Array.from({ length: 12 }).map(() => {
  return {
    id: faker.number.int({ min: 100, max: 999 }),
    country: faker.location.country(),
    airport: faker.airline.airport(),
    flightNumber: faker.airline.flightNumber({
      addLeadingZeros: true,
      length: 4,
    }),
  };
});

export default airplaneData;
