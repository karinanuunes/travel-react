import { faker } from "@faker-js/faker/locale/pt_BR";

const userData = Array.from({ length: 50 }).map(() => {
  return {
    id: faker.number.int({ min: 100, max: 999 }),
    date: faker.date.past({ years: 10 }),
    country: faker.location.country(),
    airplane: faker.airline.airplane().name,
    fligthNumber: faker.airline.flightNumber({
      addLeadingZeros: true,
      length: 4,
    }),
    flightSeat: faker.airline.seat({ aircraftType: "widebody" }),
  };
});

export default userData;
