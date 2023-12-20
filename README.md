# Complexity Analysis :sparkles:

We analyse the complexity of "main.js" and "main_refactored.js"

### Analyse:

    addRice, cookRice, steam, keepWarm, removeRice, delaySync:
        Time Complexity: O(1) (constant time for each method)
        Space Complexity: O(1) (constant space for each method)

    simulateRiceCooker:
        Time Complexity: O(1) (constant time for each case in the switch statement)

__"main.js"__

    simulateRiceCooker:
        Time Complexity: O(n) (where n is the number of iterations in the while loop) linear
        Space Complexity: O(1) (constant space)

__"main_refactored.js"__

    simulateRiceCooker:
        Time Complexity: O(1) (constant time)
        Space Complexity: O(1) (constant space)

### Overall Analysis:

The time complexity of the code is primarily determined by the simulateRiceCooker function in "main.js," which has a linear time complexity of O(n) due to the while loop. In "main_refactored.js," the simulateRiceCooker function has constant time complexity O(1).