import { defineDb, defineTable, column } from 'astro:db';

// Here will come database schema...
const Bangkok = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    sic_cost_pp: column.number(),
    tkt_net_cost: column.number(),
    transfer_rates_car: column.number(),
    transfer_rates_suv: column.number(),
    transfer_rates_van: column.number()
  }
})

const Pattaya = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    sic_cost_pp: column.number(),
    tkt_net_cost: column.number(),
    transfer_rates_van: column.number(),
    pickup_time_sic: column.text()
  }
})

export default defineDb({
  tables: { Bangkok, Pattaya }
});
