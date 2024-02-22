ServerEvents.recipes((event) => {
  event.remove({ output: "projecte:transmutation_table" });
  event.remove({ output: "projecte:philosophers_stone" });

  event.remove({output: "projecte:rm_katar"})
  event.remove({output: "projecte:rm_morning_star"})
});
