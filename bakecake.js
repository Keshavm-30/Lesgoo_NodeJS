// Imagine this function bakes a cake (simulated delay with setTimeout)
function bakeCake(callback) {
    setTimeout(function() {
      console.log("Cake is baked!");
      callback(); // This calls the frosting function
    }, 2000); // Simulating a 2-second bake time
  }
  
  // This function frosts the cake
  function frostCake() {
    console.log("Cake is frosted and ready to eat!");
  }
  
  // Let's bake the cake and frost it when it's done
  bakeCake(frostCake);
  console.log("Waiting for the cake to bake...");
  