export const riceCooker = {
    ricePresent: false, 
    riceCooked: false, 
    steamingInProgress: false, 
    heatingInProgress: false,

    // O(1)
    addRice() {
        if (!this.ricePresent) {
            this.ricePresent = true;
            console.log('Rice has been added.');
        } 
            console.log('There\'s already rice in the rice cooker.');
    },

    // O(1)
    cookRice() {
        if (!this.ricePresent) {
            console.log('Cannot cook. The rice cooker is empty.');
            return
        } 
        if (!this.riceCooked) {
          console.log('Cooking rice...');
          this.delaySync(1500);
          this.riceCooked = true;
          console.log('The rice has been cooked!');
        } 
        console.log('The rice is already cooked.');
    },
    
    // O(1)
    steam() {
        if (!this.ricePresent) {
            console.log('Cannot steam. The rice cooker is empty.');
            return 
        } 
        if (!this.steamingInProgress) {
          console.log('Steaming in progress...');
          this.steamingInProgress = true;
          this.delaySync(1500);
          this.steamingInProgress = false;
          console.log('Steaming completed!');
        } 
          console.log('Steaming is already in progress.');
    },

    // O(1)
    keepWarm() {
        if (!this.ricePresent) {
            console.log('Cannot keep warm. The rice cooker is empty.');
            return
        }
        if (!this.riceCooked) {
            console.log('Cannot keep warm. The rice is not cooked.');
            return
        } 
        if (this.heatingInProgress) {
          console.log('The rice is now being kept warm.');
          this.heatingInProgress = true;
        } 
          console.log('Keeping warm is already in progress.');
    },

    // O(1)
    removeRice() {
        if (this.ricePresent && (this.riceCooked || this.heatingInProgress)) {
          this.ricePresent = false;
          this.riceCooked = false;
          this.steamingInProgress = false;
          this.heatingInProgress = false;
          console.log('The rice has been removed from the rice cooker.');
        } 
        console.log('There\'s no rice to remove or it is not cooked yet.');
    },
    
    // O(1)
    delaySync(ms) {
        const start = Date.now();
        while (Date.now() - start < ms) {
        }
    }
}

// O(1)
function simulateRiceCooker(){
    displayMenu()

    let input = +prompt("Enter your choice")
  
    switch(input){
        case 1: 
            riceCooker.addRice();
            break;
        case 2:
            riceCooker.cookRice();
            break;
        case 3:
            riceCooker.steam();
            break;
        case 4: 
            riceCooker.keepWarm();
            break;
        case 5:
            riceCooker.removeRice();
            break;
        case 6: 
            console.log("Thank you for using the Rice cooker.")
            break;
        default: 
            console.log("Invalid choice.")
    }

    return "Error"
}

simulateRiceCooker()

