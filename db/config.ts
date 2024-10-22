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
  }
})

const Krabi = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    sic_cost_pp: column.number(),
    child_cost: column.number(),
    tkt_net_cost: column.number(),
    transfer_rates_car: column.number(),
    transfer_rates_van: column.number(),
  }
})

const Chiangmai = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    sic_cost_pp: column.number(),
    child_cost: column.number(),
  }
})

const Kohsamui = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    sic_cost_pp: column.number(),
    child_cost: column.number(),
  }
})

const Phuket = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
    sic_cost_pp: column.number(),
    child_cost: column.number(),
    tkt_net_cost: column.number(),
    transfer_rates_car: column.number(),
    transfer_rates_van: column.number(),
  }
})

export default defineDb({
  tables: { Bangkok, Pattaya, Krabi, Chiangmai, Kohsamui, Phuket }
});
