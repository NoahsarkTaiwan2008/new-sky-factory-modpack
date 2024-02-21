ServerEvents.recipes((event) => {
  event.remove({ output: "projecte:transmutation_table" });
  event.remove({ output: "projecte:philosophers_stone" });
});
