/* 
Problem description
Find the number of ways to distribute balls 1 to n into 2 bags where at least 1 ball is in each bag.

Constraint:
1 <= n <= 10^6

Time Complexity:
O(1)

*/

class Solution {
    /**
    * @param number n

    * @returns number
    */
    // Old, original way - 0(n * n!)
    // distributeBalls(n) {
    //     if (!(n > 1)) {
    //         return 0;
    //     }
        
    //     if (!(n > 2)) {
    //         return 2;
    //     }
        
    //     let combination = n * 2;
        
    //     for (let i = 2; i < n-1; i++) {
    //         combination += this.factorial(n) / (this.factorial(n-i) * this.factorial(i));
    //     }
        
    //     return combination % 1e9+7;
    // }
    
    // factorial(n) {
    //     if (n == 0 || n == 1) {
    //         return 1
    //     } else {
    //         return n * this.factorial(n-1);
    //     }
    // }
    
    // New formula, unoptimized way - O(n) but performs worse at large n
    // distributeBalls(n) {
    //     const MOD = 1e9 + 7;
        
    //     if (n <= 1) return 0;
    //     if (n == 2) return 2;
        
    //     let result = BigInt(n * 2) % BigInt(MOD);
    //     let ncr = BigInt(n);
        
    //     for (let r = 2; r < n - 1; r++) {
    //         ncr = (ncr * BigInt(n - r + 1)) / BigInt(r);
    //         result = (result + ncr) % BigInt(MOD);
    //     }
        
    //     return Number(result);
    // }
    
    // New formula, optimized using dynamic programming - O(n^2) but performs better at large n
    // distributeBalls(n) {
    //     const MOD = 1e9 + 7;
    
    //     if (n <= 1) return 0;
    //     if (n == 2) return 2;
    
    //     let result = BigInt(n * 2) % BigInt(MOD);
    
    //     // Precompute binomial coefficients using dynamic programming
    //     let binomial = Array.from({ length: n }, () => BigInt(1));
    //     for (let i = 1; i < n; i++) {
    //         binomial[i] = (binomial[i - 1] * BigInt(n - i + 1)) / BigInt(i);
    //     }
    
    //     for (let r = 2; r < n - 1; r++) {
    //         result = (result + binomial[r]) % BigInt(MOD);
    //     }
    
    //     return Number(result);
    // }
    
    // New formula, more optimized with modular arithmetic - O(n)
    // distributeBalls(n) {
    //     const MOD = 1e9 + 7;
    
    //     if (n <= 1) return 0;
    //     if (n == 2) return 2;
    
    //     let result = BigInt(n * 2) % BigInt(MOD);
    
    //     // Precompute factorials and modular inverses
    //     let factorial = Array(n + 1).fill(BigInt(1));
    //     let invFactorial = Array(n + 1).fill(BigInt(1));
    
    //     for (let i = 2; i <= n; i++) {
    //         factorial[i] = (factorial[i - 1] * BigInt(i)) % BigInt(MOD);
    //     }
    
    //     invFactorial[n] = this.modInverse(factorial[n], BigInt(MOD));
    //     for (let i = n - 1; i >= 1; i--) {
    //         invFactorial[i] = (invFactorial[i + 1] * BigInt(i + 1)) % BigInt(MOD);
    //     }
    
    //     // Compute binomial coefficients using precomputed factorials
    //     for (let r = 2; r < n - 1; r++) {
    //         let binomial = (factorial[n] * invFactorial[r] % BigInt(MOD)) * invFactorial[n - r] % BigInt(MOD);
    //         result = (result + binomial) % BigInt(MOD);
    //     }
    
    //     return Number(result);
    // }
    
    // // Function to compute modular inverse using Fermat's Little Theorem
    // modInverse(a, mod) {
    //     return this.power(a, mod - BigInt(2), mod);
    // }
    
    // // Function to compute (base^exp) % mod
    // power(base, exp, mod) {
    //     let result = BigInt(1);
    //     base = base % mod;
    //     while (exp > 0) {
    //         if (exp % BigInt(2) == 1) {
    //             result = (result * base) % mod;
    //         }
    //         exp = exp >> BigInt(1);
    //         base = (base * base) % mod;
    //     }
    //     return result;
    // }
    
    // Simple, only solution - O(log n)
    distributeBalls(n) {
        const MOD = 1e9 + 7;
        return Number((BigInt(2) ** BigInt(n)) % BigInt(MOD)) - 2;
    }

}